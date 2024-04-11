import startup from "../images/startup.webp";
import wordpress from "../images/wordpress.webp";
import php from "../images/php.webp";
import intro from "../videos/intro.mp4"
function TopCourses(){
    return(
        <div class="top-courses">
            <div class="common-container">
                <div class="top-courses-wrapper">
                   {/* <a href="#" class="common-tutorial startup">
                        <div class="tutorial-img">
                            <img src={startup}></img>
                        </div>
                        <p>Top Tutorials Code for Startup</p>
                   </a>
                   <a href="#" class="common-tutorial php">
                        <div class="tutorial-img">
                            <img src={wordpress}></img>
                        </div>
                        <p>The Top PHP Tutorials</p>
                   </a>
                   <a href="#" class="common-tutorial wordpress">
                        <div class="tutorial-img">
                            <img src={php}></img>
                        </div>
                        <p>Education Wordpress Theme</p>
                   </a> */}
                   <p class="common-heading">مع دوراتنا، ستحصلون على محتوى تعليمي متميز يمكن أن يساعد الطلاب في تحقيق أهدافهم الأكاديمية بنجاح. 
                    يمكنكم معاينة الفيديو أدناه كمثال
                    </p>
                    <video controls width="100%" height="auto">
                        <source src={intro} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <p>للبدء في رحلة التعلم معنا، يمكنكم استعراض الدورات المتاحة في [صفحة الدورات] واختيار تلك التي تناسب احتياجاتكم</p>
                </div>
            </div>
        </div>
    );
}

export default TopCourses;