import Form from '../Form/Form';
import useFormContext from '../hooks/useFormContext';


export default function AppForm(){
    

    return(
        <div className='flex flex-col justify-start items-center my-5 bg-[#00000f] h-full'>
            <h1 className='text-white text-4xl my-5'>Application Form</h1>
            <Form />
        </div>
    )
}