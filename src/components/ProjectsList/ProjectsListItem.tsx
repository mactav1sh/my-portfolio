import { HiOutlineLink } from 'react-icons/hi';
import { IProject } from '../interfaces/projectInterface';
// svgs
import ReactIcon from '../../assets/techIcons/react.svg';
import ReduxIcon from '../../assets/techIcons/redux-icon.svg';
import { ReactComponent as GithubIcon } from '../../assets/techIcons/github.svg';
import FirebaseIcon from '../../assets/techIcons/firebase.svg';
import NodeIcon from '../../assets/techIcons/node-js-icon.svg';
import TailwindIcon from '../../assets/techIcons/tailwind-css-icon.svg';
import TSIcon from '../../assets/techIcons/typescript.svg';
import JSIcon from '../../assets/techIcons/js.svg';
import JasmineIcon from '../../assets/techIcons/jasmine-2.svg';
import MongoIcon from '../../assets/techIcons/mongodb-icon.svg';
import PostgresIcon from '../../assets/techIcons/pgsql.svg';
import styledCompIcon from '../../assets/techIcons/styled-components-2.svg';
import apiIcon from '../../assets/techIcons/api.svg';
import jwtIcon from '../../assets/techIcons/jwt.svg';

interface IProps {
  project: IProject;
}

const techIcons = {
  react: [ReactIcon, 'react'],
  tailwind: [TailwindIcon, 'tailwindcss'],
  redux: [ReduxIcon, 'redux'],
  js: [JSIcon, 'javascript'],
  ts: [TSIcon, 'typescript'],
  firebase: [FirebaseIcon, 'firebase'],
  styledComps: [styledCompIcon, 'styled components'],
  api: [apiIcon, 'API'],
  postgres: [PostgresIcon, 'postgresql'],
  jasmine: [JasmineIcon, 'jasmine'],
  mongodb: [MongoIcon, 'mongodb'],
  nodejs: [NodeIcon, 'nodejs'],
  jwt: [jwtIcon, 'json web tokens'],
};

const ProjectsListItem = ({ project }: IProps) => {
  return (
    <li className="bg-cardWaveLight bg-cover w-full dark:bg-cardWaveDark rounded-md overflow-hidden shadow-lg max-w-sm h-[30rem] lg:h-[28rem] group relative">
      {/* image */}
      <div className="mb-4 h-48 overflow-hidden md:mb-7 ">
        <img
          src={project.image}
          alt={project.title}
          className="duration-500 group-hover:scale-110 min-h-[12rem] object-top"
        />
      </div>
      {/* text */}
      <div className="px-4 mb-20 md:mb-16 lg:mb-5">
        <h3 className="mb-0.5 text-center font-semibold text-xl capitalize">
          {project.title}
        </h3>
        <p className="max-w-sm dark:font-light border-l-2 border-l-gray-400 dark:border-l-darkBlue-400 pl-2 py-1 text-sm">
          {project.description}
        </p>
      </div>

      {/* stack and links */}
      <div className="absolute bottom-1 w-full flex flex-col justify-center">
        {/* stack  */}
        <div className="flex justify-center space-x-4 mb-2">
          {project.stack.map((item, i) => (
            <img
              key={Math.random()}
              src={techIcons[item as keyof typeof techIcons][0]}
              className="w-6 h-6"
              alt={techIcons[item as keyof typeof techIcons][1]}
              title={techIcons[item as keyof typeof techIcons][1]}
            />
          ))}
        </div>
        {/* links */}
        <div className="flex justify-center items-center py-3 px-2 space-x-3 md:space-x-2">
          {project.public && (
            <a
              target="_blank"
              rel="noreferrer"
              href={project.codeUrl}
              className="flex justify-center items-center space-x-2 border-2 border-gray-600 dark:border-white w-32 py-1 rounded-md shadow-md duration-200 hover:text-orange-500 hover:border-orange-500 dark:hover:border-orange-500 max-w-[10rem]  lg:w-28"
            >
              <GithubIcon className="w-4 h-4" />
              <span className="text-sm tracking-wider uppercase font-semibold">
                Code
              </span>
            </a>
          )}

          {project.live && (
            <a
              target="_blank"
              rel="noreferrer"
              href={project.liveUrl}
              className="flex justify-center items-center space-x-2 border-2 w-32 py-1 rounded-md shadow-md duration-200 text-orange-500 border-orange-500 dark:hover:text-orange-300 dark:hover:border-orange-300 hover:text-orange-800 hover:border-orange-800  max-w-[10rem]  lg:w-28"
            >
              <HiOutlineLink className="w-4 h-4" />
              <span className="text-sm tracking-wider uppercase font-semibold">
                Live
              </span>
            </a>
          )}
        </div>
      </div>
    </li>
  );
};

export default ProjectsListItem;
