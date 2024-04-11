import team from "../images/team-1.jpg";
import team1 from "../images/team-3.jpg";
import team2 from "../images/team-5.jpg";
import team3 from "../images/team-6.webp";
import team4 from "../images/team-7.jpg";
import quote from "../images/quote-left.svg";

function Carousel(){
    return(
        <div class="cerification">
            <div class="common-container">
                <div class="cerification-wrapper">
                    <h2 class="common-heading">What People Say</h2>
                   <p class="common-paragraph">نتيجة لظروف ما قد تكمن السعاده فيما نتحمله م</p>
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="img-car">
                                    <img src={team}></img>
                                    <img src={team1}></img>
                                    <div class="focus-img">
                                        <div class="quote">
                                            <img src={quote}></img>
                                        </div>
                                        <img src={team2}></img>
                                    </div>
                                    <img src={team3}></img>
                                    <img src={team4}></img>
                                </div>
                                <h3>Susan Jackson</h3>
                                <h4>Wordpress Developer</h4>
                                <p>Education WP is a special build for an effective education & Learning Management System site. Education WP is the next generation & one of the best education WordPress themes which contains all the strength of eLearning WP and comes with better UI/UX.</p>
                            </div>
                            <div class="carousel-item">
                            <div class="img-car">
                                    <img src={team2}></img>
                                    <img src={team1}></img>
                                    <div class="focus-img">
                                        <div class="quote">
                                            <img src={quote}></img>
                                        </div>
                                        <img src={team}></img>
                                    </div>
                                    <img src={team3}></img>
                                    <img src={team4}></img>
                                </div>
                                <h3>Susan Jackson</h3>
                                <h4>Wordpress Developer</h4>
                                <p>Education WP is a special build for an effective education & Learning Management System site. Education WP is the next generation & one of the best education WordPress themes which contains all the strength of eLearning WP and comes with better UI/UX.</p>
                            </div>
                            <div class="carousel-item">
                            <div class="img-car">
                                    <img src={team}></img>
                                    <img src={team2}></img>
                                    <div class="focus-img">
                                        <div class="quote">
                                            <img src={quote}></img>
                                        </div>
                                        <img src={team1}></img>
                                    </div>
                                    <img src={team3}></img>
                                    <img src={team4}></img>
                                </div>
                                <h3>Susan Jackson</h3>
                                <h4>Wordpress Developer</h4>
                                <p>Education WP is a special build for an effective education & Learning Management System site. Education WP is the next generation & one of the best education WordPress themes which contains all the strength of eLearning WP and comes with better UI/UX.</p>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;