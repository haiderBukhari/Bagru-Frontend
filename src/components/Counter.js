import file from "../images/file-invoice.svg";
import earth from "../images/earth.svg";
import user from "../images/user-graduate.svg";
import cap from "../images/graduation-cap-solid.svg";
function Counter(){
    return(
        <div class="counter why-us">
            <div class="overlay-img"></div>
            <div class="common-container">
                <div class="counter-wrapper">
                    <h2 class="common-heading">لماذا نحن</h2>
                    {/* <div class="counter-common">
                        <img class="counter-img" src={file}></img>
                        <h2>94532</h2>
                        <p>Learners</p>
                    </div>

                    <div class="counter-common">
                        <img class="counter-img" src={user}></img>
                        <h2>60483</h2>
                        <p>Graduates</p>
                    </div>
                    <div class="counter-common">
                        <img class="counter-img" src={earth}></img>
                        <h2>35</h2>
                        <p>Countries Reached</p>
                    </div>
                    <div class="counter-common">
                        <img class="counter-img" src={cap}></img>
                        <h2>1560</h2>
                        <p>Courses Published</p>
                    </div> */}
                    
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <h2 class="common-heading">جودة المحتوى التعليمي</h2>
                                <p class="common-paragraph">تم تصميم دوراتنا من قبل خبراء في المجال لضمان أفضل تجربة تعلم ممكنة</p>
                            </div>
                            <div class="carousel-item">
                                <h2 class="common-heading">سهولة التصفح والاستخدام</h2>
                                <p class="common-paragraph"> نظام دفع آمن وموثوق به، وخدمة عملاء متفانية ومتاحة للمساعدة في أي وقت</p>
                            </div>
                            <div class="carousel-item">
                                <h2 class="common-heading"></h2>
                                <p class="common-paragraph">العروض المقدمة والأسعار التنافسية!</p>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Counter;