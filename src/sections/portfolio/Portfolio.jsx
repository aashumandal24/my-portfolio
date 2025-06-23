import { useState, useEffect } from 'react';
import Movix from '../../assets/Movix.png';
import UIUX1 from '../../assets/UIUX1.png';
import UIUX2 from '../../assets/UIUX2.png';
import UIUX3 from '../../assets/UIUX3.png';
import Frontend1 from '../../assets/Frontend1.png';
import './portfolio.css';

const Portfolio = (props) => {

    const { initialProjects } = props;
    const allProjects = initialProjects || [
        {
            id: 1,
            title: "Portfolio",
            description:
                "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto.",
            image: Frontend1,
            category: "Frontend",
            demoLink: "#",
            githubLink: "https://github.com/aashumandal24/my-portfolio",
        },
        {
            id: 2,
            title: "Foodieland",
            description:
                "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto.",
            image: UIUX1,
            category: "UIUX",
            demoLink:
                "https://www.figma.com/proto/kwjYYGyme8zWmQrjz9ofpT/Foodieland?page-id=0%3A1&node-id=2-12&p=f&viewport=25%2C107%2C0.08&t=nDtfl10IkvAds3At-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A12",
        },
        {
            id: 3,
            title: "Movix",
            description:
                "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto.",
            image: Movix,
            category: "Frontend",
            demoLink: "https://movix-eta.vercel.app/",
            githubLink: "https://github.com/aashumandal24/Movix-Aashu",
        },
        {
            id: 4,
            title: "Love Cream",
            description:
                "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto.",
            image: UIUX2,
            category: "UIUX",
            demoLink: "https://www.figma.com/proto/fKPFLFcI33qguLB47TeYfW/Ice-Cream-Landing-Page?page-id=0%3A1&node-id=1-2&p=f&viewport=370%2C258%2C0.33&t=RH4PlQuLM2Mfvtl7-1&scaling=scale-down&content-scaling=fixed",
        },
        {
            id: 5,
            title: "Next-Gen VR",
            description:
                "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto.",
            image: UIUX3,
            category: "UIUX",
            demoLink: "https://www.figma.com/proto/azve4z5EqYqTNxPVEVdN0e/Untitled?page-id=0%3A1&node-id=4-2&p=f&viewport=0%2C155%2C0.11&t=8NaqlQdKYv7XKn5M-1&scaling=min-zoom&content-scaling=fixed",
        }
    ];

    const availableProjects = allProjects.filter(p => p.category !== 'Backend');
    const categories = ['All', 'Frontend', 'UIUX'];

    const [activeCategory, setActiveCategory] = useState('All');
    const [filteredProjects, setFilteredProjects] = useState(availableProjects);

    useEffect(() => {
        if (activeCategory === 'All') {
            setFilteredProjects(availableProjects);
        } else if (categories === 'UIUX') {

        } else {
            const newFilteredProjects = availableProjects.filter(
                (project) => project.category === activeCategory
            );
            setFilteredProjects(newFilteredProjects);
        }
    }, [activeCategory]);

    return (
        <div id='portfolio' className="projects-section">
            <div className="container">
                <div className="header">
                    <h2 className="title">Recent Projects</h2>
                    <p className="subtitle">
                        Check out some of the projects I recently worked on for my clients. Use the buttons to toggle the different categories.
                    </p>
                </div>

                <div className="filter-buttons">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-buttons">
                                    <a href={project.demoLink} className='white demo-btn'>Demo</a>
                                    <a href={project.githubLink} hidden={(!project.githubLink)} className='primary github-btn'>Github</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio