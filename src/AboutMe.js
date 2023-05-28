import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-content">
        <h2>About Me</h2>
        <p>
          Welcome to my world of software engineering and blogging! I'm a passionate software engineer with a creative flair for writing. My goal is to build innovative solutions and share my knowledge with the community.
        </p>
        <p>
          I have a strong background in software development and a keen interest in exploring new technologies and programming languages. My experience includes working on automation, dependency management, and modernizing codebases to enhance the developer experience.
        </p>
        <p>
          As an avid writer, I enjoy combining my technical expertise with my passion for storytelling. Through my blog, I share insights, tutorials, and best practices in software engineering. I believe in the power of effective communication to bridge the gap between complex technical concepts and a wider audience.
        </p>
        <p>
          When I'm not coding or writing, you can find me pursuing my other interests such as graphic design, music production, oil painting, and snowboarding. I believe in a well-rounded approach to life, where creativity and technical skills complement each other.
        </p>
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
