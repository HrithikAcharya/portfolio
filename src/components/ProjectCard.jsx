import React from 'react';

const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="bg-gradient-to-br from-[#18181b] via-[#23232b] to-[#312e81] rounded-xl px-6 py-5 shadow-lg text-white/90 transition-all duration-300 hover:scale-[1.03]" style={{ overflow: 'hidden' }}>
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 mb-2 transition-colors">
          {title}
        </h3>
        <p className="text-white/80 mb-4 text-base text-justify">
          {description}
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 text-white font-semibold shadow hover:from-indigo-700 hover:to-blue-700 hover:shadow-xl transition-all duration-300"
        >
          View Project
          <svg className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7m0 0v7m0-7L10 14"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;