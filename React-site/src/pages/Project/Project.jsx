import './Project.css';
import { useState, useEffect } from "react";

export default function Project() {
    const [projectList, setProjectList] = useState([]);
    
    // API request
    useEffect(() => {
        fetch("https://http5222-assignment-1-1.onrender.com/api/projects", {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then((res) => res.json())
        .then((projects) => {
            setProjectList(projects);
        })
        .catch((error) => console.log("Error", error))
    }, []);

    return (
        <main className="projects-main">
            <div className="projects-container">
                <div className="projects-header">
                    <h1 className="gradient-text">My Projects</h1>
                    <p className="projects-subtitle">
                        A showcase of my best work and development experience
                    </p>
                </div>

                <div className="projects-grid">
                    {/* Iterate the projectList array and display the info */}
                    {projectList.map((project, index) => (
                        <div className="project-card h-100" key={index}>
                            <div className="project-image-container">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="project-image"
                                />
                                <div className="image-overlay"></div>
                            </div>
                            
                            <div className="project-content">
                                <div className="project-header">
                                    <h3 className="project-title">{project.title}</h3>
                                    <span className="project-duration text-center">{project.duration}</span>
                                </div>
                                
                                <p className="project-description">{project.description}</p>
                                
                                <div className="project-technologies">
                                    {project.technology.split(',').map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech.trim()}</span>
                                    ))}
                                </div>
                                
                                <div className="project-links">
                                    <a 
                                        href={project.githubRepo} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 0.999999C19.91 0.999999 18.73 0.649999 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.649999 5.09 0.999999 5.09 0.999999C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        View Code
                                    </a>
                                    {project.liveDemo && (
                                        <a 
                                            href={project.liveDemo} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="project-link demo"
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" stroke="currentColor" strokeWidth="2"/>
                                                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}