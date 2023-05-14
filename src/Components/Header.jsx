import React from "react";
import { NavLink } from "react-router-dom";

const nav = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Signup",
    path: "/signup",
  },
  {
    name: "Login",
    path: "/login",
  },
  {
    name: "About",
    path: "/about",
  },
];

export default function Header(props) {
  return (
    <div>
      <>
        {nav.map((item, index) => (
          <NavLink key={index} to={item.path}>
            {item.name}
          </NavLink>
        ))}
      </>
      {props.children}
    </div>
  );
}
