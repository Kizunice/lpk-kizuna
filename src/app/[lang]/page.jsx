import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import Hero from "@/components/landing/hero"
import About from "@/components/landing/about"
import Program from "@/components/landing/program"
// import Facility from "@/components/landing/facility"
import { getDictionary } from "../dictionaries";

export default async function Home({params}) {
  const {hero, about, program, header, footer } = await getDictionary(params.lang); 
  return (
    <>
    <Header props={header}/>
     <div className="container">
      <Hero props={hero}/>
      <About props={about} />
      <Program props={program} />
      {/* <Facility/> */}
    </div>
    <Footer props={footer}/>
    </>
  )
}
