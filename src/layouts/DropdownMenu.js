import { useState } from 'react';
import { useTheme } from '../hooks/UseTheme';
import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const { theme, setTheme } = useTheme();

    const ThemeClick = () => {
        theme === "light" ? setTheme("dark-theme") : setTheme("light");
        console.log("тема", theme);
      };

    return (
        <div className="dropdown-menu" onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
            <div className="dropdown-trigger"><SettingsIcon/></div>
            {isOpen && (
                <div className="dropdown-content">
                <div onClick={ThemeClick} className="theme-btn flex-center">
                    <div className='dark'><DarkModeIcon/></div>
                    <div className='low'><BrightnessLowIcon/></div>
                </div>
                </div>
            )}
        </div>
    );
}

export default DropdownMenu;