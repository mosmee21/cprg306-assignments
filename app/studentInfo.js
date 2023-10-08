import Link from "next/link";

export default function StudentInfo() {
    return (
        <div className="text-center text-blue-500 font-bold" >
            <p> Name: Mausami Desai </p>
            <p> Course Section: CPRG306 A </p>
            <Link href ="https://github.com/mosmee21/cprg306-assignments.git">https://github.com</Link>
        </div>
    )
}