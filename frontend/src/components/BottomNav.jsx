import { NavLink } from "react-router-dom";

export default function BottomNav() {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/tracker", label: "Tracker" },
    { path: "/profile", label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-inner flex justify-around border-t border-gray-200 py-2 z-50">
      {navItems.map(({ path, label }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            isActive
              ? "text-green-600 font-bold"
              : "text-gray-500 hover:text-green-600"
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
