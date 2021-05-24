import React from "react";
import { NavLink } from "react-router-dom";
import logoImage from "../../assets/logoSN.png";
import s from "./Header.module.css";

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
          <NavLink className={s.loginBlockContainer} to={"/login"}><button>Log in</button></NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
