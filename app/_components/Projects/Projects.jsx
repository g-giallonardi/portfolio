import Section from "@/app/_components/Section/Section";
import {projects} from "@/app/_assets/data/projects.js"
import Project from "@/app/_components/Projects/_components/Project/Project";

export default function Projects(){
    return(
        <Section>
            <div className='rounded-lg border bg-card text-card-foreground shadow-sm p-5 backdrop-blur-sm bg-white/70'>
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