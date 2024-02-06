import useFormContext from "../hooks/useFormContext";

export function SkillsExperience (){

    const { data, handleChange } = useFormContext()

    const content = (
        <div >
           <div className="flex flex-row space-x-6 items-center">
                <label htmlFor="skills">Skills (Use Commas to separate each skill)</label>
                <input type="text" name="skills" id="skills" value={data.skills} placeholder="diligent, creative, etc" onChange={handleChange} className="w-1/2" />
            </div>
            <div className="flex flex-row space-x-6 items-center">
                <label htmlFor="workExperience">Work Experience (Use Commas to separate each job title)</label>
                <input type="text" name="workExperience" id="workExperience" value={data.workExperience} placeholder="Marine Biologist, Data Analyst, etc" onChange={handleChange} />
            </div>


        </div>
    )

    return content
}