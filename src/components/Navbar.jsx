import React from 'react';
const styles = {
  nav :{
    background: 'linear-gradient(90deg, #18181b 0%, #27272a 100%)',
    color: '#fff',
    padding: '1rem'
  },
  ul :{
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around'
  }
}
const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li class = "text-1xl sm:text-2xl md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 drop-shadow text-center transition ease-in-out delay-150 hover:scale-125 hover:bg-black-500 duration-300"><a href="#about">About Me</a></li>
        <li class = "text-1xl sm:text-2xl md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 drop-shadow text-center transition ease-in-out delay-150 hover:scale-125 hover:bg-black-500 duration-300"><a href="#skills">Skills</a></li>
        <li class = "text-1xl sm:text-2xl md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 drop-shadow text-center transition ease-in-out delay-150 hover:scale-125 hover:bg-black-500 duration-300"><a href="#projects">My Work</a></li>
        <li class = "text-1xl sm:text-2xl md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 drop-shadow text-center transition ease-in-out delay-150 hover:scale-125 hover:bg-black-500 duration-300"><a href="https://drive.google.com/file/d/1jD_yEkQNHogKmTxtT4Ioba1eR2jvMu-b/view?usp=sharing">Resume</a></li>
        <li class = "text-1xl sm:text-2xl md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 drop-shadow text-center transition ease-in-out delay-150 hover:scale-125 hover:bg-black-500 duration-300"><a href="#contact-info">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;