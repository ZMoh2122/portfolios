import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Profile", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Achievements", path: "/achievements" },
  { name: "Hobbies", path: "/hobbies" },
  { name: "Blog", path: "/blog" },
];

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">My Portfolio</h1>
        <div className="flex gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-600 hover:text-indigo-500"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
