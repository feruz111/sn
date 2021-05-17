import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import logoImage from "../../assets/logo.svg";

type HeaderPropsType = {
  isAuth: boolean;
  login: string | null;
  logoutTC: () => void;
};

const Header: React.FC<HeaderPropsType> = (props) => {
  const logo = { backgroundImage: `url(${logoImage})` };
  return (
    <header className={s.header}>
      <div className={s.logoImg} style={logo} />
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div className={s.loginBlockContainer}>
            <div className={s.loginName}>{props.login}</div>
            <div className={s.line}></div>
            <button onClick={props.logoutTC}>Log out</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
