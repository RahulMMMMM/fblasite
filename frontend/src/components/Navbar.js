import { Link, Outlet } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useAuthContext from "../hooks/useAuthContext";

export default function Navbar(){
    const auth = useAuthContext();


    return(
        <nav className='flex flex-row px-10 py-5 bg-sky-500 justify-between'>
            <div className='flex flex-row space-x-2'>
                <Link to='/'>Home</Link>
                <Link to='why-us'>Why Us?</Link>
                <Link to='job-openings'>Job Openings</Link>
                <Link to='myaccount/application-form'>Apply Now!</Link>
            </div>
            
            <div className='flex flex-row'>
                {
                    auth.auth?.firstname?.length > 0 ? <p className="nav-greeting">Hello {auth.auth.firstname}</p> : ''
                }
                <Link to='myaccount/dashboard' className='cart-link-container' >
                    <AccountCircleIcon  style={{fontSize: "2rem"}} />
                    <a>Account</a>
                </Link>
            </div>
              
                 
            
            
            

        </nav>
    );
}
