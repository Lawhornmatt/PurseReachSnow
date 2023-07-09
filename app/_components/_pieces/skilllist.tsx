import AstroIcon from "../_icons/_tech/astro";
import CSSIcon from "../_icons/_tech/css";
import ElectronIcon from "../_icons/_tech/electron";
import GitIcon from "../_icons/_tech/git";
import GraphQLIcon from "../_icons/_tech/graphql";
import HTMLIcon from "../_icons/_tech/html";
import JSIcon from "../_icons/_tech/javascript";
import JestIcon from "../_icons/_tech/jest";
import JQueryIcon from "../_icons/_tech/jquery";
import MongoIcon from "../_icons/_tech/mongo";
import MySQLIcon from "../_icons/_tech/mysql";
import NextIcon from "../_icons/_tech/next";
import NodeIcon from "../_icons/_tech/node";
import ReactIcon from "../_icons/_tech/react";
import TailwindIcon from "../_icons/_tech/tailwind";
import TSIcon from "../_icons/_tech/typescript";
import ViteIcon from "../_icons/_tech/vite";

export default function SkillList() {
    return (
        <div className='col-span-2 lg:col-span-3 flex flex-col'>

            <h2 className='text-cymru flex-1 font-light text-lg text-left xsml:text-xl'>
              What I am best at:
            </h2>

            <div className='flex flex-row flex-wrap gap-1'>
                {[
                    [<AstroIcon />, 'AstroJS'],
                    [<CSSIcon />, 'CSS3'],
                    [<ElectronIcon />, 'ElectronJS'],
                    [GitIcon('#1f1115', '#EDF5E6'), 'Git'],
                    [<GraphQLIcon />, 'GraphQL'],
                    [<HTMLIcon />, 'HTML5'],
                    [<JSIcon />, 'ES6+ JavaScript'],
                    [<JestIcon />, 'Jest'],
                    [<JQueryIcon />, 'jQuery'],
                    [<MongoIcon />, 'MongoDB'],
                    [<MySQLIcon />, 'MySQL'],
                    [<NextIcon />, 'NextJS'],
                    [<NodeIcon />, 'NodeJS'],
                    [<ReactIcon />, 'React'],
                    [<TailwindIcon />, 'Tailwind'],
                    [<TSIcon />, 'TypeScript'],
                    [ViteIcon('#1f1115', '#EDF5E6'), 'Vite'],
                ].map(([icon, skill]) => (
                    <div className='p-2 flex flex-row justify-between items-center border-solid border-2 border-cymru rounded-md'>
                        {icon}
                        <p className='text-cymru text-center font-light text-md text-left xsml:text-xl'>{skill}</p>
                    </div>
                ))}
            </div>  
        </div>
    )
};

/*
<div className='p-2 flex flex-row justify-between items-center border-solid border-2 border-cymru rounded-md'>
  <HTMLIcon />
  <p className='text-cymru text-center font-light text-md text-left xsml:text-xl'>HTML</p>
</div>
*/