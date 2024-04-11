import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import PopularCourses from '../components/PopularCourses'
import course from "./../images/maths.avif";
import course2 from "./../images/physics.jpg";
import React from "react";
import { courses } from "../constants";

function CourseMain(){

    const [selectedCourse, setSelectedCourse] = React.useState(null);
    return(
        <div class="coursed-main">
                <div class="coursed-main-wrapper">
                    <Breadcrumbs/>
                    <PopularCourses courses={courses} setSelectedCourse={setSelectedCourse} selectedCourse={selectedCourse}/>
                </div>
        </div>
    );
}

export default CourseMain;