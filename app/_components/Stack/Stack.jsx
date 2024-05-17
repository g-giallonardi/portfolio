import Section from "@/app/_components/Section/Section";
import ReactIcon from "@/app/_components/icons/ReactIcon";
import DjangoIcon from "@/app/_components/icons/DjangoIcon";
import TailwindIcon from "@/app/_components/icons/TailwindIcon";
import Codeblock from "@/app/_components/Codeblock/Codeblock";

export default function Stack(){
    return(
        <Section className='flex flex-col my-4 md:mx-0 mx-4'>
            <div className='flex flex-row text-xl font-bold my-3'>
                My
                <div className='animate-bounce mx-2'>💜</div>
                technical stack
            </div>
            <div className='flex flex-col md:flex-row justify-evenly '>
                <div className='flex flex-col basis-1/6 items-center '>
                    <div className='font-bold text-lg mb-5'>
                        Backend
                    </div>
                    <div className='text-slate-700 mb-5'>
                        <DjangoIcon size={150}/>
                    </div>
                    <div className='text-justify md:mx-4 md:w-full w-1/2 text-sm'>
                        <Codeblock className='mr-2'>Django</Codeblock>
                        is dear to me due to my strong experience in Python, but
                        <Codeblock className='mx-2'>Express.js</Codeblock> remains a
                        pretty great alternative.
                    </div>
                </div>
                <div className='flex flex-col basis-1/6 items-center'>
                    <div className='font-bold text-lg mb-5'>
                        Frontend
                    </div>
                    <div className='text-gray-700 mb-5'>
                        <ReactIcon size={150}/>
                    </div>
                    <div className='text-justify text-sm md:mx-4 md:w-full w-1/2'>
                        <Codeblock className='mr-2'>React</Codeblock> managed to
                        impress me several years ago but...
                        <Codeblock className='mx-2'>Next.js</Codeblock>
                        is starting to make its way into my tech stack.
                    </div>
                </div>
                <div className='flex flex-col  basis-1/6 items-center'>
                    <div className='font-bold text-lg mb-5'>
                        Design
                    </div>
                    <div className='text-gray-700 mb-5'>
                        <TailwindIcon size={150}/>
                    </div>
                    <div className='text-justify text-sm md:mx-4 md:w-full w-1/2'>
                        Not using any CSS framework for several years,
                        <Codeblock className='mx-2'>TailwindCSS</Codeblock>
                        has now become essential in my stack.
                    </div>
                </div>
            </div>
        </Section>
    )
}