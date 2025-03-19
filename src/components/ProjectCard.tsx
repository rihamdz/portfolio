import React, { useState } from 'react';
import Image from 'next/image';
import { Project } from '../data/projects';
import Modal from './Modal';

interface ProjectCardProps extends Project {}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  imageUrl, 
  skills, 
  shortDescription, 
  fullDescription,
  date,
  sourceCode,
  liveDemo 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="w-full max-w-sm bg-white rounded-xl overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-xl">
        {/* Image container */}
        <div className="relative h-96 group">
          <Image 
            src={imageUrl} 
            alt={title} 
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Skills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-main-yellow rounded-full text-sm font-medium text-gray-800"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Title & Description */}
          <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{shortDescription}</p>

          {/* Button */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="text-main-green font-semibold hover:text-main-green/80 transition-colors"
          >
            En savoir plus →
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-8">
          <div className="relative h-64 w-full mb-6">
            <Image 
              src={imageUrl} 
              alt={title} 
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
          
          <div className="flex items-center gap-2 mb-4 text-gray-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{date}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-main-yellow rounded-full text-sm font-medium text-gray-800"
              >
                {skill}
              </span>
            ))}
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {fullDescription}
          </p>

          <div className="flex gap-4">
            {sourceCode && (
              <a 
                href={sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Code Source
              </a>
            )}
        
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProjectCard; 