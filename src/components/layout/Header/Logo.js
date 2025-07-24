import Link from "next/link";

export default function Logo() {
  return (
    <h1>
      <Link href="/" className="bg-black w-8 h-8 text-white flex justify-center items-center text-2xl font-bold rounded-sm">P</Link>
    </h1>
  )
}