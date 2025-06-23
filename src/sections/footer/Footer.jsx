import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import './footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const quickLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#portfolio' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Main Footer Content */}
                <div className="footer-content">
                    {/* Brand Section */}
                    <div className="footer-brand">
                        <div className="brand-logo">
                            <span className="logo-text">Ayush Anand</span>
                        </div>
                        <p className="brand-description">
                            Creating digital experiences that inspire and engage.
                            Let's build something amazing together.
                        </p>
                        <p className="fcontact-item">Available for freelance work</p>
                    </div>

                    <div className="footer-links">
                        <h4 className="links-title">Quick Links</h4>
                        <ul className="links-list">
                            {quickLinks.map((link, index) => (
                                <li key={index} style={{ '--delay': `${index * 0.1}s` }}>
                                    <a href={link.href} className="footer-link">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <div className="copyright">
                        <p className="copyright-text">
                            © {currentYear} aashumandal24. Made with{' '}
                            <Heart className="heart-icon" size={16} />{' '}
                            in Bhagalpur, Bihar, IN
                        </p>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="scroll-top-btn"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp size={20} />
                    </button>
                </div>

                {/* Floating Elements */}
                <div className="floating-elements">
                    <div className="floating-dot dot-1"></div>
                    <div className="floating-dot dot-2"></div>
                    <div className="floating-dot dot-3"></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;