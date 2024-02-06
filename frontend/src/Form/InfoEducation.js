import useFormContext from "../hooks/useFormContext";

export function InfoEducation (){

    const { data, handleChange } = useFormContext()

    const content = (
        <div className="flex flex-col items-center">
            <h3 className="m-4 text-2xl">Personal Information</h3>
            <div className="flex flex-row justify-center space-x-10">
                
                <div className="flex flex-col items-start">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName" value={data.firstName} onChange={handleChange} className="" />
                </div>
                <div className="flex flex-col items-start">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" id="lastName" value={data.lastName} onChange={handleChange} />
                </div>
                <div className="flex flex-col items-start">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={data.email} onChange={handleChange} />
                </div>
                
            </div>
            <div>
                <h3>Education</h3>
                <div className="flex flex-row justify-center space-x-10">
                
                <div className="flex flex-col items-start">
                <label htmlFor="school">School</label>
                <input type="text" name="school" id="school" value={data.school} onChange={handleChange} />
                </div>
                <div className="flex flex-col items-start">
                <label htmlFor="degree">Degree</label>
                <input type="text" name="degree" id="degree" value={data.degree} onChange={handleChange} />
                </div>
                <div className="flex flex-col items-start">
                <label htmlFor="major">Major</label>
                <input type="text" name="major" id="major" value={data.major} onChange={handleChange} />
                </div>
                <div className="flex flex-col items-start">
                    <label htmlFor="gradYear">Graduation Year</label>
                    <input type="text" name="gradYear" id="gradYear" pattern="^(19|20)\d{2}$" value={data.gradYear} onChange={handleChange} />
                </div>
                
            </div>
                
                
                
                
            </div>
        </div>
    )

    return content
}