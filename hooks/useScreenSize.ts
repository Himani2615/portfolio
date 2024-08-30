// hooks/useScreenSize.ts
import { useState, useEffect } from 'react';

export function useScreenSize() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
  const getWidth = ():string => {
    if (windowWidth < 400) {
      return "16rem"; 
    } else if (windowWidth < 600) {
      return "24rem"; 
    }else if(windowWidth<1200){
      return "28rem";
    } else {
      return "34rem"; 
    }
  };

  return getWidth();
}
