import useFormContext from "../hooks/useFormContext"
import FormInputs from "./FormInputs";
import Axios from "../api/Axios";
import { useNavigate } from "react-router-dom";
const APP_URL = '/application/create-application';

export default function Form(){
    const {title,page,setPage,setData,data,canSubmit,disablePrev,disableNext} = useFormContext();
    const navigate = useNavigate();

    
    const handlePrev = () => setPage(prev => prev - 1)

    const handleNext = () => setPage(prev => prev + 1)

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
                jobTitle:"Webdev",
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
            setPage(0)

            navigate('/');
        } catch(err){
            console.log(err);
            
        }
    }



    return(
        <form onSubmit={handleSubmit} className="text-white flex flex-col items-center bg-[#0d0e23]  px-40 py-10 text-xl rounded-lg max-w-5/8 min-w-5/8">
            <header className="text-3xl">{title[page]}</header>

            <div className="self-end" >
                <button onClick={handlePrev} disabled={disablePrev} className="bg-[#181424] border border-gray-300 border-opacity-20 my-2 rounded-md" >Prev</button>
                <button onClick={handleNext} disabled={disableNext} >Next</button>
                <button type="submit" disabled={!canSubmit} >Submit</button>
            </div>

            <FormInputs />
        </form>
    )
}