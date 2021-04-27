import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const links = [
  { url: "/profile", name: "Profile" },
  { url: "/dialogs", name: "Messages" },
  { url: "/Users", name: "Users" },
  { url: "/login", name: "Login" },
];

const Navbar = () => {
  return (
    <nav className={s.nav}>
      {links.map((el) => (
        <div className={s.item} key={el.url}>
          <NavLink to={el.url} activeClassName={s.activeLink}>
            {el.name}
          </NavLink>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
