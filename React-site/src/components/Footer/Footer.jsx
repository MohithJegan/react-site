import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
        </svg>
      </div>
      
      {/* Main Footer Content */}
      <div className="footer-content">
        <div className="footer-grid">
          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-heading">Get In Touch</h3>
            <ul className="footer-contact">
              <li>
                <svg className="footer-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92V19.92C22 20.47 21.55 20.92 21 20.92H19C18.45 20.92 18 20.47 18 19.92V16.92C18 16.37 18.45 15.92 19 15.92H21C21.55 15.92 22 16.37 22 16.92Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M3 16.92V19.92C3 20.47 3.45 20.92 4 20.92H6C6.55 20.92 7 20.47 7 19.92V16.92C7 16.37 6.55 15.92 6 15.92H4C3.45 15.92 3 16.37 3 16.92Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M17 3H7C4.79 3 3 4.79 3 7V17C3 19.21 4.79 21 7 21H17C19.21 21 21 19.21 21 17V7C21 4.79 19.21 3 17 3Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>Mohith Krishnamoorthy</span>
              </li>
              <li>
                <svg className="footer-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>mohithjegan@gmail.com</span>
              </li>
              <li>
                <svg className="footer-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92V19.92C22 20.47 21.55 20.92 21 20.92H19C18.45 20.92 18 20.47 18 19.92V16.92C18 16.37 18.45 15.92 19 15.92H21C21.55 15.92 22 16.37 22 16.92Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M3 16.92V19.92C3 20.47 3.45 20.92 4 20.92H6C6.55 20.92 7 20.47 7 19.92V16.92C7 16.37 6.55 15.92 6 15.92H4C3.45 15.92 3 16.37 3 16.92Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M17 3H7C4.79 3 3 4.79 3 7V17C3 19.21 4.79 21 7 21H17C19.21 21 21 19.21 21 17V7C21 4.79 19.21 3 17 3Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <span>(437) 335-9756</span>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div className="footer-section">
            <h3 className="footer-heading">Connect With Me</h3>
            <div className="footer-social">
              <a href="https://github.com/MohithJegan" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 0.999999C19.91 0.999999 18.73 0.649999 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.649999 5.09 0.999999 5.09 0.999999C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/mohith-krishnamoorthy-jeganathan-aa7668150" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/mohithj04/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5772 15.7723 9.80976 15.3801 9.21484 14.7852C8.61993 14.1902 8.22772 13.4228 8.09406 12.5922C7.9604 11.7616 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.12831C15.4785 9.73516 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://discord.com/users/mohith_krishnamoorthy" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M18.59 5.89C17.34 5.38 16.02 5.04 14.66 4.89C14.58 5.16 14.49 5.43 14.4 5.7C12.96 5.5 11.5 5.5 10.06 5.7C9.97 5.43 9.89 5.16 9.81 4.89C8.44 5.04 7.12 5.39 5.88 5.89C3.29 9.89 2.75 13.79 3 17.59C4.71 18.79 6.49 19.65 8.33 20.19C8.75 19.54 9.12 18.85 9.42 18.13C8.78 17.87 8.18 17.54 7.62 17.15C7.76 17.05 7.89 16.95 8.03 16.84C11.87 18.93 16.13 18.93 19.94 16.84C20.08 16.95 20.21 17.05 20.35 17.15C19.79 17.54 19.19 17.87 18.55 18.13C18.85 18.85 19.22 19.54 19.64 20.19C21.48 19.65 23.26 18.79 24.97 17.59C25.29 13.29 24.38 9.39 21.69 5.89H18.59ZM8.68 15.33C7.71 15.33 6.91 14.45 6.91 13.38C6.91 12.31 7.68 11.43 8.68 11.43C9.68 11.43 10.46 12.31 10.45 13.38C10.45 14.45 9.68 15.33 8.68 15.33ZM15.33 15.33C14.35 15.33 13.56 14.45 13.56 13.38C13.56 12.31 14.33 11.43 15.33 11.43C16.32 11.43 17.1 12.31 17.1 13.38C17.1 14.45 16.32 15.33 15.33 15.33Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Mohith Krishnamoorthy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}