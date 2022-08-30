import React from 'react';
import ProjectsListItem from './ProjectsListItem';
import { IProject } from '../interfaces/projectInterface';

interface IProps {
  projects: IProject[];
}

const ProjectsList = ({ projects }: IProps) => {
  return (
    <ul className="grid grid-cols-1 justify-items-center gap-y-14 md:grid-cols-2 lg:grid-cols-3 md:gap-14 lg:gap-10">
      {projects.map((project) => (
        <ProjectsListItem key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ProjectsList;
