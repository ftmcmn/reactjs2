import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/hello">Hello</Link>
        </li>
        <li>
          <Link to="/jsx4">Jsx4</Link>
        </li>
        <li>
          <Link to="/jsx5">Jsx5</Link>
        </li>
        <li>
          <Link to="/jsx6">Jsx6</Link>
        </li>
        <li>
          <Link to="/style1">Style1</Link>
        </li>
        <li>
          <Link to="/exchange">Exchange</Link>
        </li>
        <li>
          <Link to="/todoApp">ToDoApp</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
