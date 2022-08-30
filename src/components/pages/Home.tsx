import Hero from '../Hero';
import Projects from '../Projects';
import Skills from '../Skills';
import Separator from '../Separator';
import Contact from '../Contact';
import AboutMe from '../AboutMe';

const Home = () => {
  return (
    <>
      <Hero />
      <main className="bg-gray-50 dark:bg-darkBlue-800">
        <AboutMe />
        <Separator />
        <Skills />
        <Separator />
        <Projects />
        <Separator />
        <Contact />
      </main>
    </>
  );
};

export default Home;

// #f9fafb
// #002249
