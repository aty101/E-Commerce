import { NavLink } from "react-router-dom";

export default function NavButtons({ key, to, children, style }) {
  return (
    <NavLink
      key={key}
      to={to}
      className={({ isActive }) =>
        `${isActive ? "opacity-100" : "opacity-50"} ${style}`
      }
    >
      {children}
    </NavLink>
  );
}
