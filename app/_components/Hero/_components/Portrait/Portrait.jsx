import Section from "@/app/_components/Section/Section";
import Image from "next/image";
import portrait from '../../../../_assets/images/portrait.png'

export default function Portrait(){
    return(
        <div className='flex max-w-xs rounded-full
        bg-gradient-to-r from-primary/50 to-primary-foreground/50
        [background-position:0_90%]
        translate-x-12 translate-y-12
        '
        >
            <Image
                src={portrait}
                alt={`Guillaume Giallonardi's portrait`}
                className='w-full object-scale-down min-w-64 w-64
                rounded-full ring-2 ring-offset-4 ring-accent
                -translate-x-12 -translate-y-12
                '
            />
        </div>
    )
}