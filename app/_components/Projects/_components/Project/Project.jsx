import {Button} from "@/components/ui/button";
import Link from "next/link";
import DashboardIcon from "@/app/_components/icons/DashboardIcon";
import CodeIcon from "@/app/_components/icons/CodeIcon";

export default function Project({data:project}){

    return(
        <div className='flex flex-row items-center gap-2 mb-3 '>
            <div
                className='flex outline outline-1 rounded-sm bg-muted inline-flex items-center h-10 w-10 justify-center'
            >
                <CodeIcon size={24}/>
            </div>
            <div >
                <h2 className='font-bold '>{project.name}
                    {project.stack.map(
                        (s,idx) => <span key={idx} className='text-xs font-light before:content-["#"] px-1'>{s}</span>
                    )}</h2>
                <span className='text-xs'>{project.description}</span>
                <a
                    className='text-xs ml-3 text-primary font-code hover:underline hover:underline-offset-8'
                    href={project.link}
                    target='_blank'
                >
                    [_↗ view Github]
                </a>
            </div>
        </div>
    )
}