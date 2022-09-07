import { FiArrowRight } from 'react-icons/fi';

interface IProps {
  scrollTo: () => void;
}

const Hero = ({ scrollTo }: IProps) => {
  return (
    <section className="bg-animatedwavesCurvedLight dark:bg-animatedwavesCurvedDark bg-no-repeat bg-bottom">
      <div className="mx-auto max-w-5xl h-screen flex flex-col items-center justify-center">
        <div className="px-4 mx-2 flex flex-col items-center space-y-5 md:space-y-6 lg:space-y-8">
          {/* text */}
          <div className="text-2xl md:text-4xl lg:text-5xl text-center md:font-semibold ">
            <p className="md:mb-1">
              Hi, I'm{' '}
              <span className="font-semibold md:font-bold text-transparent bg-gradient-to-br from-red-600 to-orange-500 bg-clip-text">
                Abdelrahman El Toukhy.
              </span>
            </p>

            {/* slider container */}
            <div className="flex items-center justify-center text-sm font-normal md:text-xl lg:text-2xl space-x-1 md:space-x-2 lg:space-x-2.5 mr-2">
              {/* Slider text */}
              <div className="h-6 overflow-hidden ">
                <div className="h-6 mb-6 flex items-center justify-end font-semibold slideText">
                  <span>Node Js</span>
                </div>
                <div className="h-6 mb-6 flex justify-end items-center font-semibold">
                  <span>React JS</span>
                </div>
                <div className="h-6 mb-6 flex items-center justify-end font-semibold">
                  <span>Full Stack</span>
                </div>
              </div>
              {/* fixed text */}
              <span>Developer</span>
            </div>
            {/* slider */}
          </div>

          {/* View my work */}
          <button
            onClick={() => scrollTo()}
            className="text-gray-600 border-2 border-gray-500 py-1 md:py-1.5 lg:py-2 rounded-md px-4 md:px-10 lg:px-12 hover:border-orange-500 shadow-md hover:text-orange-500 duration-200 dark:border-white dark:hover:border-orange-500 md:font-semibold group dark:text-white dark:hover:text-orange-500"
          >
            <div className="flex items-end justify-center space-x-1 md:space-x-2 lg:space-x-3">
              <span className="text-sm md:text-base lg:text-lg text-gray-500 dark:text-white group-hover:text-orange-500 duration-200 font-medium">
                View my work
              </span>
              <FiArrowRight className="h-4 w-4 md:h-5 md:w-5 lg:h-7 lg:w-7 group-hover:rotate-90 transition-transform duration-300 text-gray-500 dark:text-white group-hover:text-orange-500" />
            </div>
          </button>

          {/* <div className="flex space-x-4 font-semibold">
            <Link
              to="#"
              className="border-2 border-darkGrey-500 text-center py-1.5 rounded-full w-28  hover:border-orange-500 shadow-md hover:text-orange-500 duration-200 dark:border-white dark:hover:border-orange-500 "
            >
              My work
            </Link>

            <Link
              to="/contact"
              className="border-2 border-orange-300 text-center py-1.5 rounded-full w-28 
            bg-orange-600 hover:border-orange-900  duration-200 dark:border-white dark:hover:border-orange-500 shadow-md dark:hover:bg-orange-100 dark:hover:text-orange-500 text-orange-100 hover:text-orange-900"
            >
              Hire me
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
