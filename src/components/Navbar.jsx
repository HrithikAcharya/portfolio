import React, {useState} from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'About Me', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'My Work', href: '#projects' },
    { label: 'Resume', href: 'https://drive.google.com/file/d/1jD_yEkQNHogKmTxtT4Ioba1eR2jvMu-b/view?usp=sharing' },
    { label: 'Contact', href: '#contact-info' },
  ];

  return (
    <nav className="bg-gradient-to-r from-zinc-900 to-zinc-800 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto">

        {/* Hamburger */}
        <button
          className="md:hidden p-2 focus:outline-none transform hover:scale-125 transition duration-300 cursor-pointer"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(v => !v)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Links */}
        <ul
          className={`flex-col justify-between md:flex justify-between md:flex-row justify-between md:space-x-8 absolute md:static left-0 w-full md:w-auto bg-gradient-to-r from-zinc-900 to-zinc-800 md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out ${
            isOpen ? 'top-16 opacity-100' : 'top-[-300px] opacity-0 md:opacity-100'
          }`}
        >
          {navLinks.map(link => (
            <li
              key={link.label}
              className="text-1xl sm:text-2xl md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 drop-shadow text-center transition ease-in-out delay-150 hover:scale-125 hover:bg-black-500 duration-300"
            >
              <a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;