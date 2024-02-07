import { Link, Outlet } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useAuthContext from "../hooks/useAuthContext";
import logo from '../images/logo.png';

export default function Navbar(){
    const auth = useAuthContext();


    return(
        <nav className='flex flex-row px-10 py-5 bg-inherit justify-center text-white border-b border-gray-300 border-opacity-20 items-center max-h-90'>
            <Link to='/'><img src={logo} alt='Plato' className='h-12 w-12' m-0/></Link>
            <div className='flex flex-row space-x-4 mx-20'>
                <Link to='why-us'>Why Us?</Link>
                <Link to='job-openings'>Job Openings</Link>
            </div>
            
            <div >
                
                <Link to='myaccount/dashboard' className='flex flex-row items-center justify-center space-x-4' >
                    {
                        auth.auth?.firstname?.length > 0 ? <p className="nav-greeting">Hello {auth.auth.firstname}</p> : ''
                    }
                    <AccountCircleIcon  style={{fontSize: "2rem"}} />
                    <a>Account</a>
                </Link>
            </div>
              
                 
            
            
            

        </nav>
    );
}
