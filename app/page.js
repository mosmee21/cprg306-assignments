import Link from "next/link";
import StudentInfo from "./studentInfo";

export default function page() {
  return (
      <div>
        <h1 className="font-bold , text-lg" >CPRG 306: Web Development 2 - Assignments</h1>
        <StudentInfo/>
        <Link href="./week2">week 2</Link>
      </div>
  )
}

