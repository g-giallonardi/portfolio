import {cn} from "@/lib/utils";

export default function Codeblock({className,children}){
    return(
        <span className={cn('font-code bg-muted text-muted-foreground outline outline-1 px-1',className)}>
            {children}
        </span>
    )
}