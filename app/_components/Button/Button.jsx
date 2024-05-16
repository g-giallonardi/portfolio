import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function PButton(props){
    return(
        <Button
            className={`outline outline-1 rounded-sm px-3 py-1 bg-${props.variant} text-${props.variant}-foreground inline-flex items-center hover:bg-${props.variant} hover:ring-2 hover:ring-offset-2 transition-colors`}
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