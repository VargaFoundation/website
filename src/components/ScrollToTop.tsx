import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Force le scroll en haut
    }, [pathname]); // Déclenche à chaque changement de route

    return null;
};

export default ScrollToTop;