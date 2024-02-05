


export default function JobCard(props){


   

    return(
        <div className="flex flex-row">
            <h2>{props.jobTitle}</h2>
            <h2>{props.jobCategory}</h2>
            <h2>{props.positionType}</h2>
            <h2>{props.location}</h2>
            <h2>{props.reqId}</h2>
        </div>
    );
}