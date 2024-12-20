import { useEffect, useRef, useState } from 'react';

export function useNavbar() {
  const navbarRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        navbarRef.current?.classList.add("lg:bg-accent");
        navbarRef.current?.classList.remove("lg:bg-accent/30");
      } else {
        navbarRef.current?.classList.add("lg:bg-accent/30");
        navbarRef.current?.classList.remove("lg:bg-accent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { navbarRef, isMenuOpen, setIsMenuOpen };
}