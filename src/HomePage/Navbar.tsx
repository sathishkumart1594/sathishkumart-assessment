import { Link } from "react-router-dom";

interface NavbarProps {
  activePage: "home" | "about" | "projects" | "gallery" | "contact";
}

const Navbar = ({ activePage }: NavbarProps) => {
  const menus = [
    { name: "Home", href: "/", key: "home" },
    { name: "About", href: "/about", key: "about" },
    { name: "Projects", href: "/projects", key: "projects" },
    { name: "Gallery", href: "/gallery", key: "gallery" },
    { name: "Contact", href: "/contact", key: "contact" },
  ];

  return (
    <nav className="bg-[#111111] py-8">
      <div className="max-w-6xl mx-auto">
        <ul className="flex justify-center items-center gap-14">
          {menus.map((menu) => (
            <li key={menu.key}>
              <Link to={menu.href} className={`text-sm font-medium transition-colors duration-300 ${
                     activePage === menu.key ? "text-[#D8FF2F]" : "text-white hover:text-[#D8FF2F]"}`}>
                      {menu.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;