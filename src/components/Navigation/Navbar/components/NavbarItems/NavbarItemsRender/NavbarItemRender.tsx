import NavbarItem from "@components/Navigation/Navbar/components/NavbarItems/NavbarItem/NavbarItem";

import type { Link } from "@data/navbar.data";

export type NavbarItemRenderProps = {
  links: Link[];
  isMenuOpen: boolean;
}

export default function NavbarItemRender({ links, isMenuOpen }: NavbarItemRenderProps) {
  return (
    <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full lg:block lg:w-auto`} id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 font-medium rounded-lg lg:p-0 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0">
        {links.map((link, index) => <NavbarItem link={link} key={index} />)}
      </ul>
    </div>
  );
}

