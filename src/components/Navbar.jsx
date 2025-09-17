import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import * as bootstrap from 'bootstrap';

const Navbar = () => {
  const navbarRef = useRef(null);
  const navbarCollapseRef = useRef(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    let scrollSpy = null;

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

    // Initialize collapse button
    if (navbarCollapseRef.current) {
      new bootstrap.Collapse(navbarCollapseRef.current, {
        toggle: false
      });
    }

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
          if (navbarCollapseRef.current) {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapseRef.current);
            if (bsCollapse) {
              bsCollapse.hide();
            }
          }
        }
      }
    };

    if (isHomePage) {
      document.querySelectorAll('.js-scroll').forEach(link => {
        link.addEventListener('click', handleNavLinkClick);
      });
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
    };
  }, [isHomePage]);

  // Handle navbar toggler click
  const handleTogglerClick = () => {
    if (!document.querySelector("#mainNav")?.classList.contains("navbar-reduce")) {
      document.querySelector("#mainNav")?.classList.add("navbar-reduce");
    }
  };

  return (
    <nav
      className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
      id="mainNav"
      ref={navbarRef}
    >
      <div className="container">
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarDefault"
          aria-controls="navbarDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleTogglerClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          className="navbar-collapse collapse justify-content-end"
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
