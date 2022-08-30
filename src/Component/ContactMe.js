import React from "react";
import "./Contact.css";
import Bnavbar from "./Bnavbar";
import profil from "../Component/assets/IMG_20220110_110151.jpg";
import Contactinfo from "./Contactinfo";
import resume from "../Component/assets/resume.png";
import digi from "../Component/assets/digimart.png";
import book from "../Component/assets/risingbook.png";

function ContactMe() {
  return (
    <>
      <Bnavbar />

      <section id="about">
        <div className="about container">
          <div className="col-left">
            <img className="card-img-top" src={profil} alt="" />
          </div>
          <div className="col-right">
            <h1 className="section-title">About me</h1>
            <br />

            <br />
            <p>
              These days, nearly every person carries a smart device like
              Android mobile, iPhone, iPad, or Tablet that offers the platform
              for a best-selling reading app. Since people have become
              tech-savvy, they usually look for a convenient e-reading app
              through which they not just can read but also purchase books.
              Developing an mobile reading app is not regarding the number of
              books sold out and the money earned. Alongside them, you will get
              a complete set of benefits..
              <br />
              <br />
              <span id="span">Languages Use :</span> HTML , CSS , JavaScript
              <br />
              <br />
              library used : React , Bootstrap
            </p>
          </div>
        </div>
      </section>
      <section className="" id="destinations">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h3 className="text-center mt-4 text-secondary">My Project</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 mb-5">
              <div className="card mt-4">
                <img className="card-img-top" src={resume} alt="" />
                <div className="card-body">
                  <h4 className="card-title text-secondary">My Resume</h4>
                  <p className="card-text text-secondary">
                    It's a specialized type of creative resume that showcases
                    examples of my work along with the standard resume
                    information about my work experience
                    <br />
                    <span>Features :</span> Download my resume from 'About' and
                    view Git profile from 'Contact'.
                    <br />
                    <span>Tech Stack :</span> HTML,CSS
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    target="_blank"
                    href="https://my-1st-project-prashant.netlify.app/"
                    className="btn btn-primary"
                  >
                    View Website
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mb-5">
              <div className="card mt-4">
                <img className="card-img-top" src={digi} alt="" />
                <div className="card-body">
                  <h4 className="card-title text-secondary">
                    E-Commerce Website
                  </h4>
                  <p className="card-text text-secondary">
                    This project deals with developing an e-commerce website for
                    Brand Smart- Watch. It provides the user with a catalog of
                    different Smart-Watch available for purchase in the store.
                    <br />
                    <span>Features :</span> Process orders, accept payments.
                    <br />
                    <span>Tech Stack :</span> HTML, CSS, JavaScript
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="https://digi-mart.netlify.app/"
                    className="btn btn-primary"
                    target="_blank"
                  >
                    View Website
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mb-5">
              <div className="card mt-4">
                <img className="card-img-top" src={book} alt="" />
                <div className="card-body">
                  <h4 className="card-title text-secondary">
                    Book Information
                  </h4>
                  <p className="card-text text-secondary">
                    Harry Potter, fictional character, a boy wizard created by
                    British author J.K. Rowling. His coming-of-age exploits were
                    the subject of seven enormously popular novels (1997–2007),
                    which were adapted into eight films (2001–11); a play and a
                    book of its script appeared in 2016.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">
                    View Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contactinfo />
    </>
  );
}
export default ContactMe;
