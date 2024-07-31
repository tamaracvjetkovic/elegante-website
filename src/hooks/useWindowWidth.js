import React, { useEffect, useState } from 'react'


const useWindowWidth = () => {
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

   const handleWindowResize = () => setWindowWidth(window.innerWidth); 

   useEffect(() => {
      window.addEventListener('resize', handleWindowResize);
      return () => window.removeEventListener('resize', handleWindowResize); // cleanup function
   }, []);

   return windowWidth;
}

export default useWindowWidth;
