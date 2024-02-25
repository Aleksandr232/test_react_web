import { useState, useEffect } from "react";

export const useTheme = () => {
    const [theme, setStoredTheme] = useState(() => {
      // При первоначальной загрузке страницы получаем тему из localstorage
      const savedTheme = localStorage.getItem('theme');
      return savedTheme || 'light';
    });
  
    const setTheme = (newTheme) => {
      // Устанавливаем новую тему
      setStoredTheme(newTheme);
      // Сохраняем новую тему в localstorage
      localStorage.setItem('theme', newTheme);
    };

    useEffect(()=>{
        document.documentElement.setAttribute('class', theme)
    }, [theme])
  
    return { theme, setTheme };
  };