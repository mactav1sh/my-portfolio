import { SiStyledcomponents } from 'react-icons/si';
import { ReactComponent as ReactIcon } from '../assets/techIcons/react.svg';
import { ReactComponent as ReduxIcon } from '../assets/techIcons/redux-icon.svg';
import { ReactComponent as GithubIcon } from '../assets/techIcons/github.svg';
import { ReactComponent as GitIcon } from '../assets/techIcons/git.svg';
import { ReactComponent as FirebaseIcon } from '../assets/techIcons/firebase.svg';
import { ReactComponent as NodeIcon } from '../assets/techIcons/node-js-icon.svg';
import { ReactComponent as TailwindIcon } from '../assets/techIcons/tailwind-css-icon.svg';
import { ReactComponent as TSIcon } from '../assets/techIcons/typescript.svg';
import { ReactComponent as JSIcon } from '../assets/techIcons/js.svg';
import { ReactComponent as JasmineIcon } from '../assets/techIcons/jasmine-2.svg';
import { ReactComponent as MongoIcon } from '../assets/techIcons/mongodb-icon.svg';
import { ReactComponent as PostgresIcon } from '../assets/techIcons/pgsql.svg';
import { ReactComponent as VSCodeIcon } from '../assets/techIcons/vscode.svg';

const Skills = () => {
  return (
    <section className="max-w-5xl mx-auto mb-24">
      {/* HEADLINE */}
      {/* <div className="w-min mb-12 mx-2 flex space-x-3 items-center">
        <h2 className="text-2xl md:text-4xl font-semibold uppercase rounded-md mb-1">
          Skillset
        </h2>

        <div className="h-1 md:h-1 w-[20vw] bg-gradient-to-r from-red-600 to-orange-500"></div>
      </div> */}
      <div className="w-min mb-4 mx-2">
        <h2 className="text-2xl lg:text-4xl font-semibold uppercase mb-1">
          Skillset
        </h2>
        <div className="h-1 md:h-1.5 w-1/2 bg-gradient-to-r from-red-600 to-orange-500"></div>
      </div>
      <div className="mx-4 mb-12 md:text-xl max-w-md md:max-w-2xl lg:max-w-none ">
        <p>
          Here's the technologies I've been working with recently, also I'm
          always open to learning a new framework or language.
        </p>
      </div>

      {/* TODO: REFACTOR THE CARD LIST */}

      {/* CARD */}
      <div className="border-2 border-gray-300 dark:border-darkBlue-600 shadow-md rounded-lg md:px-2 pt-8 pb-14 mx-4 flex flex-col space-y-16 md:justify-center md:space-x-20 lg:space-x-24 md:flex-row md:items-stretch md:space-y-0 md:mx-2">
        {/* part 1 */}
        <div className="flex space-x-8 items-center justify-center md:justify-start md:items-stretch md:flex-col md:space-y-6 md:space-x-0">
          <h3 className="text-base md:text-xl lg:text-2xl font-semibold">
            Backend
          </h3>
          {/* Small Separator */}
          <div className="h-20 w-[0.1rem]  bg-gradient-to-b from-red-600 to-orange-500 bg-gray-400 dark:bg-white self-center md:hidden"></div>

          <ul className="text-xs flex flex-col space-y-3  font-light md:text-base">
            <li className="flex items-center space-x-2">
              <NodeIcon className="h-7 w-7" />
              <span className="max-w-[2.5rem] md:max-w-none">NodeJs</span>
            </li>

            <li className="flex items-center space-x-2">
              <MongoIcon className="h-7 w-7" />
              <span className="max-w-[2.5rem] md:max-w-none">MongoDB</span>
            </li>

            <li className="flex items-center space-x-2">
              <PostgresIcon className="h-7 w-7" />
              <span className="max-w-[2.5rem] md:max-w-none">PostgreSQL</span>
            </li>

            <li className="flex items-center space-x-2">
              <FirebaseIcon className="h-7 w-7" />
              <span className="max-w-[2.5rem] md:max-w-none">Firebase</span>
            </li>
            <li className="flex items-center space-x-2">
              <JasmineIcon className="h-7 w-7" />
              <span className="max-w-[2.5rem] md:max-w-none">Jasmine</span>
            </li>
          </ul>
        </div>
        {/* Separator  */}
        <div className="hidden md:block md:h-44 md:w-[0.1rem]  md:bg-gradient-to-b from-red-600 to-orange-500 bg-gray-400 dark:bg-white self-center"></div>

        <div className="flex space-x-8 items-center justify-center md:justify-start md:items-stretch md:flex-col md:space-y-6 md:space-x-0">
          <h3 className="text-base md:text-xl lg:text-2xl font-semibold">
            Frontend
          </h3>
          {/* Small Separator */}
          <div className="h-20 w-[0.1rem]  bg-gradient-to-b from-red-600 to-orange-500 bg-gray-400 dark:bg-white self-center md:hidden"></div>
          <ul className="text-xs flex flex-col space-y-3 font-light md:text-base">
            <li className="flex items-center space-x-2">
              <JSIcon className="h-7 w-7" />
              <span className="max-w-[2.5rem] md:max-w-none">JavaScript</span>
            </li>

            <li className="flex items-center space-x-2">
              <TSIcon className="h-7 w-7" />
              <span className="max-w-[2.5rem] md:max-w-none">TypeScript</span>
            </li>

            <li className="flex items-center space-x-2">
              <ReactIcon className="h-7 w-7" />
              <span className="max-w-[2.5rem] md:max-w-none">React</span>
            </li>

            <li className="flex items-center space-x-2">
              <ReduxIcon className="h-7 w-7" />
              <span className="max-w-[2.5rem] md:max-w-none">Redux</span>
            </li>

            <li className="flex items-center space-x-2">
              <TailwindIcon className="h-7 w-7" />
              <span className="max-w-[2.5rem] md:max-w-none">TailwindCSS</span>
            </li>

            <li className="flex items-center space-x-2">
              <SiStyledcomponents className="h-7 w-7 " />
              <span className="max-w-[2.5rem] md:max-w-none">
                Styled Components
              </span>
            </li>

            <li className="flex items-center space-x-2">
              <ReactIcon className="h-7 w-7" />
              <span className="max-w-[2.5rem] md:max-w-none">React</span>
            </li>
          </ul>
        </div>

        {/* Separator  */}
        <div className="hidden md:block md:h-44 md:w-[0.1rem]  md:bg-gradient-to-b from-red-600 to-orange-500 bg-gray-400 dark:bg-white self-center"></div>

        {/* part 3 */}
        <div className="flex space-x-8 items-center justify-center md:justify-start md:items-stretch md:flex-col md:space-y-6 md:space-x-0">
          <h3 className="text-base md:text-xl lg:text-2xl font-semibold">
            Dev Tools
          </h3>
          {/* Small Separator */}
          <div className="h-20 w-[0.1rem]  bg-gradient-to-b from-red-600 to-orange-500 bg-gray-400 dark:bg-white self-center md:hidden"></div>
          <ul className="text-xs flex flex-col space-y-3 font-light md:text-base">
            <li className="flex items-center space-x-2">
              <VSCodeIcon className="h-7 w-7" />
              <span className="max-w-[2.5rem] md:max-w-none">VS Code</span>
            </li>
            <li className="flex items-center space-x-2">
              <GithubIcon className="h-7 w-7" />
              <span className="max-w-[2.5rem] md:max-w-none">Github</span>
            </li>

            <li className="flex items-center space-x-2">
              <GitIcon className="h-7 w-7" />
              <span className="max-w-[2.5rem] md:max-w-none">Git</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
