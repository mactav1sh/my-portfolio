import { IoIosPaper } from 'react-icons/io';

const About = () => {
  return (
    <main>
      <div className="h-screen flex flex-col items-center justify-center space-y-5">
        <IoIosPaper className="h-14 w-14 animate-bounce text-orange-500" />
        <h1 className="capitalize  text-2xl md:text-4xl">
          Writing in progress.
        </h1>
      </div>
    </main>
  );
};

export default About;
