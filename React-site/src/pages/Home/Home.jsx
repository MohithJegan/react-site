import "./Home.css";
import { Link } from 'react-router';

export default function Home() {
    return (
        <main id="main" className="portfolio-main">
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1 className="hero-title">
                                <span className="gradient-text">Full-Stack Developer</span> 
                            </h1>
                            <h2 className="hero-subtitle">
                                <span className="name-highlight">Mohith Krishnamoorthy Jeganathan</span>
                            </h2>
                            <p className="hero-description">
                                Frontend Developer | UI/UX Specialist | Backend Developer
                            </p>
                            <div className="hero-cta">
                                <Link to="/project" className="cta-button primary">
                                    Explore My Work
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </Link>
                                <Link to="/contact" className="cta-button secondary">
                                    Let's Connect
                                </Link>
                            </div>
                        </div>
                        <div className="hero-image-container">
                            <div className="hero-image-wrapper">
                                <img 
                                    src="./images/profile.png" 
                                    alt="Professional Headshot" 
                                    className="hero-image"
                                />
                                <div className="image-glow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="section-number">01</span>
                            About Me
                        </h2>
                        <div className="section-divider"></div>
                    </div>
                    <div className="about-content">
                        <div className="about-text">
                            <h3 className="about-heading">
                                Building <span className="gradient-text">Web Applications</span>
                            </h3>
                            <p className="about-paragraph">
                                I'm a passionate frontend developer based in Toronto with expertise in creating 
                                immersive web experiences. My approach combines technical precision with 
                                artistic vision to deliver solutions that users love.
                            </p>
                            <p className="about-paragraph">
                                With 2+ years in the industry, I've helped startups and enterprises transform 
                                their digital presence through innovative interfaces and optimized performance.
                            </p>
                        </div>
                        <div className="about-skills">
                            <h4 className="skills-title">Core Expertise</h4>
                            <div className="skills-grids">
                                <div className="skill-item">
                                    <div className="skill-icon react"></div>
                                    <span>React.js</span>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-icon js"></div>
                                    <span>JavaScript</span>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-icon ui"></div>
                                    <span>UI/UX Design</span>
                                </div>
                                <div className="skill-item">
                                    <div className="skill-icon responsive"></div>
                                    <span>C#</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Section */}
            <section className="services">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            <span className="section-number">02</span>
                            What I Offer
                        </h2>
                        <div className="section-divider"></div>
                    </div>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7Z" stroke="#00FF88" strokeWidth="2"/>
                                    <path d="M8 9H16M8 13H12" stroke="#00FF88" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <h3 className="service-title">Web Development</h3>
                            <p className="service-description">
                                Bespoke websites built with modern frameworks tailored to your specific needs.
                            </p>
                            <Link to="/resume" className="service-link">
                                Learn More →
                            </Link>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#00BFFF" strokeWidth="2"/>
                                    <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14M9 9H9.01M15 9H15.01" stroke="#00BFFF" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <h3 className="service-title">UI/UX Design</h3>
                            <p className="service-description">
                                Intuitive interfaces designed for maximum engagement and conversion.
                            </p>
                            <Link to="/resume" className="service-link">
                                Learn More →
                            </Link>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h3 className="service-title">Performance Optimization</h3>
                            <p className="service-description">
                                Lightning-fast websites that rank higher and keep users engaged.
                            </p>
                            <Link to="/resume" className="service-link">
                                Learn More →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            
            {/* Contact Section */}
            <section className="contact-cta">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Ready to bring your vision to life?</h2>
                        <p className="cta-description">
                            I'm currently available for freelance projects and full-time opportunities.
                            Let's create something extraordinary together.
                        </p>
                        <Link to="/contact" className="cta-button primary">
                            Get In Touch
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}