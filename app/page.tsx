import Splash from '../components/mainSections/splash';
import DesktopNav from '../components/navbar/desktopNav';
import Projects from '../components/mainSections/projects';
import Resume from '../components/mainSections/resume';
import Contact from '../components/mainSections/contact';

export default function SinglePageMainScroll() {
  return (
    <main>
      <Splash />
      <DesktopNav />
      <Projects />
      <Resume />
      <Contact />
    </main>
  )
};
