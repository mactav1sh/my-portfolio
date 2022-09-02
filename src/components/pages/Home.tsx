import Hero from '../Hero';
import Projects from '../Projects';
import Skills from '../Skills';
import Separator from '../Separator';
import Contact from '../Contact';
import AboutMe from '../AboutMe';
import { useRef } from 'react';

const Home = () => {
  const projectsRef = useRef<HTMLElement>(null);
  const scrollTo = () => {
    projectsRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      <Hero scrollTo={scrollTo} />
      <main className="bg-gray-50 dark:bg-darkBlue-800">
        <AboutMe />
        <Separator />
        <Skills />
        <Separator />
        <Projects ref={projectsRef} />
        <Separator />
        <Contact />
      </main>
    </>
  );
};

export default Home;

// #f9fafb
// #002249
