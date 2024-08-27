'use client'
import Image from "next/image"
export default function About() {
    return (
        <section className="lg:max-w-[80rem] mx-auto py-[4rem] lg:py-[6rem]" id="tentang" >
            <div className="flex flex-col lg:flex-row justify-center items-center">
                <div className="px-8 text-center">
                    <Image src="/about-banner.png" width={450} height={450} alt="Kizunice Academy" className="rounded-l-3xl" />
                </div>
                <div className="px-8 text-left lg:px-14 lg:max-w-2xl lg:mt-[-4em] md:mt-[-2em]">
                    <h1 className="text-primary font-semibold my-6 w-full leading-snug !text-4xl lg:max-w-4xl lg:!text-7xl">
                        <span className="text-secondary">Tentang</span>  Kizuna
                    </h1>
                    <p className="mx-auto my-6 w-full text-grey ">
                    <span className="font-bold">LPK PT Kizuna Indonesia Nippon</span> adalah lembaga pelatihan 
                    yang didedikasikan untuk membantu para pencari kerja mewujudkan impian mereka bekerja di Jepang. 
                    Dengan fokus pada kualitas dan pelayanan, kami berkomitmen untuk memberikan pengalaman yang 
                    memuaskan kepada setiap mitra kami.
                    </p>
                </div>
            </div>
        </section>
    )
}