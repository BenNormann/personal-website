import React, { useEffect } from 'react';

const Preloader = () => {
    useEffect(() => {
        // Simulate window.onload by using a small timeout
        const timer = setTimeout(() => {
            const preloader = document.getElementById('preloader');
            if (preloader) {
                // Fade out the preloader
                preloader.style.opacity = '0';
                preloader.style.transition = 'opacity 0.8s ease';
                
                // Remove it after the transition
                setTimeout(() => {
                    if (preloader.parentNode) {
                        preloader.parentNode.removeChild(preloader);
                    }
                }, 800);
            }
        }, 100);
        
        return () => clearTimeout(timer);
    }, []);

    return <div id="preloader"></div>;
};

export default Preloader;



