import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { FaBars } from "react-icons/fa"

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <nav className="navigation bg-gray-700 sticky top-0">
    <Link href="/" className="brand-name flex flex-col flex-shrink-0 items-center">
      <Image width={50} height={50} className="block h-8 w-auto" src="/images/raccoonImage.jpeg" alt="speelplein" />
      <span className="text-gray-200 text-lg">Speelplein Raccoon</span>
    </Link>
    <button
      className="hamburger"
      onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
    >
      {/* icon from heroicons.com */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="white"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    </button>
    <div
      className={
        isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
      }>
      <ul className="bg-gray-700 text-slate-50">
        <li className="tablet:hover:text-gray-700"
          onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}>
          <Link className="block w-full no-underline" href="/">KinderList</Link>
        </li>
        <li className="tablet:hover:text-gray-700"
          onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}>
          <Link className="block w-full no-underline" href="/CreateData">Kind Toevoeren</Link>
        </li>
        <li className="tablet:hover:text-gray-700"
          onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}>
          <Link className="block w-full no-underline" href="/StatsData">Dagelijkse Registratie</Link>
        </li>
        <li className="tablet:hover:text-gray-700"
          onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}>
          <Link className="block w-full no-underline" href="/LegalStats">Statistieken Bekijken</Link>
        </li>
      </ul>
    </div>
  </nav>

    // <nav className="bg-gray-800 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
    //   <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    //     <div className="relative flex h-24 items-center justify-between">
    //         <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    //             <button
    //                 data-collapse-toggle="mobile-menu"
    //                 aria-controls="mobile-menu"
    //                 aria-expanded="false" type="button"
    //                 className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
    //             >
    //                 <span class="sr-only">Open main menu</span>
    //                 <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    //             </button>
    //         </div>
    //         <div id='mobile-menu' className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
    //             <div className="flex flex-col flex-shrink-0 items-center">
    //                 <Image width={50} height={50} className="block h-8 w-auto" src="/images/raccoonImage.jpeg" alt="speelplein" />
    //                 <span className="text-gray-200 text-lg">Speelplein Raccoon</span>
    //             </div>
    //             <div className="hidden sm:ml-6 sm:block">
    //                 <div className="flex space-x-4">
    //                     <Link href="/" className="bg-gray-900 text-white rounded-md px-5 py-2 text-xl font-semibold" aria-current="page">KinderList</Link>
    //                     <Link href="/CreateData" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-5 py-2 text-xl font-semibold">Kind Toevoeren</Link>
    //                     <Link href="/StatsData" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-5 py-2 text-xl font-semibold">Dagelijkse Registraties</Link>
    //                     <Link href="/LegalStats" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-5 py-2 text-xl font-semibold">Statistieken Bekijken</Link>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //   </div>
    // </nav>
  )
}

export default Navbar
