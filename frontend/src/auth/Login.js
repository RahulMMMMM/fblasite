import { Link } from "react-router-dom";
import { useRef,useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../api/Axios";
import useAuthContext from "../hooks/useAuthContext";
import logo from '../images/whitelogo.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const LOGIN_URL = '/auth/login';


export default function Login() {
    const auth = useAuthContext();
    const emailRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, password]) 

 
    const handleSubmit = async (e) =>{
        e.preventDefault();
        
        try{
            const response = await Axios.post(LOGIN_URL,
                { email, password },
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                   
                }
            );
                console.log(response)
            const useremail = response?.data?.email;
            const firstname = response?.data?.firstname;
            const lastname = response?.data?.lastname;
            auth.setAuthInfo(useremail,firstname,lastname);
            setEmail('');
            setPassword('');
            navigate('/');
        } catch(err){
            const errorMsg = err.response.data.message;
            console.log(errorMsg)
            setErrMsg(errorMsg);
            
        }
        
    }

    return (
        <div className="bg-gradient-to-t from-white from-70% to-[#92cbdf] h-full flex flex-col items-center" >
            <div className="w-1/2 m-8">
                <div className="w-full flex flex-row items-center justify-between mb-24">
                    <img src={logo} className="h-20 w-20 rounded-full" />
                    <div className="flex flex-row space-x-4">
                        <p>Don't have an account?</p>
                        <Link to='/signup'><strong>Sign Up</strong><ArrowForwardIcon /></Link>
                        
                    </div>
                </div>
                <form className="flex flex-col items-center space-y-6" onSubmit={handleSubmit} >
                        <h2 className="text-xl">Login To Your Account</h2>
                        <input 
                            type="email" 
                            placeholder="Email Address" 
                            className="w-[352px] h-[48px] bg-[#f0f4f4] px-4"
                            ref={emailRef} 
                            onChange={(e)=> setEmail(e.target.value)} 
                            value={email} 
                            required/>
                        <input type="password" 
                            placeholder="Password" 
                            className="w-[352px] h-[48px] bg-[#f0f4f4] px-4" 
                            onChange={(e)=> setPassword(e.target.value)} 
                            value={password} 
                            required/>
                        <p ref={errRef} className={errMsg?"text-red-500":"offscreen"} aria-live="assertive">{errMsg}</p>
                        <button type="submit" className="bg-[#0960b7] rounded-full text-white p-3 w-[352px] h-[48px]" >Log In</button>
                </form>
                    
                    
            </div>
        </div>

    );
}