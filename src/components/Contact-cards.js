import map from "../images/map-marked.svg"
import chart from "../images/user-chart.svg"
import clock from "../images/clock.svg"
function ContactCard(){
    return(
        <div class="contact-card">
            <div class="common-container">
                <div class="contact-card-wrapper">
                    <h2>تواصل معنا</h2>
                    <div class="cards-contact">
                        {/* <div class="cards-common address">
                            <img class="map-img" src={map} alt="map"></img>
                            <h2>Address way</h2>
                            <p>1800 Abbot Kinney Blvd. Unit D & E Venice</p>
                        </div> */}
                        <div class="cards-common contact">
                            <img class="chart-img" src={chart} alt="chart"></img>
                            <h2>جهات الاتصال</h2>
                            <p>Mail: contact@bagruweb.com</p>
                        </div>
                        {/* <div class="cards-common clock">
                            <img class="clock-img" src={clock} alt="clock"></img>
                            <h2>Work timer</h2>
                            <p>Monday - Friday: 09:00 - 20:00</p>
                            <p>Sunday & Saturday: 10:30 - 22:0</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactCard;