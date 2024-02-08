
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/Axios";
import useAuthContext from "../hooks/useAuthContext";
import useFormContext from "../hooks/useFormContext";

export default function LoginSecurity() {
    const auth = useAuthContext();
    const navigate = useNavigate();
    const {setData}=useFormContext();

    const logout = async () =>{
      try{
          const response = await axios.post('/auth/logout',{},{
              withCredentials: true
          }
          );
          console.log(response.data.message)
          if(response.data.message){
              auth.deleteAll();
              setData({
                jobTitle:"",
                firstName:"",
                lastName:"",
                email:"",
                school:"",
                degree:"",
                major:"",
                gradYear:"",
                workExperience:"",
                skills:"",
                coverLetter:""
            });
              navigate('/');
          }
          else{
              console.log("Unable to logout")
          }
      }
      catch(err){
          console.log(err);
      }
    }



    
    return (
      <div className="h-full w-full flex flex-col items-center text-white bg-[#00000f]">
          <h2 className="text-3xl m-[40px]">Login & Security</h2>
          <div className="p-[40px] bg-[#0d0e23] rounded-lg w-1/5 h-3/5 flex flex-col items-center space-y-4">
            <div className="flex flex-col items-center space-y-4">
                <strong className="text-2xl mb-[5px]">Name:</strong>
                <p className="text-xl">{auth.auth.firstname+" "+auth.auth.lastname}</p>
              <Link to="/myaccount/change-info?info=name"><button className="bg-gradient-to-tl from-[#714ece] from-10% to-[#0c4f8c] w-[100px] h-[35px] rounded-lg">Edit</button></Link>
            </div>
            <div className="flex flex-col items-center space-y-4">

                <strong className="text-2xl mb-[5px]">Email:</strong>
                <p className="text-xl">{auth.auth.email}</p>

              <Link to="/myaccount/change-info?info=email"><button className="bg-gradient-to-tl from-[#714ece] from-10% to-[#0c4f8c] w-[100px] h-[35px] rounded-lg">Edit</button></Link>
            </div>
            <div className="flex flex-col items-center space-y-4">
                <strong className="text-2xl mb-[5px]">Password:</strong>
                <p className="text-xl">********</p>
              <Link to="/myaccount/change-password"><button className="bg-gradient-to-tl from-[#714ece] from-10% to-[#0c4f8c] w-[100px] h-[35px] rounded-lg">Edit</button></Link>
            </div>
            <div >
              <button className="bg-gradient-to-tl from-[#714ece] from-10% to-[#0c4f8c] w-[200px] h-[50px] rounded-lg text-xl mt-[40px]" onClick={logout}>Logout</button>
            </div>
            
          </div>
      </div>
    );
}
  