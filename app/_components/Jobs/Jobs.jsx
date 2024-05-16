import Section from "@/app/_components/Section/Section";
import {jobs} from "@/app/_assets/data/jobs.js"
import Job from "@/app/_components/Jobs/_components/Job/Job";

export default function Jobs(){
    return(
        <Section>
            <div className='rounded-lg border bg-card text-card-foreground shadow-sm p-5 backdrop-blur-sm bg-white/70'>
                <h1 className='text-lg font-bold py-4'>Last jobs</h1>
                <ul>
                    {jobs.map(
                        (job, idx) => <Job key={idx} data={job}/>
                    )}
                </ul>
            </div>
        </Section>
    )
}