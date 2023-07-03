import Splash from './_components/_mainSections/0splash';
import Projects from './_components/_mainSections/1projects';
import Skills from './_components/_mainSections/2skills';
import Bio from './_components/_mainSections/3bio';
import Resume from './_components/_mainSections/4resume';
import Contact from './_components/_mainSections/5contact';

export default function SinglePageMainScroll() {
  return (
    <main>
      <Splash />
      <Projects />
      <Skills />
      <Bio />
      <Resume />
      <Contact />
    </main>
  )
};
