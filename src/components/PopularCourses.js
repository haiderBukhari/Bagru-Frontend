import coming from "../images/coming.avif";
import right from "../images/angle-right.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import CourseSelection from "./ModelWindowCourses";

function PopularCourses({ courses, selectedCourse, setSelectedCourse }) {
    const navigate = useNavigate();
    const [tempSelected, setTempSelected] = useState(null);
    const [open, setOpen] = useState(false);
    console.log(selectedCourse);
    return (
        <div class="popular-courses">
            <div class="common-container">
                <div class="popular-courses-wrapper">
                    <h2 class="common-heading">دوراتنا</h2>
                    {/* <p class="common-paragraph">نتيجة لظروف ما قد تكمن السعاده فيما نتحمله م</p> */}
                    <div class="course-main">
                        {
                            courses?.map((course, index) => {
                                return <div className="course-common" key={index}
                                    onClick={() => {
                                        if(course?.subCourses?.length > 0){
                                            setSelectedCourse(course);
                                            setOpen(true);
                                        }else{
                                            navigate('/courses/' + course.name + '/details')
                                        }
                                    }}
                                >
                                    <img class="course-img" src={course.courseImage} />
                                    <div class="course-details">
                                        <img class="author-img" src={course.authorImage}></img>
                                        <p class="title">{course.displayName}</p>
                                        <div class="course-bottom">
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                        <div class="course-common">
                            <img class="course-img" src={coming}></img>
                            <div class="course-details">
                                <img class="author-img" src={coming}></img>
                                <p class="title">Coming Soon</p>
                                <div class="course-bottom">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="view-cont">
                        <Link to="/courses"><button class="view-all">View All Courses <img class="course-view" src={right}></img></button></Link>
                    </div>
                </div>
            </div>
            <CourseSelection open={open} setOpen={setOpen} selectedCourse={selectedCourse}/>

            {/* <CourseModal navigate={navigate} setSelectedCourse={setSelectedCourse} selectedCourse={selectedCourse} setTempSelected={setTempSelected} /> */}
            {/* <CourseModal1 navigate={navigate} setSelectedCourse={setTempSelected} selectedCourse={tempSelected} /> */}
        </div>
    );
}

export default PopularCourses;