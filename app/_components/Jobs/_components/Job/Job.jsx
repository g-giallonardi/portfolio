import {Button} from "@/components/ui/button";
import Link from "next/link";
import DashboardIcon from "@/app/_components/icons/DashboardIcon";
import JobIcon from "@/app/_components/icons/JobIcon";

export default function Job({data:job}){

    return(
        <div className='flex flex-row items-center gap-2 mb-3'>
            <div >
                <h2 className='font-bold text '>
                    {job.enterprise}
                    <span className='text-xs font-light px-1'>{job.date[0]} →{job.date[1]}</span>
                </h2>
                <span className='text-xs pl-3'>{job.description}</span>
            </div>
        </div>
    )
}