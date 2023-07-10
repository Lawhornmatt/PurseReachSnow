import SkillList from '../_pieces/skilllist';
import ProjList from '../_pieces/projlist';

export default function Projects() {
    return (
      <section id="projects" className="scroll-mt-20 grid grid-cols-2 lg:grid-cols-3 gap-4 w-fill px-4 mt-16 mb-4 sm:px-16 sm:font-medium sm:text-4xl">

        <div className='-mb-4 col-span-2 lg:col-span-3 flex flex-col'>
          <h1 className="text-virid italic flex-1 font-light text-4xl text-left xsml:text-5xl">
            My Work
          </h1>
          <h2 className='text-cymru italic flex-1 font-light text-lg text-left xsml:text-xl'>
            Selected projects:
          </h2>
        </div>

        <ProjList />

        {/* <div className='col-span-2 lg:col-span-3 flex flex-col'>
          <h2 className='mb-2 text-cymru italic flex-1 font-light text-md text-left xsml:text-xl'>
            Some embedded demonstrations
          </h2>
        </div>

        <PassGen /> */}

        <SkillList />

        <div className='col-span-2 lg:col-span-3 flex flex-col'>
          <h2 className='mb-2 text-cymru italic flex-1 font-light text-md text-left xsml:text-xl'>
            A gist of what I do:
          </h2>
          <p className="text-2xl text-center xsml:text-left xsml:ml-2">yada yada</p>
        </div>

      </section>
    )
};