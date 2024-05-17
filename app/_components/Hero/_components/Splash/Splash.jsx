import GithubIcon from "@/app/_components/icons/GithubIcon";
import LinkedInIcon from "@/app/_components/icons/LinkedInIcon";
import MailIcon from "@/app/_components/icons/MailIcon";
import PButton from "@/app/_components/Button/Button";

export default function Splash(){
    return(
        <div className='flex flex-col '>
                <div className='font-light flex flex-row'>
                    Hi
                    <div className='animate-waving-hand mx-2'>👋🏻</div>
                    , I&apos;m Guillaume
                </div>
            <div className='flex flex-row font-extrabold text-6xl mb-5 mt-3 text-primary'>
                <div
                    className=' mr-3 bg-gradient-to-r from-fuchsia-200 to-yellow-200
                      bg-no-repeat [background-position:0_90%]
                      [background-size:100%_0.5em]
                      motion-safe:transition-all
                      hover:[background-size:100%_100%]
                      focus:[background-size:100%_100%]
                      '
                >
                    FullStack
                </div>
                <div>
                    developer
                </div>
            </div>
            <div className='flex flex-row items-end'>
                <span className='font-bold text-3xl'>building stuff for web</span>
                <span className='font-bold'>, among others</span>
            </div>

            <div className='flex mt-12 gap-3'>
                <PButton href='https://github.com/g-giallonardi' variant='primary'>
                    <GithubIcon size={16}/> <span className='mx-2'>GitHub</span>
                </PButton>
                <PButton href='https://www.linkedin.com/in/guillaume-giallonardi-27683919' variant='secondary'>
                    <LinkedInIcon size={16}/> <span className='mx-2'>LinkedIn</span>
                </PButton>
                <PButton href='mailto:g.giallonardi@gmail.com?subject=Hey Guillaume!' variant='secondary'>
                    <MailIcon size={16}/> <span className='mx-2'>Contact</span>
                </PButton>

            </div>
        </div>
    )
}