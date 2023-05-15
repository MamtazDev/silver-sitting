import React, { useState } from "react";
import Select from "react-select";

const Header = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const countries = [
    {
      flag: "https://static.parastorage.com/services/linguist-flags/1.663.0/assets/flags/corner/GBR.png",
      name: "EN",
    },
    {
      flag: "https://static.parastorage.com/services/linguist-flags/1.663.0/assets/flags/corner/DEU.png",
      name: "DE",
    },
  ];

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };
  const countryOptions = countries.map((country) => ({
    value: country.code,
    label: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={country.flag}
          alt={country.name}
          style={{ marginRight: "10px", width: "20px" }}
        />
        {country.name}
      </div>
    ),
  }));

  const initialPlaceholder =
    countryOptions.length > 0 ? countryOptions[0].label : "";
  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "none",
      boxShadow: "none",
      borderRadius: 0,
      width: "150px",
    }),
  };

  return (
    <div className="">
      <nav class="navbar navbar-expand-lg ">
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
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
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
            </ul>
            <form class="d-flex align-items-center gap-3" role="search">
              <Select
                value={selectedCountry}
                onChange={handleCountryChange}
                options={countryOptions}
                placeholder={initialPlaceholder}
                styles={customStyles}
                isSearchable={false}
              />

              <button id="login_btn" type="">
                Login
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
