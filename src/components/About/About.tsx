// About.tsx
import React from 'react';
import styles from './About.module.css';

const About: React.FC = () => {
    return (
        <div className={styles.aboutContainer}>
            <h1>About Me</h1>
            <div className={styles.content}>
                <div className={styles.textSection}>
                    <p>Hello! I'm Shuhai Yu, a passionate web developer and designer...</p>
                    {/* Add more personal details, experiences, and skills here */}
                </div>
                <div className={styles.imageSection}>
                    {/* You can add your photo or an illustration here */}
                    <img src="path_to_your_image.jpg" alt="Your Name" />
                </div>
            </div>
        </div>
    );
};

export default About;
