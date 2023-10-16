import Link from "next/link";
import StudentInfo from "./studentInfo";

export default function page() {
  return (
      <div className=" min-h-screen text-center text-violet-900 bg-gradient-to-r from-lime-500 to-cyan-500 p-10 m-10 rounded-lg font-bold ">
        <h1 className="text-2xl mt-10 mb-10" >CPRG 306: Web Development 2 - Assignments</h1>
        <StudentInfo/><br></br>
        <Link href="./week2">week 2</Link><br></br> 
        <Link href="./week3">week 3</Link><br></br> 
        <Link href="./week4">week 4</Link><br></br>
        <Link href="./week4">week 5</Link><br></br>
        <Link href="./week5">week 6</Link>
      </div>
  )
}

