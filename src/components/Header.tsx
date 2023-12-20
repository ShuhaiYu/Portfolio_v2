import React from 'react';

// Define the props if necessary
interface HeaderProps {
  title: string;
  subtitle?: string; // optional prop
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header style={{ textAlign: 'center', padding: '20px' }}>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
      {/* Add navigation or other elements here */}
    </header>
  );
};

export default Header;
