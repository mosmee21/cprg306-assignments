import Link from "next/link";
import StudentInfo from "./studentInfo";

export default function page() {
  return (
      <div className="text-center">
        <h1 className="font-bold , text-xl mt-10 mb-10" >CPRG 306: Web Development 2 - Assignments</h1>
        <StudentInfo/>
        <Link href="./week2">week 2</Link>
        <Link href="./week3">week 3</Link>
      </div>
  )
}

