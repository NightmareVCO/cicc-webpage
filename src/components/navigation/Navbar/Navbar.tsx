import NavbarItemsRender from "@components/Navigation/Navbar/components/NavbarItems/NavbarItemsRender/NavbarItemRender";
import ResponsiveButton from "@components/Navigation/Navbar/components/ResponsiveButton/ResponsiveButton";
import { useNavbar } from "./useNavbar";

import links from '@data/navbar.data';

export default function Navbar() {
  const { navbarRef, isMenuOpen, setIsMenuOpen } = useNavbar();

  return (
    <nav
      ref={navbarRef}
      id="navbar"
      className="fixed top-0 z-50 w-dvw bg-accent md:bg-accent/30"
    >
      <div className="flex flex-wrap items-center justify-center max-w-screen-xl p-6 mx-auto">
        <a href="/#inicio" className="md:hidden">
            <img
              src="/favicon.webp"
              alt="Hero image"
              className="size-12 md:size-52 md:hidden"
              loading="lazy"
              width={200}
              height={200}
              />
          </a>
        <ResponsiveButton isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        <NavbarItemsRender links={links} isMenuOpen={isMenuOpen} />
      </div>
    </nav>
  );
}