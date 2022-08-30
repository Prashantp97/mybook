import React, { useState } from "react";

import "./Style.css";
import Bnavbar from "./Bnavbar";

function Feedback() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [mob, setMob] = useState("");
  const [feedback, setFeedback] = useState("");
  const sendEmail = (e) => {
    console.log();
    e.preventDefault();

    console.log(first);
    console.log(last);
    console.log(email);
    console.log(mob);
    console.log(feedback);
    setFirst("");
    setLast("");
    setEmail("");
    setMob("");
    setFeedback("");
  };

  return (
    <>
      <Bnavbar />
      <div className="wrapper">
        <div className="inner">
          <form action onSubmit={sendEmail}>
            <h3>Feedback Form</h3>
            <div className="form-group">
              <div className="form-wrapper">
                <input
                  type="text"
                  placeholder="First Name"
                  className="form-control"
                  value={first}
                  name="first"
                  onChange={(e) => setFirst(e.target.value)}
                  required
                />
              </div>
              <div className="form-wrapper">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  required
                  value={last}
                  name="last"
                  onChange={(e) => setLast(e.target.value)}
                />
              </div>
            </div>
            <div className="form-wrapper">
              <input
                type="text"
                placeholder="Email"
                className="form-control"
                required
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-wrapper">
              <input
                type="text"
                placeholder="Mob. No"
                className="form-control"
                required
                value={mob}
                name="mob"
                onChange={(e) => setMob(e.target.value.toString())}
              />
            </div>
            <div className="form-wrapper">
              <textarea
                id="massage"
                className="form-control"
                cols="30"
                rows="10"
                placeholder="feedback pls"
                value={feedback}
                name="feedback"
                onChange={(e) => setFeedback(e.target.value)}
              ></textarea>
            </div>

            <button className="fbtn" onClick={sendEmail} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Feedback;
