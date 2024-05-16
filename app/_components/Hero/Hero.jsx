
import Splash from "@/app/_components/Hero/_components/Splash/Splash";
import Portrait from "@/app/_components/Hero/_components/Portrait/Portrait";
import Section from "@/app/_components/Section/Section";

export default function Hero(){

    return(
        <Section className='mt-36 mb-20 flex justify-evenly
        backdrop-blur '>
                <Splash />
                <Portrait />
        </Section>
    )
}