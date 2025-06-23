import { HiDownload } from 'react-icons/hi';
import AboutImage from '../../assets/about.jpeg';
import CV from '../../assets/Resume.pdf';
import Card from '../../components/Card';
import data from './data';
import './about.css';

const About = () => {
    return (
        <section id="about">
            <div className="container about_container">
                <div className="about_left">
                    <div className="about_portrait">
                        <img src={AboutImage} alt="about_image" />
                    </div>
                </div>
                <div className="about_right">
                    <h2>About Me</h2>
                    <div className="about_cards">
                        {
                            data.map(item => (
                                <Card key={item.id} className="about_card">
                                    <span className='about_card-icon'>{item.icon}</span>
                                    <h5>{item.title}</h5>
                                    <small>{item.desc}</small>
                                </Card>
                            ))
                        }
                    </div>
                    <p>
                        Hi, I'm Ayush Anand. I'm a dedicated Frontend Developer focused on creating dynamic and responsive web applications with React.js.
                    </p>
                    <p>
                        I have a strong passion for clean code and user-friendly interfaces. I specialize in turning designs into high-performing, scalable, and attractive digital experiences. My toolkit includes React, JavaScript (ES6+), Tailwind CSS, and current web development practices.

                        Whether it's a sleek landing page, a complex dashboard, or a full single-page app, I apply creativity, attention to detail, and a developer's mindset to every project I tackle. Check out my resume below!
                    </p>
                    <a href={CV} download className='btn primary'>Download CV <HiDownload /></a>
                </div>
            </div>
        </section>
    )
}

export default About