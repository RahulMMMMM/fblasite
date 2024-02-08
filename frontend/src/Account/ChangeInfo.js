import { useState,useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "../api/Axios";
import useAuthContext from "../hooks/useAuthContext";

export default function ChangeInfo() {
    const [info,setInfo] = useState("");
    const [errMsg,setErrMsg] = useState("");
    const [queryParams] = useSearchParams();
    const errRef = useRef();
    const auth = useAuthContext();

    const query = queryParams.get("info");

    const navigate = useNavigate();

    const onInputChange = async (e) => {

      setInfo(e.target.value)

    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
          const response = await axios.post('/auth/update-user',
            { type:query,info },
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
               
            }

          );

          query === "email" ? auth.setAuthInfo(info,auth.auth.firstname,auth.auth.lastname) : auth.setAuthInfo(auth.auth.email,info.slice(0,info.indexOf(" ")),info.slice(info.indexOf(" ")+1));

          navigate('/myaccount/login-security');
        }
        catch(err){
            const errorMsg = err.response.data.message;
            setErrMsg(errorMsg);
        }
    }

    return (
      <div className="flex flex-col text-white items-center h-full w-full p-[80px] bg-[#00000f]">
        
        <div className="w-1/2 h-1/2 bg-[#0d0e23] flex flex-col items-center space-y-5 p-[40px]">
          <h1 className="text-3xl">Change your {query}</h1>
          <p className="w-1/2 text-center">If you want to change the {query} associated with your Amazon customer account, you may do so below. Be sure to click the Save Changes button when you are done.</p>
          <form className="flex flex-col items-center space-y-5">
            <h3 className="text-xl">New name:</h3>
            <input type="name" placeholder={query==="email"?auth.auth.email:auth.auth.firstname+" "+auth.auth.lastname} className="p-[5px] w-9/10" onChange={onInputChange} />
            <button type="submit" className="bg-gradient-to-tl from-[#714ece] from-10% to-[#0c4f8c] w-[170px] h-[40px] rounded-lg text-xl mt-[40px]" onClick={handleSubmit}>Save Changes</button>
          </form>
          <p ref={errRef} className={errMsg?"text-red-500":"offscreen"} aria-live="assertive">{errMsg}</p>
        </div>
      </div>
    );
}
  