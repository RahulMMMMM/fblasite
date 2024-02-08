import { useEffect, useState } from "react"
import Axios from "../api/Axios";




export default function Application(){
    const [applications,setApplications] = useState([]);

    useEffect(()=>{
        const getApps = async()=>{
            try{
                const response = await Axios.get('/application/get-applications',{
                    withCredentials: true
                })

                setApplications(response.data.applications);
            }
            catch(err){
                console.log(err)
            }
        }
        getApps();
    },[])

    return(
        <div className="text-white flex flex-col bg-gradient-to-bl from-[#0d0e23] from-20% to-[#0c4f8c] h-full w-full items-center ">
            <h1 className="text-3xl mb-[40px] mt-[60px]">Submitted Applications</h1>
            <table className="w-1/2 bg-[#0d0e23] p-[40px] rounded-lg "> 
                <thead className="bg-gradient-to-b from-[#0d0e23] from-80% to-[#0c4f8c] ">
                    <tr>
                        <th className="p-[20px]">Id</th>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody> 
                    {
                        applications.map((app)=>{

                            const dateObject = new Date(app.applicationDate);

                            const formattedDate = dateObject.toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                            });

                            return(
                                <tr>
                                    <td className="py-[20px] px-[10px]">{app.id}</td>
                                    <td>{app.job.jobTitle}r</td>
                                    <td>{formattedDate}</td>
                                    <td>{app.status}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            
        </div>
    )
}