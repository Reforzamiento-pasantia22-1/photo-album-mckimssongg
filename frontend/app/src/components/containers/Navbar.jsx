import React from "react";
import Sing_in from "../Sing_in";
import Search from "../Search";
import {FiSearch} from "react-icons/fi";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <Sing_in />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FiSearch />
        </button>

        <Search/>
      </div>
    </nav>
  );
}

export default Navbar;
