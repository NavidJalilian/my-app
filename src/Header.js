import "./Header.css";
import React from "react";
import { ImHome3 } from "react-icons/im";
import { SiSpeedtest } from "react-icons/si";
import { GiTargetArrows } from "react-icons/gi";
import { MdLightMode } from "react-icons/md";
import { BsFillSignpost2Fill } from "react-icons/bs";
export default function Header() {
  function modeChanger() {
    document.body.classList.toggle("lightMode-bg");
    document.body.classList.toggle("lightMode-cards");
  }
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <a href="#home">
              <ImHome3 />
              <h4>خانه</h4>
            </a>
          </li>
          <li>
            <a href="#exam">
              <SiSpeedtest />
              <h4>آزمون</h4>
            </a>
          </li>
          <li>
            <a href="jbjh">
              <GiTargetArrows />
              <h4>تمرین</h4>
            </a>
          </li>
          <li>
            <a href="#tablos">
              <BsFillSignpost2Fill />
              <h4>تابلوها</h4>
            </a>
          </li>
        </ul>
        <a href="#j" onClick={modeChanger} className="mode">
          <MdLightMode />
        </a>
      </nav>
    </header>
  );
}
