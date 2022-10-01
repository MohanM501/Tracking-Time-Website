import React from "react";
import {useParams,Link} from "react-router-dom";
import ProjectManagement from "./FeaturesPage/ProjectManagement";
import TimeTracker from "./FeaturesPage/TimeTracker";


function Features(){


    const params=useParams();
    console.log(params);
    const {id}=params;
    return (<div>
        Hi Features
        {id==="time-tracker"?<TimeTracker/>:""}
        {id==="project-management"?<ProjectManagement/>:""}
    </div>)
}

export default Features;