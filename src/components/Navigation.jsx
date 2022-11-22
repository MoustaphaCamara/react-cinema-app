import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/liked"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li>Coups de coeur</li>
        </NavLink>
        <div className="logo">
          <h4>React movies</h4>
        </div>
      </ul>
    </div>
  );
};

export default Navigation;
