import Link from "next/link";
import StudentInfo from "./studentInfo";

export default function page() {
  return (
      <div className="text-center">
        <h1 className="font-bold , text-xl" >CPRG 306: Web Development 2 - Assignments</h1>
        <StudentInfo/>
        <Link href="./week2">week 2</Link>
      </div>
  )
}

