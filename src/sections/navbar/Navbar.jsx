import React, { useState, useEffect } from 'react';
import { X, Home, User, Briefcase, Mail, FileText, Github, Linkedin, Twitter } from 'lucide-react';
import Logo from '../../assets/logo.jpeg';
import CV from '../../assets/Resume.pdf'
import './navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && !event.target.closest('.navbar') && !event.target.closest('.mobile-menu')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMenuOpen]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape' && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navItems = [
        { name: 'Home', href: '#', icon: Home },
        { name: 'About', href: '#about', icon: User },
        { name: 'Services', href: '#services', icon: Briefcase },
        { name: 'Portfolio', href: '#portfolio', icon: FileText },
        { name: 'Contact', href: '#contact', icon: Mail },
    ];

    const socialLinks = [
        { icon: Github, href: 'https://github.com/aashumandal24', label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/ayush-anand-8347b1347', label: 'LinkedIn' },
        { icon: Twitter, href: 'https://x.com/aashumandal24', label: 'Twitter' },
        { icon: Mail, href: 'mailto:aashumandal24@gmail.com', label: 'Email' }
    ];

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="navbar-container">
                    {/* Logo */}
                    <a href="#" className='nav_logo'>
                        <img src={Logo} alt="logo" />
                    </a>

                    {/* Desktop Navigation */}
                    <div className="navbar-menu desktop-menu">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="navbar-link"
                                style={{ '--delay': `${index * 0.1}s` }}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Hamburger Button */}
                    <button
                        className={`hamburger-btn ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}>
                <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
                    {/* Mobile Menu Header */}
                    <div className="mobile-menu-header">
                        <div className="mobile-logo">
                            <span className="mobile-logo-text">YourName</span>
                        </div>
                        <button
                            className="close-btn"
                            onClick={closeMenu}
                            aria-label="Close navigation menu"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="mobile-nav">
                        <div className="nav-section">
                            <h3 className="nav-section-title">Navigation</h3>
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="mobile-nav-link"
                                    onClick={closeMenu}
                                    style={{ '--delay': `${index * 0.1}s` }}
                                >
                                    <item.icon className="nav-icon" size={20} />
                                    <span className="nav-text">{item.name}</span>
                                    <div className="nav-arrow">→</div>
                                </a>
                            ))}
                        </div>

                        {/* Additional Quick Actions */}
                        <div className="nav-section">
                            <h3 className="nav-section-title">Quick Actions</h3>
                            <a
                                href="mailto:aashumandal24@gmail.com"
                                className="mobile-nav-link action-link"
                                onClick={closeMenu}
                                style={{ '--delay': '0.5s' }}
                            >
                                <Mail className="nav-icon" size={20} />
                                <span className="nav-text">Send Email</span>
                                <div className="nav-arrow">→</div>
                            </a>
                            <a
                                href={CV}
                                download
                                className="mobile-nav-link action-link"
                                onClick={closeMenu}
                                style={{ '--delay': '0.6s' }}
                            >
                                <FileText className="nav-icon" size={20} />
                                <span className="nav-text">Download Resume</span>
                                <div className="nav-arrow">→</div>
                            </a>
                        </div>
                    </div>

                    {/* Mobile Footer */}
                    <div className="mobile-footer">
                        <div className="mobile-footer-content">
                            <p className="mobile-footer-text">Let's create something amazing together</p>
                            <div className="mobile-social">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className="mobile-social-link"
                                        aria-label={social.label}
                                        style={{ '--delay': `${index * 0.1}s` }}
                                    >
                                        <social.icon size={18} />
                                    </a>
                                ))}
                            </div>
                            <div className="mobile-contact-info">
                                <p>aashumandal24@gmail.com</p>
                                <p>Available for freelance work</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;