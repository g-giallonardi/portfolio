import Section from "@/app/_components/Section/Section";
import {projects} from "@/app/_assets/data/projects.js"
import Project from "@/app/_components/Projects/_components/Project/Project";

export default function Projects(){
    return(
        <Section>
            <div className='rounded-lg border text-card-foreground shadow-sm p-5 md:mx-0 mx-4 bg-white'>
                <h1 className='text-lg font-bold py-4'>Selected project</h1>
                <ul>
                    {projects.map(
                        (project, idx) => <Project key={idx} data={project}/>
                    )}
                </ul>
            </div>
        </Section>
)
}