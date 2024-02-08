import innovation from '../images/innovation.jpg';
import professionalGrowth from '../images/professionalGrowth.jpg';
import worklife from '../images/worklife.jpg';
import collab from '../images/collab.jpg';
import cuttech from '../images/cuttech.jpg';




export default function WhyUs(){

    return(
        <div className="text-white flex flex-col items-center justify-start  bg-gradient-to-br from-[#0d0e23] via-transparent to-transparent p-8">
            <div className="flex flex-col justify-start items-center h-3/5 w-2/3">
                <h1 className="text-7xl m-9">Why Join Plato Inc?</h1>
                    <div className="flex flex-col justify-start items-center space-y-5">
                        <div className="flex flex-row items-center bg-[#0d0e23] rounded-full w-1/2 overflow-hidden max-h-[300px]">
                            <div className="w-1/2 flex flex-col items-center text-center p-[40px]">
                                <h2 className="text-2xl m-2">Innovation at its Core</h2>
                                <h3 className="text-lg">
                                    At Plato, innovation is not just a buzzword; it's a way of life. We foster a culture that encourages out-of-the-box thinking and creativity. Join us to be a part of groundbreaking projects that redefine the future of mixed reality.
                                </h3>
                            </div>
                            <div className="w-1/2  ">
                                <img src={innovation} alt="Image" className="min-w-full min-h-full object-cover overflow-hidden" />
                            </div>
                        </div>
                        <div className="flex flex-row items-center bg-[#0d0e23] rounded-full w-1/2 overflow-hidden max-h-[300px]">
                        <div className="w-1/2 flex flex-col items-center text-center p-[40px]">
                            <h2 className="text-2xl m-2">Collaborative Environment</h2>
                            <h3 className="text-lg">
                            We believe in the strength of collaboration. Working at Plato means being part of a dynamic team where diverse talents come together to create extraordinary experiences. Your ideas will be valued, and your voice will be heard.
                            </h3>
                        </div>
                        <div className="w-1/2">
                            <img src={collab} alt="Collaboration" className="w-full h-full object-cover" />
                        </div>
                        </div>
                        <div className="flex flex-row items-center bg-[#0d0e23] rounded-full w-1/2 overflow-hidden max-h-[300px]">
                        <div className="w-1/2 flex flex-col items-center text-center p-[40px]">
                            <h2 className="text-2xl m-2">Professional Growth</h2>
                            <h3 className="text-lg">
                            Plato is committed to the growth and development of its employees. We offer continuous learning opportunities, mentorship programs, and career advancement paths to ensure you're always reaching new heights in your career.
                            </h3>
                        </div>
                        <div className="w-1/2">
                            <img src={professionalGrowth} alt="Growth" className="w-full h-full object-cover" />
                        </div>
                        </div>

                        <div className="flex flex-row items-center bg-[#0d0e23] rounded-full w-1/2 overflow-hidden max-h-[300px]">
                        <div className="w-1/2 flex flex-col items-center text-center p-[40px]">
                            <h2 className="text-2xl m-2">Work-Life Balance</h2>
                            <h3 className="text-lg">
                            We understand the importance of a healthy work-life balance. At Plato, we encourage a flexible work environment that allows you to excel professionally while enjoying your personal life.
                            </h3>
                        </div>
                        <div className="w-1/2">
                            <img src={worklife} alt="Balance" className="w-full h-full object-cover" />
                        </div>
                        </div>
                        <div className="flex flex-row items-center bg-[#0d0e23] rounded-full w-1/2 overflow-hidden max-h-[300px]">
                        <div className="w-1/2 flex flex-col items-center text-center p-[40px]">
                            <h2 className="text-2xl m-2">Cutting-Edge Technology</h2>
                            <h3 className="text-lg">
                            As a pioneer in mixed reality, Plato provides an opportunity to work with the latest VR and AR technologies. Stay at the forefront of the industry and contribute to projects shaping immersive experiences' future.
                            </h3>
                        </div>
                        <div className="w-1/2">
                            <img src={cuttech} alt="Technology" className="w-full h-full object-cover" />
                        </div>
                        </div>

                    </div>
            </div>
        </div>
    )
}