
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
                workExperience:[],
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
      <div className="flex flex-column items-center">
          <h2>Login & Security</h2>
          <div className="log-info-container">
            <div className="info-container">
              <div>
                <strong>Name:</strong>
                <p>{auth.auth.firstname+" "+auth.auth.lastname}</p>
              </div>
              <Link to="/myaccount/change-info?info=name"><button className="edit-button">Edit</button></Link>
            </div>
            <div className="info-container">
              <div>
                <strong>Email:</strong>
                <p>{auth.auth.email}</p>
              </div>
              <Link to="/myaccount/change-info?info=email"><button className="edit-button">Edit</button></Link>
            </div>
            <div className="info-container">
              <div>
                <strong>Password:</strong>
                <p>********</p>
              </div>
              <Link to="/myaccount/change-password"><button className="edit-button">Edit</button></Link>
            </div>
            <div className="info-container-bottom">
              <button className="edit-button" onClick={logout}>Logout</button>
            </div>
            
          </div>
      </div>
    );
}
  