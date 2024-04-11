import right from "../images/angle-right.svg";
function CourseModal1({ selectedCourse, setSelectedCourse, navigate }) {
    console.log("selected course", selectedCourse)
    return (
        <div class="coursed-modal">
            <div class="coursed-modal-wrapper">
                <div
                    class="modal fade"
                    id="showSubCoursesModal"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabindex="-1"
                    aria-labelledby="showSubCoursesModalLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <button
                                type="button"
                                class="btn-close modal-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={() => setSelectedCourse(null)}
                            ></button>
                            <div class="modal-body">
                                <div class="popular-courses">
                                    <div class="common-container">
                                        <div class="popular-courses-wrapper">
                                            <div class="course-main">
                                                {selectedCourse &&
                                                    selectedCourse?.details.map((course, index) => (
                                                        <div
                                                            class="course-common"
                                                            key={index}
                                                            onClick={() => {
                                                                navigate(
                                                                    "/courses/" +
                                                                    selectedCourse?.displayName +
                                                                    "/" +
                                                                    course.name +
                                                                    "/details"
                                                                );
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseModal1;
