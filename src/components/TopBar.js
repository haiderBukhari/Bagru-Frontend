import phone from '../images/phone.svg'
import mail from '../images/envelope.svg'
function TopBar(){
    return(
        <div class="top-bar">
            <div class="common-container">
                <div class="top-bar-wrapper">
                    <div class="contact-side">
                        <span>Contact us:</span>
                        <span class="mail"><img src={mail}></img>contact@bagruweb.com</span>
                    </div>
                    <div class="login-side">
                        <a href="#">Register</a>
                        <span></span>
                        <a href="#">Login</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;