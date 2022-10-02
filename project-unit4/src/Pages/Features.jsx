import React from "react";
import {useParams,Link} from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ProjectManagement from "./FeaturesPage/ProjectManagement";
import TimeTracker from "./FeaturesPage/TimeTracker";



function Features(){


    const params=useParams();
    console.log(params);
    const {id}=params;
    
    return (<div>
        Hi Features
        <Navbar></Navbar>
        {id==="time-tracker"?<TimeTracker/>:""}
        {id==="project-management"?<ProjectManagement/>:""}
        <Footer/>
    </div>)
}

export default Features;