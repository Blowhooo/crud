import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default function SectionTitle(props) {
  return (
    <Link href={`/list?category=${props.title}`} className="flex justify-between items-center p-3 rounded-md bg-black">
      <h2 className="tracking-tight text-xl font-bold text-white">
        {props.title}
      </h2> 
      <FaChevronRight className="text-white"/>
    </Link>
  )
}