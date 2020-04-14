import {Link} from "react-router-dom";
import React from "react";

export default function Header() {
  return (
    <div className={"header"}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

