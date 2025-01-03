interface ResponsiveButtonProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function ResponsiveButton({ isOpen, setIsOpen }: ResponsiveButtonProps) {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-white transition-transform rounded-lg lg:hidden hover:scale-110"
      aria-controls="navbar-default"
      aria-expanded={isOpen}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="sr-only">Abrir menú principal</span>
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
  );
}

