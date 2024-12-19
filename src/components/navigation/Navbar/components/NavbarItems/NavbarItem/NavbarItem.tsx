import { useNavbarItem } from "@components/Navigation/Navbar/components/NavbarItems/NavbarItem/useNavbarItem";

import type { Link } from "@data/navbar.data";

export type NavbarItemProps = {
  link: Link;
}

export default function NavbarItem({ link }: NavbarItemProps) {
  const { liClasses, aClasses, handleClick } = useNavbarItem({ link });

  return (
    <li className={liClasses}>
      <a id="link" href={link.href} className={aClasses} onClick={handleClick}>
        {link.text}
      </a>
    </li>
  );
}