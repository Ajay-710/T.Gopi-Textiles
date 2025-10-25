import { navLinks } from "@/constants";

interface HeaderProps {
  onLoginClick: () => void;
}

const Header = ({ onLoginClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10">
      <nav className="container flex items-center justify-between py-5">
        {/*
          --- THIS IS THE CORRECTED PART ---
          - Changed `text-white` to `text-gradient-silk`.
          - This will apply the red/pink gradient to the logo text.
        */}
        <div
          onClick={onLoginClick}
          className="text-2xl font-bold tracking-tighter cursor-pointer text-gradient-silk"
        >
          T.Gopi Textiles
        </div>

        <ul className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="font-medium text-white transition-smooth hover:text-gradient-silk"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
