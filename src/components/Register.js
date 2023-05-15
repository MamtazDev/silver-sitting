import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Register = () => {
  return (
    <div className="register sec_gap">
      <div className="container">
        <div className="d-flex flex-wrap gap-5 justify-content-between">
          <div>
            <div className="cursor_pointer option d-flex gap-3 align-items-center">
              <h3 className="mb-0"> Register as a child career</h3>
              <BsArrowRight className="fs-1" />
            </div>
          </div>
          <div>
            <div className="cursor_pointer option d-flex gap-3 align-items-center">
              <h3 className="mb-0"> Register as a Parent</h3>
              <BsArrowRight className="fs-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
