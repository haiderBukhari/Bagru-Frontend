import right from "../images/angle-right.svg";
import React, { useEffect, useState } from "react";

function SubCourses({ navigate, selectedCourse, setTempSelected }) {
    return (
        <div class="popular-courses">
            <div class="common-container">
                <div class="popular-courses-wrapper">
                    <div class="course-main">
                        {
                            selectedCourse?.subCourses.map((course, index) => (
                                <div
                                    aria-label="Close"
                                    class="course-common"
                                    key={index}
                                    data-bs-toggle={course?.details?.length > 0 ? "modal" : ""}
                                    data-bs-target={course?.details?.length > 0 ? "#showSubCoursesModal" : ""}
                                    onClick={() => {
                                        course?.details?.length > 0
                                            ? setTempSelected(course)
                                            : navigate("/courses/" + course.name + "/details");
                                    }}
                                >
                                    <img class="course-img" src={course.courseImage} />
                                    <div class="course-details">
                                        <img class="author-img" src={course.authorImage} />
                                        <p class="title">{course.displayName}</p>
                                        <div class="course-bottom"></div>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <div class="view-cont">
                        <button class="view-all">
                            View All Courses{" "}
                            <img class="course-view" src={right} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubCourses;