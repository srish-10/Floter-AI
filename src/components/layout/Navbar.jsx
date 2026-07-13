import { useState } from "react";
import navigation from "../../data/navigation";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () =>
        setIsMenuOpen((prev) => !prev);

    const closeMenu = () =>
        setIsMenuOpen(false);

    return (
        <header className="sticky top-0 z-50 bg-gradient-to-r from-[#1e293b] via-[#768fd6] to-[#1e293b] shadow-2xl border-b border-blue-500/20"
>
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                <div className="text-2xl font-bold text-blue-600 cursor-pointer">
                    <a href="#">LOGO</a>

                </div>


                <div className="hidden md:flex items-center gap-10">
                    {navigation.map((item) => (
                        <NavLink key={item.id} {...item} isMobile={false}/>
                    ))}
                </div>

                {/* Mobile Button */}

                <button
                    onClick={toggleMenu}
                    className="md:hidden flex flex-col gap-1 "
                    aria-label="Toggle Menu"
                >
                    <span
                        className={`h-0.5 w-6 bg-white  transition-all ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
                    />

                    <span className={`h-0.5 w-6 bg-white  transition-all ${isMenuOpen ? "opacity-0" : ""}`} />
                    <span className={`h-0.5 w-6 bg-white   transition-all ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""} `} />
                </button>
            </nav>

            <MobileMenu
                isOpen={isMenuOpen}
                closeMenu={closeMenu}
            />
        </header>
    );
};

export default Navbar;