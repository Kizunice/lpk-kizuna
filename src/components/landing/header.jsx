'use client'
import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link"
import Image from "next/image"
import Logo from '../../../public/logo-kizunice.png'

export default function Header({props}) {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = React.useState("id");
  const [selectedLang, setSelectedLang] = React.useState("Indonesia");
  const lang = pathname?.split("/").at(1);

  const langs = [
    { lang: "id", fullName: "Indonesia", shortName: "ID" },
    { lang: "jp", fullName: "Japanese", shortName: "JP" },
  ];

  React.useEffect(() => {
    const currentLang = langs.find((l) => l.lang === lang);
    console.log(currentLang)
    if (currentLang) {
      setCurrentLang(currentLang.lang);
      setSelectedLang(currentLang.fullName);
    }

    if (!currentLang) {
      setCurrentLang("en");
      setSelectedLang("English");
    }
  }, []);

  function handleLangChange(e){
    const lang = e.target.value
    const language = lang ? "/" + lang : "/id";
    router.push(`${language}`);
  }

  return (
      <nav className="navbar sticky bg-white px-4 h-[80px] lg:px-20 3xl:px-0 z-30">
        <div className="navbar-start">
            <Link href={`/${lang}`}  className='flex justify-center items-center font-bold text-xl tracking-[-6px] text-white tracking-tighter'>
                <Image src={Logo} width={150} height={100} alt="Logo LPK Kizuna Indonesia Nippon" />
            </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 scroll-smooth">
            <li><Link href={`/${lang}`}>{props.link1}</Link></li>
            <li><Link href={`/${lang}/#tentang`}>{props.link2}</Link></li>
            <li><Link href={`/${lang}/#program`}>{props.link3}</Link></li>
            <li><Link href={`/${lang}/#kontak`}>{props.link4}</Link></li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          {/* <select>
            {langs.map((lang) => (
              <option
                key={lang.lang}
                selected={currentLang === lang.lang}
                onChange={() => handleLangChange(lang)}
              >
                {lang.fullName}
              </option>
            ))}
          </select> */}

            <select value={currentLang} onChange={handleLangChange}>
              <option value="id">Indonesia 🇮🇩</option>
              <option value="jp">日本語 🇯🇵</option>
            </select>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-4 gap-4 shadow bg-white rounded-box w-[350px] z-[30]">
              <li><Link href={`/${lang}`} scroll={true}>Beranda</Link></li>
              <li><Link href={`/${lang}/#tentang`} scroll={true}>Tentang Kizuna</Link></li>
              <li><Link href={`/${lang}/#program`} scroll={true}>Program</Link></li>
              <li><Link href={`/${lang}/#kontak`} scroll={true}>Kontak Kami</Link></li>
            </ul>
          </div>
        </div>
    </nav>
  )
}