import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import JobOpenings from './pages/JobOpenings';
import WhyUs from './pages/WhyUs';
import AppForm from './pages/AppForm';
import Navbar from "./components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import UserRoute from "./components/UserRoute";
import Dashboard from "./Account/Dashboard";
import LoginSecurity from "./Account/LoginSecurity";
import ChangeInfo from "./Account/ChangeInfo";
import ChangePassword from "./Account/ChangePassword";
import { FormContextProvider } from "./context/FormContext";
import WithoutNav from "./components/WithoutNav";
import WithNav from "./components/WithNav";

export default function App() {

  return (
    <FormContextProvider>
    <AuthContextProvider>
      <BrowserRouter>
        <>
          <head>
            <title>Plato</title>
          </head>
          
            <Routes>
              <Route element={<WithNav />}>
                {/*Public routes*/}
                <Route exact path="" element={<Home  />} />
                <Route path="job-openings" element={<JobOpenings />} />
                <Route path="why-us" element={<WhyUs/>} />
                
                
                
                {/*Private routes*/}
                <Route path="myaccount" element={<UserRoute />}>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="application-form" element={<AppForm />} />
                  <Route path="login-security" element={<LoginSecurity />} />                       
                  <Route path="change-info" element={<ChangeInfo />} />
                  <Route path="change-password" element={<ChangePassword />} />
                </Route>
              </Route>

              <Route element={<WithoutNav />}>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
              </Route>

            </Routes>
          
          
        </>

      </BrowserRouter>
    </AuthContextProvider>
    </FormContextProvider>
    
  );
}


