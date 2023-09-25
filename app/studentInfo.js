import Link from "next/link";

export default function StudentInfo() {
    return (
        <div className="text-center  bg-yellow-500 m-6 p-4" >
            <p> Name: Mausami Desai </p>
            <p> Course Section: CPRG306 A </p>
            <Link href ="https://github.com/mosmee21/cprg306-assignments.git">https://github.com</Link>
            <a className="custom-link">https://github.com</a>
            
        </div>
    )
}