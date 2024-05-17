import Section from "@/app/_components/Section/Section";
import MailIcon from "@/app/_components/icons/MailIcon";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function Contact(){

    return(
        <Section
            className='my-4 md:mx-0 mx-4'
        >
            <Button
                className='bg-secondary rounded-xl w-full h-36 shadow-md ring-offset-2 ring-2 ring-accent
                bg-gradient-to-r from-fuchsia-200 to-yellow-200 outline outline-1 outline-primary
                [background-size:200%_200%]
                hover:[background-size:100%_200%]
                motion-safe:transition-all motion-safe:duration-200'
                asChild
            >
                <Link
                    href='mailto:g.giallonardi@gmail.com?subject=Hey Guillaume!'
                    target='_blank'
                >
                    <div className='flex flex-row justify-between w-full'>
                        <div className='flex flex-col w-full ml-9 sm:ml-24 lg:ml-48'>
                            <div className='text-lg md:text-xl font-bold text-primary'>Want to contact me?</div>
                            <div className=' ml-3 md:ml-9 text-md md:text-lg font-bold text-primary'>... just in one click!</div>
                        </div>
                        <div className='text-primary animate-float mr-24'><MailIcon size={56}/></div>
                    </div>
                </Link>
            </Button>

        </Section>
    )
}