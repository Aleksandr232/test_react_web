import React, { useState, useEffect } from 'react';
import { Link} from "react-router-dom";




const Navbar = (props) =>{
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return(
        <nav className="navbar">
        <div className="logo">{props.logoText}</div>
        <div className="datetime">{currentTime.toLocaleString()}</div>
        <ul className="nav-links">
            <li><Link to="/" className={window.location.pathname === "/" ? "active" : ""}>Overview</Link></li>
            <li><Link to="/table" className={window.location.pathname === "/table" ? "active" : ""}>Sales Export</Link></li>
        </ul>
    </nav>
    );

}

export default Navbar;