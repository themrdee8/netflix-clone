import { useCallback, useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import NavbarItem from "./navbaritem";
import { HiOutlineChevronDown } from "react-icons/hi";
import { BsSearch, BsBell } from "react-icons/bs";
import AccountMenu from "./AccountMenu";

const TOP_OFFSET = 66;

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current);
    }, [])

    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((current) => !current);
    }, []);

  return (
    <nav className="w-full fixed z-40">
        <div className={`px-4 md:px-16 py-6 flex flex-row items-center duration-500 transition ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}`}>
            <img src="/images/logo.png" alt="Netflix logo" className="h-5 lg:h-7" />
            <div className="lg:flex flex-row hidden ml-8 gap-7">
                <NavbarItem label="Home" />
                <NavbarItem label="Tv Shows" />
                <NavbarItem label="Movies" />
                <NavbarItem label="Latest" />
                <NavbarItem label="My Lists" />
                <NavbarItem label="Browse by Languages" />
            </div>
            <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                <p className="text-white text-sm">Browse</p>
                <HiOutlineChevronDown className={`text-white transition duration-500 ${showMobileMenu ? 'rotate-180' : 'rotate-0' }`} />
                <MobileMenu visible={showMobileMenu} />
            </div>
            <div className="flex flex-row ml-auto items-center gap-7">
                <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                    <BsSearch />
                </div>
                <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                    <BsBell />
                </div>
                <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
                    <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                        <img src="/images/default-slate.png" alt="Profile image" />
                    </div>
                    <HiOutlineChevronDown className={`text-white transition duration-500 ${showAccountMenu ? 'rotate-180' : 'rotate-0' }`} />
                    <AccountMenu visible={showAccountMenu} />
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar