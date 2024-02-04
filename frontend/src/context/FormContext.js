import {createContext , useState, useEffect} from 'react';


export const FormContext = createContext();


export const FormContextProvider = ({children}) => {

    const title = {
        0: "Personal Information & Education",
        1: "Experience & Skills",
        2:"Cover Letter"

    }

    const [page,setPage] = useState(0);

    const [data,setData]=useState({
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

    useEffect(() => {
        const formData = localStorage.getItem("formData");
        if(formData){
            setPage(JSON.parse(formData).page);
            setData(JSON.parse(formData).data)
        }
        
    }, []);
    
    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify({
            data:data,
            page:page
        }));
    }, [data,page]);

    const handleChange = e => {
        const type = e.target.type

        const name = e.target.name

        const value = type === "checkbox"
            ? e.target.checked
            : e.target.value

        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }
    
    const canSubmit =  Object.keys(data)
        .map(key => data[key])
        .every(Boolean)
    ;

    const canNext1 =  Object.keys(data)
            .slice(0, 8) 
            .map(key => data[key])
            .every(Boolean)

    ;

    const canNext2 =  Object.keys(data)
            .slice(8, 10) 
            .map(key => data[key])
            .every(Boolean)
;

    const disablePrev = page === 0

    const disableNext =
        (page === Object.keys(title).length - 1)
        || (page === 0 && !canNext1)
        || (page === 1 && !canNext2)

    return(
        <FormContext.Provider value={{title,page,setPage,data,setData,handleChange,canSubmit,disablePrev,disableNext}}>
            {children}
        </FormContext.Provider>
    ) 
}



