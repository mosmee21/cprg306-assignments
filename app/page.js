import Link from "next/link";
import StudentInfo from "./studentInfo";

export default function page() {
  return (
      <div className=" min-h-screen text-center text-violet-900 bg-gradient-to-r from-lime-500 to-cyan-500 p-10 m-10 rounded-lg font-bold ">
        <h1 className="text-2xl xt-decoration-line: underline mt-10 mb-10 " >CPRG 306: Web Development 2 - Assignments</h1>
        <StudentInfo/><br></br>
        <Link href="./week2"className="hover:text-white">Week 2</Link><br/>
        <Link href="./week3"className="hover:text-white">Week 3</Link><br/>
        <Link href="./week4"className="hover:text-white">Week 4</Link><br/>
        <Link href="./week5"className="hover:text-white">Week 5</Link><br/>
        <Link href="./week6"className="hover:text-white">Week 6</Link><br/>
        <Link href="./week7"className="hover:text-white">Week 7</Link>
      </div>
  );
}

