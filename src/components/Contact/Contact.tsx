// Contact.tsx
import React from 'react';
import styles from './Contact.module.css'; // Create and customize this CSS module as needed

const Contact: React.FC = () => {
    return (
        <div className={styles.contactContainer}>
            <h1>Contact Me</h1>
            <form className={styles.contactForm}>
                {/* Form fields here */}
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea placeholder="Your Message"></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
