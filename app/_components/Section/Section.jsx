import {cn} from "@/lib/utils";

export default function Section({children, className}){
    return (
        <section className={cn('max-w-6xl grow', className)}>
            {children}
        </section>
    );
}