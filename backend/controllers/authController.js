const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = asyncHandler(async (req,res,next)=>{
    const {email, password} = req.body;
    if(!email||!password){
        return res.status(400).json({message:'Missing fields'})
    }

    const user = await User.findOne({email}).exec();
    if(!user){
        return res.status(400).json({message:'User does not exist'});
    }

    const match = await bcrypt.compare(password,user.password);
    if(!match) return res.status(401).json({message:'Incorrect email or password'});

    const token = jwt.sign({'id':user._id},process.env.JWT_SECRET,{
        expiresIn: '7d'
    });
    res.cookie("token",token,{
        httpOnly: true,
    })
    res.json({email:user.email,firstname:user.firstname,lastname:user.lastname,cart:user.cart,saved:user.saved});
    next();
})

const currentUser = asyncHandler(async(req,res)=>{
    const {token} = req.cookies

    if(token===undefined){
        return res.status(500).json({message:'Unauthorized user'})
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).exec()
    
    if(user){
        return res.json({ok:true})
    }

    return res.status(500).json({message:'Unauthorized user'})

})

const logout = asyncHandler(async (req, res)=>{
    try {
        res.clearCookie("token");
        return res.json({ message: "Signout success" });
       } catch (err) {
        console.log(err);
        return res.status(400).send("Error. Try again.");
    }
})

const createUser = asyncHandler(async (req, res)=>{
    const {email,password,firstname,lastname} = req.body;

    const duplicate = await User.findOne({email}).lean().exec();

    if(duplicate){
        return res.status(409).json({message:'Account with email already exists'})
    }


    const hashedPwd = await bcrypt.hash(password,10);

    const userObject = {email,"password":hashedPwd,firstname,lastname}

    const user = await User.create(userObject);

    if(user){

        return res.status(200).json({message:`New user ${email} created`})
    } else{
        return res.status(400).json({message:'Invalid data received'})
    }
})

const updateUser = asyncHandler(async (req, res)=>{
    const {type,info} = req.body;

    const {token} = req.cookies

    if(token===undefined){
        return res.status(500).json({message:'Unauthorized user'})
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).exec()

    if(type==="name"){
        const firstname = info.slice(0,info.indexOf(" "));
        const lastname = info.slice(info.indexOf(" ")+1);

        const result = await user.updateOne({firstname:firstname,lastname:lastname});

        if(result){
            res.status(200).json({message:"successfully changed name"});
        }

        res.status(400).json({message:"Unable to change name"});
    }
    else if(type==="email"){
        const email = info;

        const result = await user.updateOne({email:email});

        if(result){
            res.status(200).json({message:"successfully changed email"});
        }

        res.status(400).json({message:"Unable to change email"});
    }
    else{
        const newPassword = info[0];
        const cnfrmPassword = info[1];

        const compare = await bcrypt.compare(cnfrmPassword,user.password);
        if(compare===true){
            const hashedPwd = await bcrypt.hash(newPassword,10); 

            const result = await User.updateOne({password:hashedPwd});

            if(result){
                res.status(200).json({message:"successfully changed password"});
            }

            res.status(400).json({message:"Unable to change password"});
        }
        else{
            res.status(401).json({message:"Incorrect password"});
        }

    }

    return res.status(400).json({message:"Nothing Changed"});

})


module.exports = {
    login,
    logout,
    currentUser,
    createUser,
    updateUser

}