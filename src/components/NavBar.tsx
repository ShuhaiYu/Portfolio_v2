// NavBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar: React.FC = () => {
    return (
        <nav className={styles.navBar}>
            <div className={styles.navBrand}>My Portfolio</div>
            <ul className={styles.navItems}>
                <li className={styles.navItem}><Link to="/" className={styles.navLink}>Home</Link></li>
                <li className={styles.navItem}><Link to="/about" className={styles.navLink}>About</Link></li>
                <li className={styles.navItem}><Link to="/projects" className={styles.navLink}>Projects</Link></li>
                <li className={styles.navItem}><Link to="/contact" className={styles.navLink}>Contact</Link></li>
                
                {/* Add more links as needed */}
            </ul>
        </nav>
    );
};

export default NavBar;
