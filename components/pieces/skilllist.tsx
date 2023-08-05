import AstroIcon from "../icons/tech/astro";
import CSSIcon from "../icons/tech/css";
import ElectronIcon from "../icons/tech/electron";
import FirebaseIcon from "../icons/tech/firebase";
import GitIcon from "../icons/tech/git";
import GraphQLIcon from "../icons/tech/graphql";
import HTMLIcon from "../icons/tech/html";
import JSIcon from "../icons/tech/javascript";
import JestIcon from "../icons/tech/jest";
import JQueryIcon from "../icons/tech/jquery";
import MongoIcon from "../icons/tech/mongo";
import MySQLIcon from "../icons/tech/mysql";
import NextIcon from "../icons/tech/next";
import NodeIcon from "../icons/tech/node";
import ReactIcon from "../icons/tech/react";
import SvelteIcon from "../icons/tech/svelte";
import TailwindIcon from "../icons/tech/tailwind";
import TSIcon from "../icons/tech/typescript";
import ViteIcon from "../icons/tech/vite";

export default function SkillList() {
    return (
        <div id='skills' className='col-span-2 lg:col-span-3 flex flex-col'>

            <h2 className='mb-2 italic text-cymru flex-1 font-light text-lg text-left xsml:text-xl'>
              Tech I am best at:
            </h2>

            <div className='flex flex-row justify-center flex-wrap gap-1'>
                {[
                    [AstroIcon('skliconAstro'), 'AstroJS'],
                    [CSSIcon('skliconCSS'), 'CSS3'],
                    [ElectronIcon('skliconElec'), 'ElectronJS'],
                    [FirebaseIcon(true, 'skliconFireb'), 'Firebase'],
                    [GitIcon('#1f1115', '#EDF5E6', 'skliconGit'), 'Git'],
                    [GraphQLIcon('skliconGrQL'), 'GraphQL'],
                    [HTMLIcon('skliconHTML'), 'HTML5'],
                    [JSIcon('skliconJS'), 'ES6+ JavaScript'],
                    [JestIcon('skliconJst'), 'Jest'],
                    [JQueryIcon('skliconJQ'), 'jQuery'],
                    [MongoIcon('skliconMongo'), 'MongoDB'],
                    [MySQLIcon('skliconMySQL'), 'MySQL'],
                    [NextIcon('skliconNext'), 'NextJS'],
                    [NodeIcon('skliconNode'), 'NodeJS'],
                    [ReactIcon('skliconReact'), 'React'],
                    [SvelteIcon(true, 'skliconSvlt'), 'Svelte'],
                    [TailwindIcon('skliconTW'), 'Tailwind'],
                    [TSIcon('skliconTS'), 'TypeScript'],
                    [ViteIcon('#1f1115', '#EDF5E6', 'skliconVite'), 'Vite'],
                ].map(([icon, skill]) => (
                    <div key={`sklist${skill}`} className='p-2 flex flex-row justify-between items-center border-solid border-2 border-cymru rounded-md'>
                        {icon}
                        <p className='pl-1 text-cymru font-light text-md text-left xsml:text-xl'>{skill}</p>
                    </div>
                ))}
            </div>  
        </div>
    )
};