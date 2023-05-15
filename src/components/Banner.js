import React, { useState } from "react";
import children from "../../public/images/children.svg";
import caregiver from "../../public/images/caregiver.svg";
import Link from "next/link";

const Banner = () => {
  const [tab, setTab] = useState("children");
  return (
    <div className="banner sec_gap">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="care_form shadow-sm">
              <img
                src="https://static.wixstatic.com/media/ac65b3_8e6ec3eb25e64751a73b2518401f0f3e~mv2.png/v1/fill/w_160,h_50,al_c,lg_1,q_85,enc_auto/ac65b3_8e6ec3eb25e64751a73b2518401f0f3e~mv2.png"
                alt=""
              />
              <p className="mb-4">Seniors care for children</p>
              <div className="d-flex justify-content-evenly">
                <div onClick={() => setTab("children")}>
                  <img width={80} src={children.src} alt="" />
                  <p>
                    Care <br /> Children
                  </p>
                </div>
                <div onClick={() => setTab("caregiver")}>
                  <img width={80} src={caregiver.src} alt="" />
                  <p>
                    Find <br /> Caregiver
                  </p>
                </div>
              </div>
              {tab === "children" && (
                <div>
                  <h6 className="mb-4">
                    Take care of children and receive payment from parents if
                    you want to
                  </h6>
                  <button id="login_btn" className="mb-4" type="">
                    Register as a child career
                  </button>{" "}
                  <br />
                  <Link href="https://en.silversitting.com/leihoma-werden">
                    Learn more about childcare
                  </Link>
                </div>
              )}
              {tab === "caregiver" && (
                <div>
                  <h6 className="mb-4">Find childcare for your children</h6>
                  <input className="mb-4 w-75 border-0 shadow-sm p-3" type="text" placeholder="Address" /> <br/>
                  <button id="login_btn" className="mb-4" type="">
                    Find Now
                  </button>{" "}
                  <br />
                </div>
              )}
            </div>
          </div>
          <div className="col-12 col-lg-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
