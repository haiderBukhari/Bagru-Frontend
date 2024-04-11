import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../env';
import { useNavigate } from 'react-router-dom';

function ContactForm() {
    const Navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        if(formData.fullName === '' || formData.phoneNumber === '' || formData.email === '' || formData.subject === '' || formData.message === '') {
            alert('Please fill in all fields');
            return;
        }
        e.preventDefault();
        try {
            // Send form data via Axios request
            const response = await axios.post(API_URL + '/contact', formData);
            console.log('Form submitted successfully:', response.data);
            // Optionally, you can reset the form after successful submission
            setFormData({
                fullName: '',
                phoneNumber: '',
                email: '',
                subject: '',
                message: ''
            });
            Navigate('/')
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="form-container">
            <div className="common-container">
                <div className="form-wrapper">
                    <h2>إذا كان لديكم أي أسئلة حول دوراتنا أو تحتاجون إلى مساعدة في عملية الشراء، فلا تترددوا في الاتصال بفريقنا</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="fullName" placeholder="Full name *" value={formData.fullName} onChange={handleChange}></input>
                        <input type="text" name="phoneNumber" placeholder="Phone number *" value={formData.phoneNumber} onChange={handleChange}></input>
                        <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange}></input>
                        <input type="text" name="subject" placeholder="Subject *" value={formData.subject} onChange={handleChange}></input>
                        <textarea name="message" placeholder="Message *" value={formData.message} onChange={handleChange}></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
