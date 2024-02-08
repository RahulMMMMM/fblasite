import { Link } from "react-router-dom";



export default function JobCard(props){


   

    return(
        <div class="flex flex-row w-full h-166 p-[20px] items-center justify-between bg-[#252639] rounded-full">
            <div class="flex flex-col m-[20px] flex-grow">
                <h2 class="text-2xl">{props.jobTitle}</h2>
                <h2 class="text-sm text-[#b3b3b3]">Req ID: {props.reqId}</h2>
            </div>
            <div class="flex flex-col m-0 p-2 flex-grow">
                <h2 class="text-[#b3b3b3]">Location</h2>
                <h2 class="text-lg">{props.location}</h2>
            </div>
            <div class="flex flex-col m-0 p-2 flex-grow">
                <h2 class="text-[#b3b3b3]">Job Category</h2>
                <h2 class="text-lg">{props.jobCategory}</h2>
            </div>
            <div class="flex flex-col m-0 p-2 flex-grow">
                <h2 class="text-[#b3b3b3]">Position Type</h2>
                <h2 class="text-lg">{props.positionType}</h2>
            </div>
            <Link to={`/myaccount/application-form?reqid=${props.reqId}`} ><button class="bg-gradient-to-tl from-[#714ece] from-10% to-[#0c4f8c] w-[130px] h-[40px] rounded-full">Apply Now</button></Link>
        </div>
    );
}