import useFormContext from "../hooks/useFormContext"
import FormInputs from "./FormInputs";
import Axios from "../api/Axios";
import { useNavigate,useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import RefreshIcon from '@mui/icons-material/Refresh';
const APP_URL = '/application/create-application';

export default function Form(){
    const {title,page,setPage,setData,data,canSubmit,disablePrev,disableNext} = useFormContext();
    const navigate = useNavigate();
    const [queryParams] = useSearchParams();
    const [showModal, setShowModal] = useState(false);
    
    const handlePrev = () => setPage(prev => prev - 1)

    const handleNext = () => setPage(prev => prev + 1)

    useEffect(()=>{
        if(data.jobTitle===""){
            const jobTitle = queryParams.get("reqid");

            setData({
                ...data,
                jobTitle:jobTitle
            })
        }
    },[])


    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const response = await Axios.post(APP_URL,
                { data },
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                   
                }
            );
            
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
            setPage(0)
            setShowModal(true);
            setTimeout(() => {
                setShowModal(false); 
                navigate('/'); 
            }, 2000);
        } catch(err){
            console.log(err);
            
        }
    }



    return(
        <form onSubmit={handleSubmit} className="text-white flex flex-col items-center  bg-gradient-to-tl from-[#0d0e23] from-80% to-[#0c4f8c] px-40 py-10 text-xl rounded-lg max-w-5/8 min-w-5/8">
            {showModal && (
                <div className="fixed top-0 left-0 w-full h-full flex items-start justify-center bg-black bg-opacity-50">
                <div className="p-6 mt-6 rounded-lg bg-[#181424] flex flex-col items-center space-y-2">
                    <p className="text-lg ">Form submitted successfully!</p>
                    <RefreshIcon class="h-[50px] w-[50px] animate-spin fill-white" />
                </div>
                 </div>
            )}
            <header className="text-3xl">{title[page]}</header>

            <div className="self-end flex flex-row space-x-4 mt-4 m-2" >
                {page===0? null :<button type="button" onClick={handlePrev} disabled={disablePrev} className="bg-gradient-to-tl from-[#714ece] from-10% to-[#0c4f8c] w-[100px] h-[40px] rounded-full" >Prev</button>}
                {page===2? null : <button type="button" onClick={handleNext} disabled={disableNext} className="bg-gradient-to-tl from-[#714ece] from-10% to-[#0c4f8c] w-[100px] w-[100px] h-[40px] rounded-full" >Next</button>}
                <button type="submit" disabled={!canSubmit} className="bg-gradient-to-tl from-[#714ece] from-10% to-[#0c4f8c] w-[100px] w-[100px] h-[40px] rounded-full" >Submit</button>
            </div>

            <FormInputs />
        </form>
    )
}