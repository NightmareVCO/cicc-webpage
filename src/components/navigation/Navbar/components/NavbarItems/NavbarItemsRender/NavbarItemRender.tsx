import NavbarItem from "@components/Navigation/Navbar/components/NavbarItems/NavbarItem/NavbarItem";

import type { Link } from "@data/navbar.data";

export type NavbarItemRenderProps = {
  links: Link[];
  isMenuOpen: boolean;
}

export default function NavbarItemRender({ links, isMenuOpen }: NavbarItemRenderProps) {
  return (
    <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 font-medium rounded-lg md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
        {links.map((link, index) => <NavbarItem link={link} key={index} />)}
      </ul>
    </div>
  );
}

