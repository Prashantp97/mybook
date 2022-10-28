import React from "react";
import "./Contactinfo.css";
import Footer from "./Footer";
import plogo from "../Component/assets/icons8-phone-50.png";
import elogo from "../Component/assets/icons8-mail-50.png";
import alogo from "../Component/assets/icons8-address-50.png";
function Contactinfo() {
  return (
    <>
      <section id="contact">
        <div>
          <h1 className="section-title">
            Contact <span>info</span>
          </h1>
        </div>
        <div className="contact container">
          <div className="contact-items" id="contact-id">
            <div className="contact-item">
              <div className="icon">
                <img src={plogo} style={{ height: "20px" }} />
              </div>
              <div className="contact-info">
                <h1>Phone</h1>
                <h2>+91-9403130550</h2>

                <h2>+91-8888984316</h2>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">
                <img src={elogo} />
              </div>
              <div className="contact-info">
                <h1>Email</h1>
                <h2>prashantpatil8182@gmail.com</h2>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">
                <img src={alogo} />
              </div>
              <div className="contact-info">
                <h1>Address</h1>
                <h2>81 Daulat Nagar Deopur Dhule,Mahasashtra</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export default Contactinfo;
