'use client'
import Link from "next/link"
import Image from "next/image"
// import Logo from '../../../public/Logo-INA-Icon.png'

export default function Hero() {
    return (
        <section className="warpper bg-[url('/bg-pattern.jpg')] bg-cover bg-opacity-15" id="beranda" >
            <div className="flex flex-col bg-white/95 h-[90vh] justify-center items-center">
                <div className="px-6 text-center mt-[-4em] md:mt-[-2em]">
                    {/* <Link href="/" className='flex justify-center items-center font-bold text-xl tracking-[-6px] text-white tracking-tighter'>
                        <Image src={Logo} width={150} height={100} alt="Logo LPK Indonesia Nippon Anugerah" />
                    </Link> */}
                    <h1 className="texts-secondary font-bold my-6 w-full leading-snug !text-2xl lg:max-w-4xl lg:!text-6xl">
                        Mulai karir barumu di Jepang bersama <span className="text-primary">LPK Kizuna</span> 
                    </h1>
                    <p className="mx-auto my-6 w-full text-grey lg:max-w-3xl">
                        Dengan Kizuna Nippon, bukan hanya sekadar bekerja di Jepang, 
                        tetapi membuka jalan bagi karier yang gemilang. Temukan pelatihan 
                        terbaik, koneksi yang luas, dan dukungan penuh untuk mewujudkan 
                        impian karier Anda di negeri Matahari Terbit
                    </p>
                    <button 
                        className="relative rounded-xl px-6 py-2 overflow-hidden bg-primary border border-secondary text-white transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-secondary before:duration-300 before:ease-out hover:text-white hover:shadow-primary hover:before:h-40 hover:before:w-40 hover:before:opacity-80"> 
                        <Link 
                            href="/" 
                            class="relative z-10"
                            onClick={(e) => {
                                setTimeout(() => {
                                document.getElementById("tentang") &&
                                    document
                                    .getElementById("tentang")
                                    .scrollIntoView({ behavior: "smooth"});
                                }, 500)
                                }} 
                        >
                            selengkapnya
                        </Link>
                    </button>
                </div>
            </div>
        </section>
    )
}