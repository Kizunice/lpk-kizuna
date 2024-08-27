'use client'
import Link from "next/link"
import Image from "next/image"
import React from "react"
import {
    RiFacebookCircleFill,
    RiYoutubeFill,
    RiTiktokFill,
    RiMapPinLine,
    RiMessage2Line,
    RiPhoneLine,
    RiInstagramFill
} from "react-icons/ri"
import Logo from '../../../public/logo-kizunice-white.png'

export default function Footer() {
    return (
        <footer className="bg-secondary" id="kontak">
            <div className="max-w-[78rem] mx-auto px-8 py-12 lg:pt-12">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    <div>
                        <div className="flex justify-start text-left ">
                            <Link href={"/"}>
                                <Image src={Logo} width={140}  height={100} alt="Logo INA" />
                            </Link>
                        </div>

                        <p className="mt-6 max-w-md text-left leading-relaxed text-gray-100 text-[13px] sm:max-w-xs ">
                        Kizuna Indonesia Nippon adalah lembaga pelatihan yang didedikasikan untuk membantu para pencari kerja mewujudkan impian mereka bekerja di Jepang. . 🇮🇩🇯🇵
                        </p>

                        <ul className="mt-4 md:mt-6 flex justify-start gap-4 md:gap-6">
                            <li>
                                <Link href="https://www.facebook.com/lpkkizunanippon/" target="_blank">
                                    <RiFacebookCircleFill
                                        fontSize={26}
                                        className="text-white transition hover:text-white/75"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.youtube.com/@LPKKizunaNippon" target="_blank">
                                    <RiYoutubeFill
                                        fontSize={26}
                                        className="text-white transition hover:text-white/75"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.instagram.com/lpkkizunanippon/" target="_blank">
                                    <RiInstagramFill
                                        fontSize={26}
                                        className="text-white transition hover:text-white/75"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.tiktok.com/@lpk.kizuna" target="_blank">
                                    <RiTiktokFill
                                        fontSize={26}
                                        className="text-white transition hover:text-white/75"
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-1">
                        <div className="text-left">
                            <p className="text-lg font-medium text-white">Menu</p>

                            <ul className="mt-4 md:mt-8 space-y-4 text-sm">
                                <li>
                                    <Link className="text-gray-100 transition hover:text-gray-100/75" href="/#tentang">
                                        Tentang Kizuna
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-gray-100 transition hover:text-gray-100/75" href="/#program">
                                        Program Kami
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-gray-100 transition hover:text-gray-100/75" href="/#facility">
                                        Fasilitas LPK
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-gray-100 transition hover:text-gray-100/75" href="/" target="_blank">
                                        Link Pendaftaran
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-left">
                            <p className="text-lg font-medium text-white">Kontak Kami</p>

                            <ul className="mt-4 md:mt-8 space-y-4 text-sm">
                                <li>
                                    <Link
                                        className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                        href="/"
                                        target="_blank"
                                    >
                                        <RiMessage2Line fontSize={18} className="text-gray-100" />

                                        <span className="flex-1 text-gray-100">lpkkizunanippon@gmail.com</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                        href="https://wa.link/r8mojx"
                                        target="_blank"
                                    >
                                        <RiPhoneLine fontSize={18} className="text-gray-100" />
                                        <span className="flex-1 text-gray-100">0813 8430 4152</span>
                                    </Link>
                                </li>

                                <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                                    <RiMapPinLine fontSize={18} className="text-gray-100"/>

                                    <address className="-mt-0.5 flex-1 not-italic text-gray-100">
                                        Jl. Gongseng Raya No.2-4, RT.7/RW.10, Kel. Cijantung, Kec. Ps. Rebo, 
                                        Kota Jakarta Timur 13770
                                    </address>
                                </li>
                            </ul>
                        </div>
                </div>

                <div className="mt-10 border-t border-gray-300 pt-6">
                    <div className="text-center ">
                        <p className="mt-2 text-sm text-gray-200 sm:order-first sm:mt-0">Copyright &copy; 2024 kizunice.com</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}