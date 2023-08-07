import React, { useEffect, useState } from "react";

import myImage from "../img/myImg.jpeg";

const words = [
  "Take your business to next LEVEL",
  "Increase your business presence",
  "Be virtually present everywhere",
  "Resonable Pricing",
];

function Profile() {
  const [open, setOpen] = useState(false);
  const [partText, setPartText] = useState("");

  const wordFunction = () => {
    let part,
      i = 0,
      offset = 0,
      len = words.length,
      forwards = true,
      skip_count = 0,
      skip_delay = 12,
      speed = 50;
    setInterval(function () {
      if (forwards) {
        if (offset >= words[i].length) {
          ++skip_count;
          if (skip_count == skip_delay) {
            forwards = false;
            skip_count = 0;
          }
        }
      } else {
        if (offset == 0) {
          forwards = true;
          i++;
          offset = 0;
          if (i >= len) {
            i = 0;
          }
        }
      }
      part = words[i].substr(0, offset);
      if (skip_count == 0) {
        if (forwards) {
          offset++;
        } else {
          offset--;
        }
      }
      setPartText(part);
      console.log(part);
      // document.querySelector("word").innerHTML = part;
    }, speed);
  };

  console.log(open);

  useEffect(() => {
    wordFunction();
  }, []);

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-12 text-center">
          <div>
            <h1>Hi there</h1>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 text-center">
          <div className="col-sm-2"></div>
          <img
            className="image"
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
            src={myImage}
          />
        </div>
      </div>
      <div className={`row mt-3 text-center ${open ? "block" : "none"}`}>
        <div className="word">{partText}</div>
      </div>
      <div className="row mt-5 text-center">
        <div className="col-2 col-sm-3"></div>
        <div className="col-8 col-sm-7">
          <h5>
            I am <b>Mohd Saif Farooqui</b>, software Developer completed my
            master degree in Information Technology. working as Software
            developer in company. It my hobby and passion to develop website.
            Learning, Implementing and Rectifying.
          </h5>
        </div>
        <div className="col-4 col-md-4 col-sm-2"></div>
        <div className="col-4 col-md-4 col-sm-4">
          <div className="row mt-4">
            <div className="col-12 col-sm-12 col-md-12 text-center">
              <div>
                <h5>
                  <b>Imprint</b>:
                </h5>
                <h5>Mohd Saif Farooqui, Dharavi, Mumbai, India</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row" id="textiOnMobile">
        <div className="col-12 text-center" style={{ color: "darkslategray" }}>
          <h3>Websites which I have made or worked on:</h3>
        </div>
      </div>
      <div className="row mt-1">
        <div className="col-12 text-center">
          <h5>
            <a href="https://matrixpharmacy.herokuapp.com" target="_blank">
              Matrix-Pharmacy 2019
            </a>
          </h5>
          <h5>
            <a
              href="https://expense-mern-tracker.herokuapp.com/"
              target="_blank"
            >
              Expense-Tracker 2019
            </a>
          </h5>
          <h5>
            <a
              href="https://superadminnew.herokuapp.com/auth/admin-auth"
              target="_blank"
            >
              Shop-Admin 2020
            </a>
          </h5>
          <h5>
            <a href="http://www.dazzlefurnitureworld.com/" target="_blank">
              Dazzle-Furniture-World 2021
            </a>
          </h5>
          <h5>
            <a href="https://covidtracker-coral.vercel.app/" target="_blank">
              Covid Tracker 2021
            </a>
          </h5>
          <h5>
            <a href="https://www.kinindustries.in/" target="_blank">
              Kin Industries 2022
            </a>
          </h5>
          <h5>
            <a href="https://sugarlogger.com/" target="_blank">
              Suggar Logger 2022
            </a>
          </h5>
          <h5>
            <a href="http://multiplyrr.com/" target="_blank">
              Multiplyrr 2022
            </a>
          </h5>
          <h5>
            <a href="https://unitedheatlhcarepharma.com/" target="_blank">
              united Health Care Pharma 2023
            </a>
          </h5>
        </div>
      </div>
      <div className="row mt-2 text-center">
        <div className="col-12">
          <h5>Phone:+91 9167605650</h5>
        </div>
      </div>
      <div className="row mt-3 text-center">
        <div className="col-12">
          <h5>
            <a href="mailto:saiffarooqui9505@gmail.com">
              saiffarooqui9505@gmail.com
            </a>
          </h5>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-md-12 col-12">
          <a className="icon" href="https://www.facebook.com/saif.farooqui.16">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a className="icon" href="https://github.com/mohdsaif91">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <a
            className="icon"
            href="https://www.linkedin.com/in/mohd-saif-farooqui-158a23124/"
          >
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
