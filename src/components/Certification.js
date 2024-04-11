import certificate from "../images/certificates.webp";
import certificate2 from "../images/certificate2.webp";
import certificate3 from "../images/certificates32.webp";
import certificate4 from "../images/certificates4.webp";

function Certification(){
    return(
        <div class="cerification">
            <div class="common-container">
                <div class="cerification-wrapper">
                   <div class="explore">
                        <div>
                            <h2 class="common-heading">Explore Certificate</h2>
                            <p class="common-paragraph">نتيجة لظروف ما قد تكمن السعاده فيما نتحمله م</p>
                        </div>
                        <a href="#">View All</a>
                   </div>
                   <div class="explore-main">
                        <div class="explore-common">
                            <img class="certificate-img" src={certificate}></img>
                            <h2>Certificate of Training</h2>
                        </div>
                        <div class="explore-common">
                            <img class="certificate-img" src={certificate2}></img>
                            <h2>Certificate of Training</h2>
                        </div>
                        <div class="explore-common">
                            <img class="certificate-img" src={certificate3}></img>
                            <h2>Certificate of Training</h2>
                        </div>
                        <div class="explore-common">
                            <img class="certificate-img" src={certificate4}></img>
                            <h2>Certificate of Training</h2>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default Certification;