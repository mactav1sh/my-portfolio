import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <section className="max-w-5xl mx-auto mb-24">
      <div className="w-max mb-4 mx-2">
        <h2 className="text-2xl lg:text-4xl font-semibold uppercase mb-1">
          About me
        </h2>
        <div className="h-1 md:h-1.5 w-1/2 bg-gradient-to-r from-red-600 to-orange-500"></div>
      </div>
      <div className="mx-4 mb-12 md:text-xl max-w-lg md:max-w-2xl lg:max-w-none">
        <p className="mb-4">
          Hi, great to have you here. I'm a full stack developer who started as
          a frontend developer but realized I enjoyed building everything from
          scratch so I decided to learn backend, I'm also a detail-oriented
          person who enjoys writing clean and readable code along with simple
          and responposive UI.
        </p>
        <p className="text-base">
          If you would like to know more about the non-technical side of me
          check the{' '}
          <Link
            to="/about"
            className="text-orange-500 hover:text-orange-700 duration-200"
          >
            About
          </Link>{' '}
          page.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
