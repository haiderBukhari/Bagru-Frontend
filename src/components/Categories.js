import setting from "../images/setting.webp";
import settings from "../images/settings.webp";
import lifestyle from "../images/lifestyle.webp";
import canvas from "../images/color-palette.webp";
import program from "../images/programming.webp";

function Categories(){
    return(
        <div class="categories">
            <div class="common-container">
                <div class="categories-wrapper">
                   <h2>Top Categories</h2>
                   <ul class="categories-inner">
                        <li><button class="cat"><img class="course-img" src={setting}></img>Arts & Craft</button></li>
                        <li><button class="cat"><img class="course-img" src={setting}></img>Coaching</button></li>
                        <li><button class="cat"><img class="course-img" src={canvas}></img>Online Business</button></li>
                        <li><button class="cat"><img class="course-img" src={settings}></img>Passive Income</button></li>
                        <li><button class="cat"><img class="course-img" src={lifestyle}></img>Photography</button></li>
                        <li><button class="cat"><img class="course-img" src={program}></img>Teacher Training</button></li>
                   </ul>
                </div>
            </div>
        </div>
    );
}

export default Categories;