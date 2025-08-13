import React from "react";
const styles = {
  footer: {
  textAlign: 'center',
  padding: '2rem 1rem 1rem 1rem',
  background: 'linear-gradient(90deg, #18181b 0%, #27272a 100%)',
  color: '#e5e7eb',
  boxShadow: '0 -2px 12px 0 rgba(1, 2, 2, 0.25)',
  borderTop: '1px solid #23232b',
}

}
const Footer = () => {
  return (
    <footer
      id="contact-info"
      className="text-center px-4 py-6 sm:py-8 bg-gradient-to-r from-[#18181b] to-[#27272a] text-gray-200 shadow-[0_-2px_12px_rgba(1,2,2,0.25)] border-t border-[#23232b]"
    >
      <p className="mb-4 text-lg sm:text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 drop-shadow">
        Get in touch
      </p>

      <div className="flex justify-center gap-6 mb-4 flex-wrap">
        <a
          href="mailto:hrithikacharya2001@gmail.com"
          className="transform hover:scale-125 transition duration-300"
          aria-label="Email"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 488 512" className="w-4 h-4 sm:w-6 sm:h-6">
            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/hrithik-acharya-208660149/"
          target="_blank"
          rel="noopener noreferrer"
          className="transform hover:scale-125 transition duration-300"
          aria-label="LinkedIn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-4 h-4 sm:w-6 sm:h-6">
            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
          </svg>
        </a>

        <a
          href="https://github.com/HrithikAcharya"
          target="_blank"
          rel="noopener noreferrer"
          className="transform hover:scale-125 transition duration-300"
          aria-label="GitHub"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512" className="w-4 h-4 sm:w-6 sm:h-6">
            <path d="M244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
          </svg>
        </a>
      </div>

      <p className="text-xs sm:text-sm text-gray-400">&copy; 2025 Hrithik Acharya. All rights reserved.</p>
    </footer>
  );
};

export default Footer;