import ContactBreadcrumbs from "../components/Contact-breadcrumb";
import ContactCard from "../components/Contact-cards";
import ContactForm from "../components/ContactForm";
function Contact(){
    return(
        <div class="course-page">
                <div class="course-page-wrapper">
                    <ContactBreadcrumbs/>
                    <ContactCard/>
                    <ContactForm/>
                </div>
        </div>
    );
}

export default Contact;