import React, { useContext } from "react";
import "./App.css";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  
  const [movies,setMovies] = useContext(MovieContext);
  return (
      <nav>
    <div className="nav-links">
      <h1>Gokulesh</h1>
      <p>List of Movies : {movies.length}</p>
    </div>
    </nav>
  );
};

export default Nav;
