import React from "react";
import { NavLink } from "react-router-dom";
import loginNav from "../../assets/loginNav.svg";
import messagesNav from "../../assets/messagesNav.svg";
import profileNav from "../../assets/profileNav.svg";
import usersNav from "../../assets/usersNav.svg";
import s from "./Navbar.module.css";

const links = [
  {
    url: "/profile",
    name: "Profile",
    img: { backgroundImage: `url(${profileNav})` },
  },
  {
    url: "/dialogs",
    name: "Messages",
    img: { backgroundImage: `url(${messagesNav})` },
  },
  {
    url: "/Users",
    name: "Users",
    img: { backgroundImage: `url(${usersNav})` },
  },
  {
    url: "/login",
    name: "Login",
    img: { backgroundImage: `url(${loginNav})` },
  },
];
const Navbar = () => {
  return (
    <nav className={s.nav}>
      {links.map((el) => (
        <div className={s.itemContainer} key={el.url}>
          <div className={s.img} style={el.img}></div>
          <NavLink
            to={el.url}
            className={s.link}
            activeClassName={s.activeLink}
          >
            {el.name}
          </NavLink>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
