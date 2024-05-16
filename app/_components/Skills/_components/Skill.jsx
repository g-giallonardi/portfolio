import ReactIcon from "@/app/_components/icons/ReactIcon";
import NextjsIcon from "@/app/_components/icons/NextjsIcon";

export default function Skill(props) {
    return (
        <div className='flex items-center gap-2'><props.icon size={16} className='mr-5'/>{props.label}</div>
    )
}