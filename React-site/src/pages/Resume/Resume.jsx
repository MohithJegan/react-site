import './Resume.css';
import resumeFile from "../../assets/resume.pdf";

export default function Resume() {
  return (
    <main id="resume" className="resume-container">
      <div className="resume-content">
        <h1 className="resume-title">
          <span className="gradient-text">My Resume</span>
        </h1>
        {/* Resume Window */}
        <div className="resume-embed-container">
          <iframe 
            src={resumeFile} 
            className="resume-iframe" 
            title="Mohith Jegan's Resume"
            allowFullScreen
          ></iframe>
        </div>
        {/* Download Button */}
        <div className="resume-actions">
          <a 
            href={resumeFile} 
            download="Mohith_Jegan_Resume.pdf" 
            className="download-btn"
          >
            Download Resume
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 15V3M12 15L8 11M12 15L16 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L2.621 19.485C2.72915 19.9177 2.97882 20.3018 3.33033 20.5763C3.68184 20.8508 4.115 21 4.561 21H19.439C19.885 21 20.3182 20.8508 20.6697 20.5763C21.0212 20.3018 21.2709 19.9177 21.379 19.485L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}