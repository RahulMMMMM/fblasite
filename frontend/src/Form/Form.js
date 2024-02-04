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
        <form onSubmit={handleSubmit}>
            <header>{title[page]}</header>

            <div>
                <button onClick={handlePrev} disabled={disablePrev} >Prev</button>
                <button onClick={handleNext} disabled={disableNext} >Next</button>
                <button type="submit" disabled={!canSubmit} >Submit</button>
            </div>

            <FormInputs />
        </form>
    )
}