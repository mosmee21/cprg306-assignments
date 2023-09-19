import Link from "next/link";

export default function StudentInfo() {
    return (
        <div>
            <p className="text-center">Name: Mausami Desai</p>
            <p className="text-center">Course section: CPRG306 A</p>
            <Link href ="https://github.com/mosmee21/cprg306-assignments.git">https://github.com</Link>
        </div>
    )
}