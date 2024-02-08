
import { Link } from "react-router-dom";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import WorkIcon from '@mui/icons-material/Work';
import useAuthContext from "../hooks/useAuthContext";


const Dashboard = () =>{
    const auth = useAuthContext();

    return(
        <div className="flex flex-col items-center w-full h-full bg-gradient-to-bl from-[#0d0e23] from-20% to-[#6224A8] bg-gradient-to-br from-[#0d0e23] from=20% to-[#6224A8]">
            <div  className="bg-[#0d0e23] w-2/3 text-white flex flex-col mt-[100px] items-center p-[40px]">
                <h1 className="text-2xl">Welcome To Your Account Dashboard</h1>
                <div className="a-box-container flex flex-row m-[40px] space-x-[100px]">
                    <Link to="/myaccount/login-security" >
                        <div className="flex flex-col items-center min-h-[150px] max-h-[200px] max-w-[200px] min-w-[200px] bg-[#252639] p-[25px] rounded-lg">
                            <AdminPanelSettingsIcon style={{fontSize: "7rem"}} />
                            <h2 className="text-xl">Login & Security</h2>
                        </div>
                    </Link>
                    <Link to="/myaccount/applications" >
                        <div className="flex flex-col items-center min-h-[150px] max-h-[200px] max-w-[200px] min-w-[200px] bg-[#252639] p-[25px] rounded-lg">
                            <WorkIcon style={{fontSize: "7rem"}}/>
                            <h2 className="text-xl">Applications</h2>
                        </div>
                    </Link>
                    
                    
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Dashboard;