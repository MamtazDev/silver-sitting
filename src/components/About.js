import Link from "next/link";
import React from "react";
import { MdPeopleAlt } from "react-icons/md";

const About = () => {
  return (
    <div className="uber mb-5">
      <div className="container">
        <div className="row g-5">
          <div className="text-center col-12 col-md-6 col-lg-4 p-3">
            <MdPeopleAlt
              className="mb-3"
              style={{ width: "50px", height: "50px" }}
            />
            <h2>about us</h2>
            <p>
              Find out where the idea for SilverSitting came from and what
              drives us.
            </p>
            <Link href="https://www.silversitting.com/blank-4">
              Learn more about the idea and the founders of SilverSitting
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
            <h2>news</h2>
            <p>Check out our childcare news and articles</p>
            <Link href="https://www.silversitting.com/blog ">To the news</Link>
          </div>
          <div className="text-center col-12 col-md-6 col-lg-4 p-3">
            <img
              className="mb-3"
              width={50}
              height={50}
              src="https://static.wixstatic.com/media/ac65b3_97b377a83dce436691ca425b79bfb43a~mv2.png/v1/fill/w_55,h_51,al_c,lg_1,q_85,enc_auto/ac65b3_97b377a83dce436691ca425b79bfb43a~mv2.png"
              alt=""
            />
            <h2>security</h2>
            <p>Your safety is important to us!</p>
            <Link href="https://www.silversitting.com/haeufige-fragen-kinderbetreuer">
              Safely take care of children
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
