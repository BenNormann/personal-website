import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import * as bootstrap from 'bootstrap';

const Navbar = () => {
  const navbarRef = useRef(null);
  const navbarCollapseRef = useRef(null);
  const navbarTogglerRef = useRef(null);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    let scrollSpy = null;
    let collapseInstance = null;

    // Handle navbar collapse events to apply styling
    const handleCollapseShow = () => {
      if (!document.querySelector("#mainNav")?.classList.contains("navbar-reduce")) {
        document.querySelector("#mainNav")?.classList.add("navbar-reduce");
      }
      setIsCollapsed(false);
    };

    const handleCollapseHide = () => {
      setIsCollapsed(true);
    };

    // Only initialize scrollspy on home page
    if (isHomePage) {
      scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#mainNav',
        offset: navbarRef.current?.clientHeight || 72
      });
    }

    // Handle scroll for navbar styling and change
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        document
          .querySelector(".navbar-expand-md")
          ?.classList.add("navbar-reduce");
        document
          .querySelector(".navbar-expand-md")
          ?.classList.remove("navbar-trans");
      } else {
        document
          .querySelector(".navbar-expand-md")
          ?.classList.add("navbar-trans");
        document
          .querySelector(".navbar-expand-md")
          ?.classList.remove("navbar-reduce");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initialize collapse manually without data attributes
    if (navbarCollapseRef.current) {
      collapseInstance = new bootstrap.Collapse(navbarCollapseRef.current, {
        toggle: false,
        hide: true
      });

      // Add event listeners for collapse events
      navbarCollapseRef.current.addEventListener('show.bs.collapse', handleCollapseShow);
      navbarCollapseRef.current.addEventListener('hide.bs.collapse', handleCollapseHide);
    }

    // Handle toggler button click
    const handleTogglerClick = () => {
      if (collapseInstance) {
        if (isCollapsed) {
          collapseInstance.show();
        } else {
          collapseInstance.hide();
        }
      }
    };

    // Handle smooth scrolling only on home page
    const handleNavLinkClick = (e) => {
      if (!isHomePage) return;

      const { target } = e;
      if (target.classList.contains('js-scroll') && target.hash) {
        e.preventDefault();
        const targetElement = document.querySelector(target.hash);
        if (targetElement) {
          const navHeight = navbarRef.current?.clientHeight || 72;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = targetPosition - navHeight + 5;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          // Hide navbar on mobile
          if (collapseInstance && !isCollapsed) {
            collapseInstance.hide();
          }
        }
      }
    };

    if (isHomePage) {
      document.querySelectorAll('.js-scroll').forEach(link => {
        link.addEventListener('click', handleNavLinkClick);
      });
    }

    // Add toggler click listener
    if (navbarTogglerRef.current) {
      navbarTogglerRef.current.addEventListener('click', handleTogglerClick);
    }

    // Cleanup event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollSpy) {
        scrollSpy.dispose();
      }
      document.querySelectorAll('.js-scroll').forEach(link => {
        link.removeEventListener('click', handleNavLinkClick);
      });

      // Remove collapse event listeners
      if (navbarCollapseRef.current) {
        navbarCollapseRef.current.removeEventListener('show.bs.collapse', handleCollapseShow);
        navbarCollapseRef.current.removeEventListener('hide.bs.collapse', handleCollapseHide);
      }

      // Remove toggler click listener
      if (navbarTogglerRef.current) {
        navbarTogglerRef.current.removeEventListener('click', handleTogglerClick);
      }

      // Dispose collapse instance
      if (collapseInstance) {
        collapseInstance.dispose();
      }
    };
  }, [isHomePage, isCollapsed]);

  return (
    <nav
      className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
      id="mainNav"
      ref={navbarRef}
    >
      <div className="container">
        <button
          className={`navbar-toggler ${isCollapsed ? 'collapsed' : ''}`}
          type="button"
          aria-controls="navbarDefault"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
          ref={navbarTogglerRef}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          className={`navbar-collapse collapse justify-content-end ${!isCollapsed ? 'show' : ''}`}
          id="navbarDefault"
          ref={navbarCollapseRef}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${isHomePage ? 'js-scroll active' : ''}`} to="/">
                Home
              </Link>
            </li>
            {isHomePage && (
              <>
                <li className="nav-item">
                  <a className="nav-link js-scroll" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll" href="#work">
                    Work
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll" href="#contact">
                    Contact
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
