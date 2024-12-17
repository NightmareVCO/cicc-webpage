import type { Link } from "@config/navigationLinks";
import { useNavbarItem } from "./useNavbarItem";

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