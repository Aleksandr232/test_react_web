import { useState, useEffect } from "react";

export const useTheme = () => {
    const [theme, setStoredTheme] = useState(() => {

      const savedTheme = localStorage.getItem('theme');
      return savedTheme || 'light';
    });
  
    const setTheme = (newTheme) => {
      
      setStoredTheme(newTheme);
      
      localStorage.setItem('theme', newTheme);
    };

    useEffect(()=>{
        document.documentElement.setAttribute('class', theme)
    }, [theme])
  
    return { theme, setTheme };
  };