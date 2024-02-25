import { useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="dropdown-menu" onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
            <div className="dropdown-trigger"><SettingsIcon/></div>
            {isOpen && (
                <div className="dropdown-content">
                   
                </div>
            )}
        </div>
    );
}

export default DropdownMenu;