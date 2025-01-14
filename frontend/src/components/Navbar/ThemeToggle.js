import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} className="btn btn-secondary">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
    );
};

export default ThemeToggle;
