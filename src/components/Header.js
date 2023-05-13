import React from "react";
import Image from "next/image";
// import { BsFillArrowDownSquareFill } from "react-icons/bs";


const Header = () => {
  return (
    <div className="mb-5">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
          <a class="navbar-brand me-5" href="#">
            <img
              src="https://static.wixstatic.com/media/ac65b3_8e6ec3eb25e64751a73b2518401f0f3e~mv2.png/v1/fill/w_160,h_50,al_c,lg_1,q_85,enc_auto/ac65b3_8e6ec3eb25e64751a73b2518401f0f3e~mv2.png"
              alt=""
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#">
                  Unternehmen
                </a>
                <ul id="nav_hover_item" className="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="#">
                      Wer wir sind
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="#">
                      Blog
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="#">
                      Feedback
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#">
                  Für Kinderbetreuer
                </a>
                <ul id="nav_hover_item" className="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="#">
                      Anleitung
                    </a>
                  </li>{" "}
                  <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="#">
                      Häufige Fragen
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link " aria-current="page" href="#">
                  Für Eltern
                </a>
                <ul id="nav_hover_item" className="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="#">
                      Anleitung
                    </a>
                  </li>{" "}
                  <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="#">
                      Häufige Fragen
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="#">
                      Suche nach Kinderbetreuung
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item ">
                <select class="form-select" aria-label="Default select example">
                  <option  selected>
                 
                    {/* <img
                      src="https://static.parastorage.com/services/linguist-flags/1.663.0/assets/flags/corner/DEU.png"
                      alt=""
                    /> */}
                    {/* <BsFillArrowDownSquareFill/> */}
                    EN
                    
                  </option>
                  <option value="1">
                    {/* <img
                      src="https://static.parastorage.com/services/linguist-flags/1.663.0/assets/flags/corner/DEU.png"
                      alt=""
                    /> */}
                    
                    DE
                  </option>
                </select>
              </li>
              <li class="nav-item ">
                <button id="login_btn" type="">Login</button>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
