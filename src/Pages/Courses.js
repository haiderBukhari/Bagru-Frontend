import Breadcrumbs from "../components/Breadcrumbs";
import CourseTitle from "../components/CourseTitle";
import Curriculum from "../components/Curriculum";
import Audience from "../components/Audience";
import { useParams } from "react-router-dom";
import { getCourseByName } from "../constants";
import { useEffect, useState } from "react";
function Courses({}){
    const {name, semester} = useParams();
    const course = getCourseByName(name)
    return(
        <div class="course-page">
                <div class="course-page-wrapper">
                    <Breadcrumbs/>
                    <CourseTitle course={course}/>
                    {/* <Overview/> */}
                    <Curriculum name={name} semester={semester}/>
                    {/* <Instructor/> */}
                    {/* <Reviews/> */}
                    <Audience/>
                    {/* <Like/> */}
                </div>
        </div>
    );
}

export default Courses;