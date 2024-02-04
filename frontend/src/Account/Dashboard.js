
import { Link } from "react-router-dom";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import WorkIcon from '@mui/icons-material/Work';
import useAuthContext from "../hooks/useAuthContext";


const Dashboard = () =>{
    const auth = useAuthContext();

    return(
        <div style={{backgroundColor:"white",padding:"100px"}} className="dash-container">
            <h1>Your Account</h1>
            <div className="a-box-container">
                <Link to="/myaccount/login-security" style={{ textDecoration: 'none' }}>
                    <div className="a-box">
                        <AdminPanelSettingsIcon style={{fontSize: "5rem"}}/>
                        <h2>Login & Security</h2>
                    </div>
                </Link>
                <Link to="/myaccount/applications" style={{ textDecoration: 'none' }}>
                    <div className="a-box">
                        <WorkIcon style={{fontSize: "5rem"}}/>
                        <h2>Applications</h2>
                    </div>
                </Link>
                
                
                
                
            </div>
        </div>
    )
}

export default Dashboard;