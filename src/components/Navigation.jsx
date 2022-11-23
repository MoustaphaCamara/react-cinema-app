import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation-container">
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/liked"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Coups de coeur</li>
          </NavLink>
        </ul>
      </div>
      <div className="logo">
        <h1>React movies</h1>
      </div>
    </div>
  );
};

export default Navigation;
