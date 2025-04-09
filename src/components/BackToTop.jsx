import React, { useEffect } from 'react';

const BackToTop = () => {
    useEffect(() => {
        const handleClick = (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };

        const handleScroll = () => {
            const backToTop = document.querySelector('.back-to-top');
            if (!backToTop) return;

            if (window.pageYOffset > 100) {
                backToTop.classList.remove("fadeOut");
                backToTop.style.display = "block";
                backToTop.classList.add("fadeIn");
            } else {
                backToTop.classList.remove("fadeIn");
                backToTop.classList.add("fadeOut");
            }
        };

        // Add event listeners
        const backToTopElement = document.querySelector('.back-to-top');
        if (backToTopElement) {
            backToTopElement.addEventListener('click', handleClick);
        }
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listeners
        return () => {
            if (backToTopElement) {
                backToTopElement.removeEventListener('click', handleClick);
            }
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button 
            className="back-to-top animated" 
            aria-label="Back to top"
        >
            <i className="fa fa-chevron-up"></i>
        </button>
    );
};

export default BackToTop;


