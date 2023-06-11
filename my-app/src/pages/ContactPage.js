import React, { useState } from 'react';
import styles from './ContactPage.module.css';

const ContactPage = () => {
    const [fullName, setFullName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (fullName && subject && email && body) {
            console.log('Form data:', {
                fullName,
                subject,
                email,
                body,
            });
        }
    };

    return (
        <div className={styles.contactPage}>
            <div className={styles.card}>
                <h1>Contact Us</h1>
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Message"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
