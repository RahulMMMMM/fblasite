import { Link } from "react-router-dom";
import { useRef,useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/Axios";
import useAuthContext from "../hooks/useAuthContext";
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
            const response = await axios.post(LOGIN_URL,
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
        <div className="login-container" >
                <form className="login-form" onSubmit={handleSubmit} >
                    <h2>Login To Your Account</h2>
                    <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="login-input"
                        ref={emailRef} 
                        onChange={(e)=> setEmail(e.target.value)} 
                        value={email} 
                        required/>
                    <input type="password" 
                        placeholder="Password" 
                        className="login-input" 
                        onChange={(e)=> setPassword(e.target.value)} 
                        value={password} 
                        required/>
                    <button type="submit" className="login-button" >Sign In</button>
                </form>
                <p ref={errRef} className={errMsg?"text-red-500":"offscreen"} aria-live="assertive">{errMsg}</p>
                <div className="signup-box">
                <p>Don't have an account?</p>
                <Link to='/signup'>Sign up</Link>
                </div>
        </div>

    );
}