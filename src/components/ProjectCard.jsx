import React from 'react';

const ProjectCard = ({ title, description, link }) => {
  return (
    <div
      className="bg-gradient-to-br from-[#18181b] via-[#23232b] to-[#312e81] rounded-xl px-4 py-4 sm:px-6 sm:py-5 shadow-lg text-white/90 transition-all duration-300 hover:scale-[1.03]"
      style={{ overflow: 'hidden' }}
    >
      <div className="relative z-10">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 mb-2 transition-colors">
          {title}
        </h3>

        <p className="text-white/80 mb-4 text-sm sm:text-base text-justify leading-relaxed">
          {description}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 text-sm sm:text-base text-white font-semibold shadow hover:from-indigo-700 hover:to-blue-700 hover:shadow-xl transition-all duration-300"
        >
          View Project
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 opacity-80 group-hover:opacity-100 transition-opacity"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7m0 0v7m0-7L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;