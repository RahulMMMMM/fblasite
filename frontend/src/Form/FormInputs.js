import { InfoEducation } from "./InfoEducation";
import { SkillsExperience } from "./SkillsExperience";
import { CoverLetter } from "./CoverLetter";
import useFormContext from "../hooks/useFormContext"

const FormInputs = () => {

    const { page } = useFormContext()

    const display = {
        0: <InfoEducation />,
        1: <SkillsExperience />,
        2: <CoverLetter />
    }

    const content = (
        <div >
            {display[page]}
        </div>
    )


    return content
}
export default FormInputs