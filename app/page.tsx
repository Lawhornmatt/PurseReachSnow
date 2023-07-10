import Splash from './_components/_mainSections/splash';
import Projects from './_components/_mainSections/projects';
import Resume from './_components/_mainSections/resume';
import Contact from './_components/_mainSections/contact';

export default function SinglePageMainScroll() {
  return (
    <main>
      <Splash />
      <Projects />
      <Resume />
      <Contact />
    </main>
  )
};
