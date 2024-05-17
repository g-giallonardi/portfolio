import Link from "next/link";
import {Button} from "@/components/ui/button";
import {
    validateGoogleFontFunctionCall
} from "next/dist/compiled/@next/font/dist/google/validate-google-font-function-call";
import props, {variant} from "tailwindcss-highlights/dist/variant";

export default function PButton(props){

    let variantClass=''

    if(variant === 'primary'){
        variantClass=`bg-primary text-primary-foreground hover:bg-${props.variant}`
    }

    return(
        <Button
            className={`outline outline-1 rounded-sm px-3 py-1 bg-${props.variant} text-${props.variant}-foreground inline-flex items-center hover:bg-${props.variant}/70 `}
            asChild
        >
            <Link
                    href={props.href}
                    target="_blank"
            >
                {props.children}
            </Link>
        </Button>
    )
}