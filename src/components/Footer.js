import logo from "../images/HorzLogo-W.svg";
import phone from "../images/phone.svg";
import mail from "../images/envelope.svg";
import location from "../images/location.svg";
import facebook from "../images/facebook.svg";
import twitter from "../images/x-twitter.svg";
import pinterest from "../images/pinterest.svg";
import instagram from "../images/instagram.svg";
import { Link } from "react-router-dom";


function Footer(){
    return(
        <div class="footer-main">
            <div class="common-container">
                <div class="footer-wrapper">
                    <div class="upper-footer">
                        <div class="foot-logo">
                            <img src={logo} class="logo"></img>
                            <ul>
                                {/* <li><img src={phone}></img> 800 388 80 90</li>
                                <li><img src={location}></img>58 Howard Street #2 San Francisco</li> */}
                                <li><img src={mail}></img>contact@bagruweb.com</li>
                                <li class="socials">
                                    {/* <img src={facebook}></img>
                                    <img src={twitter}></img>
                                    <img src={pinterest}></img> */}
                                    <img src={instagram}></img> Instagram
                                </li>
                            </ul>
                        </div>
                        <div class="common-foot">
                            <h2></h2>
                            <ul>
                                <li><Link to="/">من نحن</Link></li>
                                <li><Link to="/contact">تواصل معنا</Link></li>
                                <li><Link to="/">شروط الاستخدام</Link></li>
                            </ul>
                        </div>
                        {/* <div class="common-foot">
                            <h2>Links</h2>
                            <ul>
                                <li><a href="#">Courses</a></li>
                                <li><a href="#">Events</a></li>
                                <li><a href="#">Gallery</a></li>
                                <li><a href="#">FAQs</a></li>
                            </ul>
                        </div>
                        <div class="common-foot">
                            <h2>Support</h2>
                            <ul>
                                <li><a href="#">Documentation</a></li>
                                <li><a href="#">Forums</a></li>
                                <li><a href="#">Language Packs</a></li>
                                <li><a href="#">Release Status</a></li>
                            </ul>
                        </div>
                        <div class="common-foot">
                            <h2>Recommend</h2>
                            <ul>
                                <li><a href="#">WordPress</a></li>
                                <li><a href="#">LearnPress</a></li>
                                <li><a href="#">WooCommerce</a></li>
                                <li><a href="#">bbPress</a></li>
                            </ul>
                        </div> */}
                        
                    </div>
                    <div class="lower-footer">
                        {/* <p>Bagru Web</p>
                        <div class="lower-links">
                            <a href="#">من نحن</a>
                            <a href="#">شروط الاستخدام</a>
                            <a href="#">Sitemap</a>
                            <a href="#">Purchase</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;