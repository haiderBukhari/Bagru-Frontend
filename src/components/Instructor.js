
import instruct from "../images/instruct.jpg";
function Instructor(){
    return(
        <div class="instructor">
            <div class="common-container">
                <div class="instructor-wrapper same-wrapper">
                    <div class="title-main">
                        <h2>Instructor</h2>
                        <div class="ins-data">
                            <img class="instruct-img" src={instruct}></img>
                            <a href="#">Mailp</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Instructor;