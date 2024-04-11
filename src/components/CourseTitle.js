import title from "../images/title.jpg"
import star from "../images/star.svg"
import corse from "../images/course-img.png"
import book from "../images/book.svg"
import question from "../images/question.svg"
import clock from "../images/clock.svg"
import arrow from "../images/arrow-alt-to-top.svg"
import language from "../images/language.svg"
import graduate from "../images/user-graduate.svg"
import ticket from "../images/ticket.svg"
import facebook from "../images/facebook.svg";
import twitter from "../images/x-twitter.svg";
import pinterest from "../images/pinterest.svg";
import instagram from "../images/instagram.svg";
import coming from "../images/coming.avif";

function CourseTitle({course}){
    return(
        <div className="course-new">
            <div class="course-title">
                <div class="common-container">
                    <div class="course-title-wrapper">
                        <div class="title-main">
                            <h2>{course.displayName}</h2>
                            <p>المغلوطة حول استنكار  النشوة وتمجيد الألم نشأت بالفعل، وسأعرض لك التفاصيل</p>
                            {/* <div class="title-details">
                                <div class="title-common">
                                    <img class="title-img" src={title} alt="title"></img>
                                    <div>
                                        <p>Teacher</p>
                                        <a href="#">maitp</a>
                                    </div>
                                </div>
                                <div class="title-common">
                                        <p>Categories</p>
                                        <a href="#">Online Business,</a>
                                        <a href="#"> Technology</a>
                                </div>
                            </div> */}
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="course-sticky">
                <div class="buy-course">
                    <img class="course-img" src={course.courseImage} alt="course"></img>
                    <div class="buy-inner">
                    <h2>$150.00</h2>
                    <a href="#"  data-bs-toggle="modal" data-bs-target="#comingsoon">BUY NOW</a>

                    <div class="modal fade coming-modal" id="comingsoon" data-bs-keyboard="false" tabindex="-1" aria-labelledby="comingsoonLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <img src={coming} className="coming-image"/>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="features">
                        <h3>Course Features</h3>
                        <ul>
                            <li><img class="book-img" src={book} alt="book"></img>Lectures 20</li>
                            {/* <li><img class="question-img" src={question} alt="question"></img>Quizzes 0</li> */}
                            <li><img class="clock-img" src={clock} alt="clock"></img>Duration Lifetime access</li>
                            {/* <li><img class="arrow-img" src={arrow} alt="arrow"></img>Skill level All levels</li>
                            <li><img class="language-img" src={language} alt="language"></img> Language English</li> */}
                            <li><img class="graduate-img" src={graduate} alt="graduate"></img>Students 52</li>
                            <li><img class="ticket-img" src={ticket} alt="ticket"></img>Assessments Yes</li>
                        </ul>
                    </div>
                    <div class="socials-main">
                        <span></span>
                        <ul>
                            <li class="socials">
                                <img src={facebook}></img>
                                <img src={twitter}></img>
                                <img src={pinterest}></img>
                                <img src={instagram}></img>
                            </li>
                        </ul>
                        <span></span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseTitle;