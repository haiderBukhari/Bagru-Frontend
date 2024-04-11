import React, { useState } from 'react';
import axios from 'axios';
import mail from "../images/bg-mail.png";
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../env';

function Newsletter() {
    const [email, setEmail] = useState('');
    const Navigate = useNavigate();

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send email via Axios request
            const response = await axios.post(API_URL + '/contact/email', { email });
            console.log('Email submitted successfully:', response.data);
            alert("newsletter Submitted")
            // Optionally, you can reset the form after successful submission
            setEmail('');
        } catch (error) {
            console.error('Error submitting email:', error);
        }
    };

    return (
        <div className="newsletter">
            <div className="common-container">
                <div className="newsletter-wrapper">
                    <h2 className="common-heading"> النشرة الاخبارية</h2>
                    <div className="newsletter-inner-wrapper">
                        <div className="newsletter-txt">
                            <img src={mail} alt="Mail Icon"></img>
                            <p>اشترك في نشرتنا الاخبارية لتبقَ على اتطلاع بأحدث المستجدات والتحديثات! </p>
                        </div>
                        <div className="subscribe">
                            <>
                                <input type="email" placeholder="Your email here" value={email} onChange={handleChange}></input>
                                {/* <a href="#">اشترك الآن</a> */}
                                <a style={{cursor: "pointer"}} onClick={handleSubmit}>اشترك الآن</a>
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;
