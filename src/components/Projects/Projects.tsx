// Projects.tsx
import React from 'react';
import styles from './Projects.module.css'; // Create and customize this CSS module as needed

const Projects: React.FC = () => {
    return (
        <div className={styles.projectsContainer}>
            <h1>My Projects</h1>
            <div className={styles.projectList}>
                {/* Iterate over your projects and render them here */}
                <div className={styles.project}>
                    <h2>Project Title 1</h2>
                    <p>Description of project 1...</p>
                    {/* Add more details like technologies used, link to the project, etc. */}
                </div>
                {/* Repeat for other projects */}
            </div>
        </div>
    );
};

export default Projects;
