import React from "react";
import "./Contactinfo.css";
import Footer from "./Footer";
function Contactinfo() {
  return (
    <>
      <section id="contact">
        <div>
          <h1 class="section-title">
            Contact <span>info</span>
          </h1>
        </div>
        <div class="contact container">
          <div class="contact-items" id="contact-id">
            <div class="contact-item">
              <div class="icon">
                <img src="images/icons8-phone-50.png" />
              </div>
              <div class="contact-info">
                <h1>Phone</h1>
                <h2>+91-9403130550</h2>
              </div>
            </div>
            <div class="contact-item">
              <div class="icon">
                <img src="images/icons8-mail-50.png" />
              </div>
              <div class="contact-info">
                <h1>Email</h1>
                <h2>prashantpatil8182@gmail.com</h2>
              </div>
            </div>
            <div class="contact-item">
              <div class="icon">
                <img src="images/icons8-address-50.png" />
              </div>
              <div class="contact-info">
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
