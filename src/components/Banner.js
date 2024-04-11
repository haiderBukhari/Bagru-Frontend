import searched from "../images/search.svg";
import edit from "../images/edit.svg";
import user from "../images/user-graduate.svg";
import folder from "../images/folders.svg";
function Banner(){
    return(
        <div class="banner">
            <div class="overlay-img"></div>
            <div class="common-container">
                <div class="banner-wrapper">
                    <h1>مرحبًا بكم في [Bagruweb]!</h1>
                    <p>نحن سعداء جدًا بزيارتكم!</p>
                    {/* <div class="searchbox">
                        <input type="text" placeholder="هذه الأفكار المغلوطة"></input>
                        <div class="search-boxed">
                            <img src={searched}></img>
                        </div>
                    </div> 
                    <ul>
                        <li><img src={user}></img>Over 7 million students</li>
                        <li><img src={folder}></img>More than 30,000 courses.</li>
                        <li><img src={edit}></img>Learn anything online.</li>
                    </ul>*/}
                </div>
            </div>
        </div>
    );
}

export default Banner;