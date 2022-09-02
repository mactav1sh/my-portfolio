import { useState, forwardRef, LegacyRef } from 'react';
import ProjectsList from './ProjectsList/ProjectsList';
import { projects } from '../dev-data/projects-data';
import { IProject } from './interfaces/projectInterface';

type ProjectsType = 'frontend' | 'all' | 'backend';

// 1. WRAP THIS COMPONENT IN FORWARD REF

const Projects = forwardRef<HTMLElement>((_props, ref) => {
  const [selected, setSelected] = useState<ProjectsType>('all');
  const [filteredProjects, setFilteredProjects] =
    useState<IProject[]>(projects);

  const handleClick = (option: ProjectsType) => {
    // Set active option
    setSelected(option);
    // Filter projects based on option
    switch (option) {
      case 'frontend':
        return setFilteredProjects(
          projects.filter((project) => project.type === 'frontend')
        );
      case 'backend':
        return setFilteredProjects(
          projects.filter((project) => project.type === 'backend')
        );
      default:
        return setFilteredProjects(projects);
    }
  };

  return (
    <section className="max-w-5xl mx-auto pb-24">
      <div className="w-min mb-4 mx-2">
        {/* HEADLINE */}
        <h2 className="text-2xl lg:text-4xl font-semibold uppercase mb-1 ">
          Projects
        </h2>
        <div className="h-1 md:h-1.5 w-1/2 bg-gradient-to-r from-red-600 to-orange-500"></div>
      </div>

      <div
        ref={ref as LegacyRef<HTMLDivElement>}
        className="mx-4 mb-12 md:text-xl max-w-md md:max-w-none "
      >
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
      {/* options */}
      <div className="flex justify-center mb-12 dark:text-darkGrey-500">
        <div className=" bg-gradient-to-r from-red-600 to-orange-500 p-[0.15rem] flex justify-center space-x-[0.15rem] rounded-sm">
          <span
            onClick={() => handleClick('all')}
            className={`py-1 w-20 cursor-pointer text-center font-semibold bg-gray-100 rounded-l-sm text-sm hover:bg-gray-200 duration-200 ${
              selected === 'all'
                ? 'text-white bg-transparent hover:bg-transparent cursor-default'
                : ''
            }`}
          >
            All
          </span>

          <span
            onClick={() => handleClick('frontend')}
            className={`py-1 w-20 cursor-pointer text-center font-semibold bg-gray-100 text-sm hover:bg-gray-200 duration-200 ${
              selected === 'frontend'
                ? 'text-white bg-transparent hover:bg-transparent cursor-default'
                : ''
            }`}
          >
            Frontend
          </span>

          <span
            onClick={() => handleClick('backend')}
            className={`py-1 w-20 cursor-pointer text-center font-semibold bg-gray-100 rounded-r-sm text-sm hover:bg-gray-200 duration-200 ${
              selected === 'backend'
                ? 'text-white bg-transparent hover:bg-transparent cursor-default'
                : ''
            }`}
          >
            Backend
          </span>
        </div>
      </div>

      {/* Projects list */}
      <div className="mx-6 md:mx-4">
        <ProjectsList projects={filteredProjects} />
      </div>
    </section>
  );
});

export default Projects;
