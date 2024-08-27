import Link from "next/link"
import Header from "@/components/landing/header"
import Hero from "@/components/landing/hero"
import About from "@/components/landing/about"
import Program from "@/components/landing/program"
// import Facility from "@/components/landing/facility"
export default function Home() {
  return (
    <div className="container">
      <Hero/>
      <About/>
      <Program/>
      {/* <Facility/> */}
    </div>
  )
}
