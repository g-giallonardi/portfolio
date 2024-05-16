import Section from "@/app/_components/Section/Section";
import GithubIcon from "@/app/_components/icons/GithubIcon";
import {Button, buttonVariants} from "@/components/ui/button";
import Link from 'next/link'
import LinkedInIcon from "@/app/_components/icons/LinkedInIcon";
import {cn} from "@/lib/utils";

export default function Header(){
    return (
        <header className={`sticky top-0 shadow-md py-4 z-10 bg-background`}>
            <Section className='flex flex-row' >
                <h1 className={`text-lg font-bold text-primary`}>Guillaume GIALLONARDI</h1>
                {/*<div className={'flex-1'}>*/}
                {/*    <ul className={`flex justify-end`}>*/}
                {/*        <Button className={'size-6 outline outline-1 rounded-sm px-3 py-1 text-foreground inline-flex items-center hover:bg-primary transition-colors'} variant='outline' asChild>*/}
                {/*            <Link*/}
                {/*            href="https://github.com/g-giallonardi"*/}
                {/*            target="_blank"*/}
                {/*            >*/}
                {/*                <GithubIcon size={16} className={`text-foreground`}/>*/}
                {/*            </Link>*/}
                {/*        </Button>*/}

                {/*        <Button className={'size-6 '} variant='outline' asChild>*/}
                {/*            <Link*/}
                {/*                className={cn(buttonVariants({variant:'outline'}), 'size-6 p-0')}*/}
                {/*                href="https://www.linkedin.com/in/guillaume-giallonardi-27683919"*/}
                {/*                target="_blank"*/}
                {/*            >*/}
                {/*                <LinkedInIcon size={16} className={`text-foreground`}/>*/}
                {/*            </Link>*/}
                {/*        </Button>*/}
                {/*    </ul>*/}
                {/*</div>*/}
            </Section>
        </header>
    )
}