import Link from "next/link";
import React from "react";
import { MdPeopleAlt } from "react-icons/md";

const Uber = () => {
  return (
    <div className="uber">
      <div className="container">
        <div className="row g-5">
          <div className="text-center col-12 col-md-6 col-lg-4 p-3">
            <MdPeopleAlt
              className="mb-3"
              style={{ width: "50px", height: "50px" }}
            />
            <h2>Über uns</h2>
            <p>
              Erfahre, woher die Idee zu SilverSitting kommt und was uns
              antreibt.
            </p>
            <Link href="https://www.silversitting.com/blank-4">
              Erfahre mehr über die Idee und die Gründer von SilverSitting
            </Link>
          </div>
          <div className="text-center col-12 col-md-6 col-lg-4 p-3">
            <img
              className="mb-3"
              width={50}
              height={50}
              src="https://static.wixstatic.com/media/ac65b3_a219199ad34e4fc5907a7a27681a1830~mv2.png/v1/fill/w_55,h_45,al_c,lg_1,q_85,enc_auto/ac65b3_a219199ad34e4fc5907a7a27681a1830~mv2.png"
              alt=""
            />
            <h2>Neuigkeiten</h2>
            <p>
              Sieh dir unsere Neuigkeiten und Artikel zum Thema Kinderbetreuung
              an
            </p>
            <Link href="https://www.silversitting.com/blog ">
              Zu den Neuigkeiten
            </Link>
          </div>
          <div className="text-center col-12 col-md-6 col-lg-4 p-3">
            <img
              className="mb-3"
              width={50}
              height={50}
              src="https://static.wixstatic.com/media/ac65b3_97b377a83dce436691ca425b79bfb43a~mv2.png/v1/fill/w_55,h_51,al_c,lg_1,q_85,enc_auto/ac65b3_97b377a83dce436691ca425b79bfb43a~mv2.png"
              alt=""
            />
            <h2>Sicherheit</h2>
            <p>Deine Sicherheit liegt uns am Herzen!</p>
            <Link href="https://www.silversitting.com/haeufige-fragen-kinderbetreuer">
              Sicher Kinder betreuen
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uber;
