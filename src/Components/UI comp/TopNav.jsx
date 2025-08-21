import { useEffect, useState } from 'react';
import {Link} from "react-scroll";
import letter from "../../assets/images/letter.png"
export const TopNav = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
    }, [darkMode]);

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const toggler = document.querySelector('.navbar-toggler');
        const menu = document.getElementById('navbarNav');
        const collapse = document.getElementById('navbarSupportedContent');

        // toggler.addEventListener("click",()=>{
        //     menu.classList.toggle('show')
        // }) 

        const addCollapsed = () => toggler.classList.add('collapsed');
        const removeCollapsed = () => toggler.classList.remove('collapsed');

        collapse?.addEventListener('hidden.bs.collapse', addCollapsed);
        collapse?.addEventListener('shown.bs.collapse', removeCollapsed);

        // Ensure initial state is correct on reload
        if (collapse?.classList.contains('show')) {
            removeCollapsed();
        } else {
            addCollapsed();
        }

        return () => {
            collapse?.removeEventListener('hidden.bs.collapse', addCollapsed);
            collapse?.removeEventListener('shown.bs.collapse', removeCollapsed);
        };
    }, []);


    return (
        <nav id="navbar" className=" container navbar navbar-expand-lg fixed-top">
            <div className="container px-4 d-flex align-items-center justify-content-between">
                <a className="navbar-brand filterShadow  me-0" href="#">
                    <img className="img-fluid  " src={letter} alt="Logo" />
                </a>

                {/* Toggle Button */}
                <div className="d-flex align-items-center gap-2 order-2 order-md-3">
                    <button  className="btn theme-icon"  onClick={() => setDarkMode(!darkMode)}  aria-label="Toggle Dark Mode" > 
                        <i className={`bi ${darkMode ? 'bi-sun-fill' : 'bi-moon-stars-fill'}`}></i>
                    </button>

                </div>
                    <button className="navbar-toggler collapsed order-3"  type="button"  data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent"  aria-controls="navbarSupportedContent"  aria-expanded="false"  aria-label="Toggle navigation" > 
                        <span className="navbar-toggler-icon "></span>
                    </button>

                <div className="collapse navbar-collapse offcanvas-style justify-content-center order-4 order-lg-2" id="navbarSupportedContent">
                    <ul className="navbar-nav text-end gap-2 gap-lg-4 ">
                        <li className="nav-item">      <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            // offset={-70} // adjust if you use a fixed navbar
            duration={500}
            className='nav-link'
          >Home </Link></li>
                 
                        <li className="nav-item">      <Link
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            offset={-30} // adjust if you use a fixed navbar
            duration={500}
            className='nav-link'
          >Skills </Link></li>
                        <li className="nav-item">      <Link
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            offset={-60} // adjust if you use a fixed navbar
            duration={500}
            className='nav-link'
          >Education </Link></li>
                        <li className="nav-item">      <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-98} // adjust if you use a fixed navbar
            duration={500}
            className='nav-link'
          >Projects </Link></li>
                        <li className="nav-item">      <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-120} // adjust if you use a fixed navbar
            duration={500}
            className='nav-link'
          >Contact </Link></li>
                   
                    </ul>
                </div>
            </div>
        </nav>
    );
};
