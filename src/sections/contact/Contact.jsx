import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import './contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const phoneNumber = '+918789629453';

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create the SMS message with all form data
        const smsMessage = `New Contact Form Message:
    
        Name: ${formData.name}
        Email: ${formData.email}
        Subject: ${formData.subject}

        Message:
        ${formData.message}`;

        // Create SMS URL
        const smsUrl = `sms:${phoneNumber}?body=${encodeURIComponent(smsMessage)}`;

        // Open SMS app
        window.open(smsUrl, '_self');

        // Optional: Reset form after sending
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    const contactInfo = [
        { icon: Mail, label: 'Email', value: 'aashumandal24@gmail.com', href: 'mailto:aashumandal24@gmail.com' },
        { icon: MapPin, label: 'Location', value: 'Bihar, India', href: 'https://maps.app.goo.gl/LpN1YxrsPGuYLeoW7' }
    ];

    const socialLinks = [
        { icon: Github, label: 'GitHub', href: 'https://github.com/aashumandal24', color: '#333' },
        { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ayush-anand-8347b1347', color: '#0077B5' },
        { icon: Twitter, label: 'Twitter', href: 'https://x.com/aashumandal24', color: '#1DA1F2' },
        { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/aashu_mandal_2_4/', color: '#4f5bd5' }
    ];

    return (
        <section id='contact' className="contact-section">
            <div className="contact-container">
                {/* Header */}
                <div className="contact-header">
                    <h2 className="contact-title">Let's Work Together</h2>
                    <p className="contact-subtitle">
                        Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring your ideas to life.
                    </p>
                </div>

                <div className="contact-content">
                    {/* Contact Info */}
                    <div className="contact-info">
                        <div className="info-card">
                            <h3 className="info-title">Get In Touch</h3>
                            <p className="info-description">
                                Ready to start your next project? Drop me a line and let's create something amazing together.
                            </p>

                            <div className="contact-details">
                                {contactInfo.map((item, index) => (
                                    <a key={index} href={item.href} className="contact-item">
                                        <div className="contact-icon">
                                            <item.icon size={20} />
                                        </div>
                                        <div className="contact-text">
                                            <span className="contact-label">{item.label}</span>
                                            <span className="contact-value">{item.value}</span>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className="social-links">
                                <h4 className="social-title">Follow Me</h4>
                                <div className="social-icons">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            className="social-icon"
                                            style={{ '--social-color': social.color }}
                                            aria-label={social.label}
                                        >
                                            <social.icon size={20} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-container">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="form-input"
                                        required
                                    />
                                </div>
                                <div className="input-group">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="form-input"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="input-group">
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className="form-input"
                                    required
                                />
                            </div>

                            <div className="input-group">
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="form-textarea"
                                    rows="6"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                <span className="btn-text">Send Message</span>
                                <Send className="btn-icon" size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;