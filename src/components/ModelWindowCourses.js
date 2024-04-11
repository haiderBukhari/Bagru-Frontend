import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import right from "../images/angle-right.svg";
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

export default function CourseSelection({ open, setOpen, selectedCourse }) {
    const navigate = useNavigate();
    const [tempCourse, setTempCourses] = React.useState(null);

    const handleClose = () => {
        setTempCourses(null);
        setOpen(false);
    };
    React.useEffect(() => {
        console.log(tempCourse);
    }, [tempCourse])

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <IconButton aria-label="close" onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <div class="modal-body">
                        <div class="popular-courses">
                            <div class="common-container">
                                <div class="popular-courses-wrapper">
                                    <div class="course-main">
                                        {!tempCourse && selectedCourse &&
                                            selectedCourse?.subCourses.map((course, index) => (
                                                <div
                                                    class="course-common w-[200px] mx-1"
                                                    key={index}
                                                    onClick={() => {
                                                        if (course.details?.length) {
                                                            setTempCourses(course)
                                                        } else {
                                                            navigate(
                                                                "/courses/" +
                                                                course?.name +
                                                                "/details"
                                                            );
                                                        }
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
                                        {tempCourse &&
                                            tempCourse?.details.map((course, index) => (
                                                <div
                                                    class="course-common w-[200px] mx-1"
                                                    key={index}
                                                    onClick={() => {
                                                        navigate(
                                                            "/courses/" +
                                                            tempCourse?.name + '/' +
                                                            course?.name +
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
                </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}
