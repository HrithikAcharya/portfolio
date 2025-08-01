import React from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-indigo-950 to-blue-900 text-white font-sans">
      <Navbar />
      <div className='content'><div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 rounded-2xl text-white/90 transition-all duration-300">
        <h1 className="mb-14 text-3xl sm:text-3xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 drop-shadow text-center p-6">
          Hrithik Acharya
        </h1>
        <section id="about" className="mb-18 relative">
          <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 drop-shadow p-1">
            About Me
          </h2>
          <p className="mb-6 text-white/80 text-base sm:text-lg text-justify">
            I’m a Graduate student in Information Technology at Florida State University with a passion for building practical, innovative software solutions. My background includes internships in software testing, Python, web development, and machine learning–based image data analysis, along with hands-on training from QSpiders in programming and QA.
            Currently, I’m exploring cloud computing and its role in creating scalable systems. I enjoy learning new technologies and aim to contribute to meaningful, real-world projects in software engineering.
          </p>
        </section>
        <section id="skills" className="mb-18 relative">
          <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 drop-shadow p-2">
            Skills
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            {[
              'Core Java',
              'Selenium Testing (Java)',
              'HTML5',
              'CSS3',
              'Javascript',
              'Git',
              'MySQL',
              'Python',
              'NodeJS',
              'Express',
              'EJS',
              'React',
            ].map(skill => (
              <li key={skill} className="bg-white/5 rounded-xl px-4 py-4 sm:px-6 sm:py-5 shadow-lg text-white/90 transition-all duration-300 hover:scale-[1.03] text-base sm:text-lg text-center">
                {skill}
              </li>
            ))}
          </ul>
        </section>
        <section id="projects" className="mb-18 relative">
          <h2 className="p-2 mb-4 text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 drop-shadow">
            My Work
          </h2>
          <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 relative z-10">
            {[
              {
                title: 'Swarm Exploration and Target Searching',
                description: 'A simulation project carried out in Webots as a minor project, which involved locating a target in a maze using a swarm of robots and implemented the same using hardware in a maze-like environment using DFS Algorithm.',
                link: 'https://github.com/Guruprasad-G/Swarm-Exploration-and-Target-Searching'
              },
              {
                title: 'Image Data Analysis: Object Detection Using EFFICIENTDET',
                description: 'EfficientDet Architecture was used in this project to detect objects for autonomous vehicles.',
                link: 'https://drive.google.com/drive/folders/1k-0Qe3wZKHXr1hniECE4xqPnRXW45TBw?usp=sharing'
              },
              {
                title: 'Login Authentication System',
                description: 'This project involved developing a secure login authentication system.',
                link: 'https://github.com/HrithikAcharya/HrithikAcharya.devtern'
              },
              {
                title: 'Weather App',
                description: 'This project is Simple Weather application made using React which gives weather condition of the various cities across the world.',
                link: 'https://github.com/HrithikAcharya/ReactWeatherApp'
              },
              {
                title: 'Spotify (Clone)',
                description: 'This project involved replicating the user interface of Spotify.',
                link: 'https://github.com/HrithikAcharya/Spotify_Clone'
              },
              {
                title: 'Tribute to Doctors',
                description: 'Article-type web pages about the doctors who perished in the second wave of COVID 19.',
                link: 'https://github.com/HrithikAcharya/HrithikAcharya.TIE'
              },
              {
                title: 'Portfolio Website Using NuxtJS',
                description: 'This project involved building a portfolio website using NuxtJS',
                link: 'https://github.com/HrithikAcharya/PortfolioWebsiteUsingNuxtJS'
              },
              {
                title: 'Typing Test Application',
                description: 'Created a typing test app using Python and Tkinter, featuring real-time word display, scoring, and a countdown timer.',
                link: 'https://github.com/HrithikAcharya/TypingTestUsingPython.devtern'
              },
              {
                title: 'Hand Gesture Brightness Control',
                description: 'Built a brightness control system using OpenCV and Mediapipe, allowing screen brightness adjustment with hand gestures. This project advanced my skills in computer vision',
                link: 'https://github.com/HrithikAcharya/HandGestureBrightnessControlUsingPython.devtern'
              },
              {
                title: 'Message Encryption System ',
                description: 'Built a secure message encryption system in Python, converting plaintext to ciphertext with unique decryption keys. Gained expertise in Hazmat cryptography and cipher algorithms for robust data protection.',
                link: 'https://github.com/HrithikAcharya/MessageEncryptionUsingPython.devtern'
              },
              {
                title: 'Chatbot using Python',
                description: 'Designed an autonomous chatbot using Natural Language Processing (NLP) with NLTK and Streamlit.',
                link: 'https://github.com/HrithikAcharya/ChatbotUsingPython.devtern'
              },
              {
                title: 'Educational App Prototype on Ethical Usage of AI',
                description: 'Designed an educational app prototype in Figma aimed at promoting ethical AI use among high school students; integrated personalized learning paths, AI content detection, and scheduling features based on iterative user testing and feedback.',
                link: 'https://www.figma.com/proto/2MHFgDiHlEeTHALB0s645m/High-Fidelity-Prototype?node-id=115-3229&p=f&t=JN1YPKLWrHehzFrK-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=115%3A3229'
              }
            ].map(project => (
              <ProjectCard key={project.title} title={project.title} description={project.description} link={project.link} />
            ))}
          </div>
        </section>
      </div></div>
      <Footer />
    </div>
  );
};

export default App;