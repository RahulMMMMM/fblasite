import Form from '../Form/Form';
import useFormContext from '../hooks/useFormContext';


export default function AppForm(){
    const {title,page,setPage,data,setData} = useFormContext();

    return(
        <div>
            <h1>Application Form</h1>
            <Form />
        </div>
    )
}