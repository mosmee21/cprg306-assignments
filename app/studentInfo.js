import Link from "next/link";

export default function StudentInfo() {
    return (
        <div className="text-center font-bold text-xl text-pink-900 font-bold" >
            <p> Name: Mausami Desai </p>
            <p> Course Section: CPRG306 A </p>
            <Link href ="https://github.com/mosmee21/cprg306-assignments.git">https://github.com</Link>
        </div>
    )
}