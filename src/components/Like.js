import course from "../images/course.webp";
import course1 from "../images/course1.webp";
import author1 from "../images/author1.webp";
import author2 from "../images/author2.jpeg";
import comment from "../images/comment-lines.svg";
import users from "../images/users.svg";
import right from "../images/angle-right.svg";

function Like() {
  return (
    <div class="popular-courses like">
      <div class="common-container">
        <div class="popular-courses-wrapper">
          <div class="title-main">
            <h2 class="common-heading">You May Like</h2>
            {/* <p class="common-paragraph">نتيجة لظروف ما قد تكمن السعاده فيما نتحمله م</p> */}
            <div class="course-main">
              <div class="course-common">
                <img class="course-img" src={course}></img>
                <div class="course-details">
                  <img class="author-img" src={author1}></img>
                  {/* <p class="author">الإنسان</p> */}
                  <p class="title">رياضيات</p>
                  <div class="course-bottom">
                    <div class="course-user-count">
                      <span>
                        7<img src={comment}></img>
                      </span>
                      <span>
                        8<img class="course-us" src={users}></img>
                      </span>
                    </div>
                    <p class="price">$39.00</p>
                  </div>
                </div>
              </div>
              <div class="course-common">
                <img class="course-img" src={course}></img>
                <div class="course-details">
                  <img class="author-img" src={author1}></img>
                  {/* <p class="author">الإنسان</p> */}
                  <p class="title">فيزياء</p>
                  <div class="course-bottom">
                    <div class="course-user-count">
                      <span>
                        7<img src={comment}></img>
                      </span>
                      <span>
                        8<img class="course-us" src={users}></img>
                      </span>
                    </div>
                    <p class="price">$39.00</p>
                  </div>
                </div>
              </div>
              <div class="course-common">
                <img class="course-img" src={course1}></img>
                <div class="course-details">
                  <img class="author-img" src={author2}></img>
                  {/* <p class="author">الإنسان</p> */}
                  <p class="title">Coming Soon</p>
                  <div class="course-bottom">
                    {/* <div class="course-user-count">
                                            <span>7<img src={comment}></img></span>
                                            <span>8<img class="course-us" src={users}></img></span>
                                        </div>
                                        <p class="price">$39.00</p> */}
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

export default Like;
