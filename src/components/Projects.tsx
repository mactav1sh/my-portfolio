import React from 'react';
import ProjectsList from './ProjectsList/ProjectsList';
import { projects } from '../dev-data/projects-data';

const Projects = () => {
  return (
    <section className="max-w-5xl mx-auto pb-24">
      <div className="w-min mb-4 mx-2">
        {/* HEADLINE */}
        <h2 className="text-2xl lg:text-4xl font-semibold uppercase mb-1 ">
          Projects
        </h2>
        <div className="h-1 md:h-1.5 w-1/2 bg-gradient-to-r from-red-600 to-orange-500"></div>
      </div>

      <div className="mx-4 mb-12 md:text-xl max-w-md md:max-w-none ">
        <p className="">
          A selection of my projects. Want to see more? Check out my{' '}
          <a
            href="https://github.com/mactav1sh"
            target="_blank"
            rel="noreferrer"
            className="text-orange-500 hover:text-orange-700 duration-200"
          >
            Github profile.
          </a>
        </p>
      </div>

      {/* Projects list */}
      <div className="mx-6 md:mx-4">
        <ProjectsList projects={projects} />
      </div>
    </section>
  );
};

export default Projects;
