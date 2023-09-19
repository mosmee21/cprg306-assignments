import Link from "next/link";
import StudentInfo from "./studentInfo";

export default function page() {
  return (
      <main>
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
        <StudentInfo/>
        <Link href="./week2">week 2</Link>
      </main>
  )
}

