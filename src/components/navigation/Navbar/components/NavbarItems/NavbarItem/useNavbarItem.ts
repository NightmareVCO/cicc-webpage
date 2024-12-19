import { useEffect, useState } from "react";

import type { NavbarItemProps } from "./NavbarItem";

export function useNavbarItem({ link }: NavbarItemProps) {
  const [liClasses, setLiClasses] = useState("");
  const [aClasses, setAClasses] = useState("");
  const [location, setLocation] = useState(window.location.pathname + window.location.hash);

  const updateClasses = () => {
    let currentPath = window.location.pathname + window.location.hash;
    setLocation(currentPath);
    const isActive = link.href === currentPath ||
                    (currentPath === "/" && link.href === "/#inicio") ||
                    (currentPath.slice(2) === link.href.slice(2));

    setLiClasses(isActive ? "bg-secondary text-white rounded-full shadow" : "");
    setAClasses(
      isActive
        ? "block px-3 py-1 transition-colors text-white"
        : "block px-3 py-1 transition-all hover:text-secondary text-white md:hover:text-secondary md:hover:mt-[-3px]"
    );
  };

  useEffect(() => {
    updateClasses();
    window.addEventListener('hashchange', updateClasses);
    window.addEventListener('popstate', updateClasses);

    return () => {
      window.removeEventListener('hashchange', updateClasses);
      window.removeEventListener('popstate', updateClasses);
    };
  }, [link.href, location]);

  const handleClick = () => {
    setTimeout(updateClasses, 0);
  };

  return { liClasses, aClasses, handleClick };
}
