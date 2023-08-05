import SkillList from '../pieces/skilllist';
import ProjList from '../pieces/projlist';

export default function Projects() {
    return (
      <section id="projects" className="scroll-mt-20 grid grid-cols-2 lg:grid-cols-3 gap-4 w-fill mx-4 mt-16 mb-4 sm:mx-16 2xl:mx-40 sm:font-medium sm:text-4xl">

        <div className='-mb-4 col-span-2 lg:col-span-3 flex flex-col'>
          <h1 className="text-virid italic flex-1 font-light text-4xl text-left xsml:text-5xl">
            My Work
          </h1>
          <h2 className='text-cymru italic flex-1 font-light text-lg text-left xsml:text-xl'>
            Selected projects:
          </h2>
          {/* <h2 className='text-virid flex-1 font-light text-md text-center xsml:text-lg'>
            Click any card to visit the live deployment
          </h2> */}
        </div>

        <ProjList />

        {/* <div className='col-span-2 lg:col-span-3 flex flex-col'>
          <h2 className='mb-2 text-cymru italic flex-1 font-light text-md text-left xsml:text-xl'>
            Some embedded demonstrations
          </h2>
        </div>

        <PassGen /> */}

        <SkillList />

        <article id='bio' className='scroll-mt-20 col-span-2 lg:col-span-3 flex flex-col'>
          <h2 className='mb-4 text-cymru italic flex-1 font-light text-md text-left xsml:text-xl'>
            A gist of what I do:
          </h2>
          <p className="mb-4 text-md md:text-2xl text-center indent-6 xsml:text-left xsml:ml-2">
            I am a junior full-stack developer with a Bachelors in Geology from UT at El Paso. 
            I have been a project manager / assistant production manager at a plant 
            and for nearly a decade I was in the service industry. 
            I take the skills and lessons from those experiences, 
            the support of the amazing folks I met along the way, 
            and I build cutting-edge web apps.
          </p>
          <p className="text-md md:text-2xl text-center indent-6 xsml:text-left xsml:ml-2">
            In 2022, I completed a Full-Stack Web Development certification program by the University of Texas at Austin - CPE. 
            Since then I have explored more of what makes me interested in web development, e.g. web accessibility, 
            open source projects, and the independent web. Learning how to create safer, stronger, more equitable 
            online communities is a goal of mine. I am also looking to utilize tech within the field of Geology, e.g. data-science 
            for novel data analysis and web development to reach the public with environmental information in engaging ways.
          </p>
        </article>

      </section>
    )
};