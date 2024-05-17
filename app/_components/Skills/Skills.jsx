import Section from "@/app/_components/Section/Section";
import ReactIcon from "@/app/_components/icons/ReactIcon";
import DjangoIcon from "@/app/_components/icons/DjangoIcon";
import FastapiIcon from "@/app/_components/icons/FastapiIcon";
import ExpressjsIcon from "@/app/_components/icons/ExpresjsIcon";
import NextjsIcon from "@/app/_components/icons/NextjsIcon";
import TailwindIcon from "@/app/_components/icons/TailwindIcon";
import MaterialuiIcon from "@/app/_components/icons/MaterialuiIcon";
import BootstrapIcon from "@/app/_components/icons/BootstrapIcon";
import PythonIcon from "@/app/_components/icons/PythonIcon";
import JavascriptIcon from "@/app/_components/icons/JavascriptIcon";
import OpenaiIcon from "@/app/_components/icons/OpenaiIcon";
import Skill from "@/app/_components/Skills/_components/Skill";

export default function Skills(){
    return(
        <Section className='flex flex-col my-4 md:mx-0 mx-4'>
            <div className='text-xl font-bold my-3 '>
                My main skills
            </div>
            <div className='flex flex-col md:flex-row md:justify-evenly justify-items-center'>
                <div className='flex flex-col items-center mb-5'>
                    <h3 className='text-lg font-bold mb-2'>Backend</h3>
                    <ul>
                        <Skill label='Django'  icon={DjangoIcon} />
                        <Skill label='FastAPI' icon={FastapiIcon} />
                        <Skill label='Express.js' icon={ExpressjsIcon} />
                    </ul>
                </div>
                <div className='flex flex-col items-center mb-5'>
                    <h3 className='text-lg font-bold mb-2'>Frontend</h3>
                    <ul>
                        <Skill label='React' icon={ReactIcon} />
                        <Skill label='React' icon={NextjsIcon} />
                    </ul>
                </div>
                <div className='flex flex-col items-center mb-5'>
                    <h3 className='text-lg font-bold mb-2'>CSS</h3>
                    <ul>
                        <Skill label='TailwindCSS' icon={TailwindIcon} />
                        <Skill label='Material.UI' icon={MaterialuiIcon} />
                        <Skill label='BootStrap' icon={BootstrapIcon} />
                    </ul>
                </div>
                <div className='flex flex-col items-center mb-5'>
                    <h3 className='text-lg font-bold mb-2'>Language</h3>
                    <ul>
                        <Skill label='Python' icon={PythonIcon} />
                        <Skill label='JavaScript' icon={JavascriptIcon} />
                    </ul>
                </div>
                <div className='flex flex-col items-center mb-5'>
                    <h3 className='text-lg font-bold mb-2'>Misc.</h3>
                    <ul>
                        <Skill label='OpenAI' icon={OpenaiIcon} />
                    </ul>
                </div>
            </div>
        </Section>
    )
}