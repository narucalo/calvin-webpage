// src/App.js
import React, { useEffect } from 'react';
import './styles.css';

function App() {
  useEffect(() => {
    console.log("App component has been mounted"); // Debugging statement
  }, []);

  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <div className="logo">Personal</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>  {/* This link will scroll to the Contact section */}
          </ul>
        </nav>
      </header>
      
      <section className="main-section" id="home">
        <div className="intro-text">
          <p>THIS IS ME</p>
          <h1>CALVIN NGUYEN</h1>
          <p>Operations professional and Military Veteran with a strong background in computer science.</p>
        </div>
        <div className="profile-image">
          <img src="/CB4EBF12-2776-4027-AC78-9E094F574B4C.JPG" alt="Calvin Nguyen" />
        </div>
      </section>

      <section className="about-section" id="about">
        <h2>About Me</h2>
        <p>
          My name is Calvin Nguyen. I am a troubleshooter and problem solver with a strong background in cybersecurity and full stack development.
          With a passion for technology and a commitment to continuous learning, I've honed my skills in network security, SIEM tools, and web development.
          My experience in the U.S. Army has instilled in me a strong work ethic and the ability to thrive under pressure.
          I enjoy tackling complex challenges and staying active in my community, always seeking new opportunities for personal and professional growth.
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <h2>Contact Me</h2>
        <p>Cell: (813) 553 - 0350</p>
        <p>Email: <a href="mailto:caltannguyen@gmail.com">caltannguyen@gmail.com</a></p>
      </section>

      <footer className="footer">
        <a href="https://www.github.com/narucalo" target="_blank" rel="noopener noreferrer">
          <img src="/github-mark.png" alt="GitHub" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/calvin-n-990a4a193" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin.png" alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://www.instagram.com/calvinnguyen" target="_blank" rel="noopener noreferrer">
          <img src="/instagram.png" alt="Instagram" className="social-icon" />
        </a>
        <a href="https://www.facebook.com/Caltnguyen" target="_blank" rel="noopener noreferrer">
          <img src="/facebook.png" alt="Facebook" className="social-icon" />
        </a>
      </footer>
    </div>
  );
}

export default App;
