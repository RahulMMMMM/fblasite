import useFormContext from "../hooks/useFormContext";

export function InfoEducation (){

    const { data, handleChange } = useFormContext()

    const content = (
        <div>
            <div>
                <h3>Personal Information</h3>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" value={data.firstName} onChange={handleChange} />
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" value={data.lastName} onChange={handleChange} />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={data.email} onChange={handleChange} />
            </div>
            <div>
                <h3>Education</h3>
                <label htmlFor="school">School</label>
                <input type="text" name="school" id="school" value={data.school} onChange={handleChange} />
                <label htmlFor="degree">Degree</label>
                <input type="text" name="degree" id="degree" value={data.degree} onChange={handleChange} />
                <label htmlFor="major">Major</label>
                <input type="text" name="major" id="major" value={data.major} onChange={handleChange} />
                <label htmlFor="gradYear">Graduation Year</label>
                <input type="text" name="gradYear" id="gradYear" pattern="^(19|20)\d{2}$" value={data.gradYear} onChange={handleChange} />
            </div>
        </div>
    )

    return content
}