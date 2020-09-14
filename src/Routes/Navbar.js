import React from "react";
import { Link } from "react-router-dom";

function Navbar() {


    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-primary">
          <Link class="navbar-brand" to='/'>World Countries & cities</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">                                                                                                                                                     
              <li class="nav-item active">
                <Link class="nav-link" to='/country'>Add Details</Link>
              </li>
            </ul>
          </div>
        </nav>
    )
}

export default Navbar;