import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectsList } from '../data/projects';

const Projects: React.FC = () => {
  return (
   <section id="projects" className="bg-[#F1EFEE] text-black px-4 sm:px-6 lg:px-8 py-12">
<div className="container mx-auto">
  <div className="text-left mb-8 sm:mb-12">
    <div className="flex items-center space-x-2 mb-4">
      <span className="text-main-yellow text-xl sm:text-2xl font-bold">-</span>
      <span className="text-text-color text-xl sm:text-2xl font-bold">Projects</span>
    </div>
    <div className="flex items-centertext-2xl sm:text-3xl md:text-2xl lg:text-4xl space-x-2 mb-4">
      <span className="text-text-color font-heebo font-bold">My Last</span>
      <span className="text-main-yellow  font-heebo font-bold">Projects</span>
    </div>
   
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
  {projectsList.map((project) => (
          <ProjectCard
            key={project.id}
            {...project}
          />
        ))}
</div>
</div>
</section>
  );
};

export default Projects; 