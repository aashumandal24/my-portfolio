import HeaderImage from '../../assets/header4.jpeg';
import data from './data';
import './header.css'

const Header = () => {
    return (
        <header id="header">
            <div className="container header_container">
                <div className="header_profile">
                    <img src={HeaderImage} alt="Header portrait" />
                </div>
                <h3>Ayush Anand</h3>
                <p>
                    You are a click away from building your dream website or web app. Send me the details of your project for a modern, mobile responsive, highly performant website today!
                </p>
                <div className="header_cta">
                    <a href="#contact" className='btn primary'>Let's Talk</a>
                    <a href="#portfolio" className='btn light'>My Work</a>
                </div>
                <div className="header_socials">
                    {
                        data.map(item => <a key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'>
                            {item.icon}
                        </a>)
                    }
                </div>
            </div>
        </header>
    )
}

export default Header