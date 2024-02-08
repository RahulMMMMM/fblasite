import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../images/whitelogo.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import axios from "../api/Axios";

const SIGNUP_URL = '/auth/signup';

export default function Signup() {
    const emailRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [firstname, setFirst] = useState('');
    const [lastname, setLast] = useState('');
    const [password, setPassword] = useState('');
    const [cnfrmPassword, setCnfrmPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [email, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(password !== cnfrmPassword){
            setErrMsg("Passwords don't match")
        } else {
            try {
                const response = await axios.post(SIGNUP_URL,
                    { email, password, firstname, lastname },
                    {
                        headers: { 'Content-Type': 'application/json' },
                    }
                );
                
                setEmail('');
                setFirst('');
                setLast('');
                setPassword('');
                setCnfrmPassword('');
    
                navigate('/');
            } catch(err) {
                const errorMsg = err.response.data.message;
                setErrMsg(errorMsg);
            }
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="bg-gradient-to-t from-white from-70% to-[#92cbdf] h-full flex flex-col items-center" >
            <div className="w-1/2 m-8">
                <div className="w-full flex flex-row items-center justify-between mb-24">
                    <img src={logo} className="h-20 w-20 rounded-full" />
                    <div className="flex flex-row space-x-4">
                        <p>Already have an account?</p>
                        <Link to='/login'><strong>Log In</strong><ArrowForwardIcon /></Link>
                    </div>
                </div>
                <form className="flex flex-col items-center space-y-6" onSubmit={handleSubmit} >
                    <h2 className="text-xl">Create Your Account</h2>
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-[352px] h-[48px] bg-[#f0f4f4] px-4"
                        ref={emailRef} 
                        onChange={(e) => setEmail(e.target.value)} 
                        value={email} 
                        required
                    />
                    <input 
                        type="text" 
                        placeholder="First Name" 
                        className="w-[352px] h-[48px] bg-[#f0f4f4] px-4" 
                        onChange={(e) => setFirst(e.target.value)} 
                        value={firstname} 
                        required
                    />
                    <input 
                        type="text" 
                        placeholder="Last Name" 
                        className="w-[352px] h-[48px] bg-[#f0f4f4] px-4" 
                        onChange={(e) => setLast(e.target.value)} 
                        value={lastname} 
                        required
                    />
                    <div className="relative w-[352px]">
                        <input 
                            type={showPassword ? "text" : "password"} 
                            placeholder="Password" 
                            className="w-full h-[48px] bg-[#f0f4f4] px-4" 
                            onChange={(e) => setPassword(e.target.value)} 
                            value={password} 
                            required
                        />
                        <button 
                            type="button" 
                            onClick={togglePasswordVisibility} 
                            className="absolute top-0 right-0 h-full px-3 focus:outline-none"
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                    <input 
                        type="password" 
                        placeholder="Confirm Password" 
                        className="w-[352px] h-[48px] bg-[#f0f4f4] px-4" 
                        onChange={(e) => setCnfrmPassword(e.target.value)} 
                        value={cnfrmPassword} 
                        required
                    />
                    <p ref={errRef} className={errMsg ? "text-red-500" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <button type="submit" className="bg-[#0960b7] rounded-full text-white p-3 w-[352px] h-[48px]">Sign Up</button>
                </form>
            </div>
        </div>
    );
}
