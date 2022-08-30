import React from "react";
import img from "./APJ.jpg";
import img2 from "../Component/assets/51a7+jM--FL.jpg";
import gita from "../Component/assets/gita.jpg";
import chetan from "../Component/assets/chetan_bhagat_031.jpg";
import tagore from "../Component/assets/ravindranath tagor.png";
import roy from "../Component/assets/aroy.jpg";

import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <>
      <section className="bg-light" id="about">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h3 className="text-center mt-4 text-secondary">
                Importance Of Books
              </h3>
            </div>
          </div>
          <div className="row">
            <p className="mt-4 mb-5">
              Books play a quintessential role in every student’s life by
              introducing them to a world of imagination, providing knowledge of
              the outside world, improving their reading, writing and speaking
              skills as well as boosting memory and intelligence. The importance
              of books in our life cannot be undermined for they not only help
              in broadening our horizons but also act as doorways of connecting
              us with the world around us. They function as survival kits, they
              influence us and leave an impact on us. Want to know the benefits
              of books and the importance of reading? Curious about how books
              impact our lives? Read this blog to know all about the importance
              of books in a student’s life, essays on importance of reading
              books, quotes and more!
            </p>
          </div>
        </div>
      </section>

      <section className="" id="destinations">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h3 className="text-center mt-4 text-secondary">
                Favourite Books
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4 mb-5">
              <div className="card mt-4">
                <img className="card-img-top" src={img} alt="" />
                <div className="card-body">
                  <h4 className="card-title text-secondary">Wings of Fire</h4>
                  <p className="card-text text-secondary">
                    Written by Dr. A.P.J Abdul Kalam, honorable President of
                    India. ‘Wings of Fire’ is an autobiography capable of
                    inspiring even a common man into becoming a technologist. A
                    well composed novel which revolves around the life of Mr.
                    Kalam a renowned scientist as he shares his experiences and
                    the minutest of details of his life.
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="#"
                    className="btn btn-primary"
                    onClick={navigate("/search")}
                  >
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mb-5">
              <div className="card mt-4">
                <img className="card-img-top" src={img2} alt="" />
                <div className="card-body">
                  <h4 className="card-title text-secondary">Mahabharata</h4>
                  <p className="card-text text-secondary">
                    The Mahabharata is an ancient Indian epic where the main
                    story revolves around two branches of a family - the
                    Pandavas and Kauravas - who, in the Kurukshetra War, battle
                    for the throne of Hastinapura. Interwoven into this
                    narrative are several smaller stories about people dead or
                    living, and philosophical discourses.
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="#"
                    className="btn btn-primary"
                    onClick={navigate("/search")}
                  >
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mb-5">
              <div className="card mt-4">
                <img className="card-img-top" src={gita} alt="" />
                <div className="card-body">
                  <h4 className="card-title text-secondary">Bhagavadgita</h4>
                  <p className="card-text text-secondary">
                    The Bhagavadgita is an episode recorded in the Mahabharata,
                    a Sanskrit epic poem of ancient India. It is an influential
                    religious text in Hinduism that takes the form of a dialogue
                    between Prince Arjuna and Krishna, an avatar of the Hindu
                    deity Vishnu. It was likely composed in the 1st or 2nd
                    century CE. It is commonly referred to as the Gita
                  </p>
                </div>
                <div className="card-footer">
                  <a
                    href="#"
                    className="btn btn-primary"
                    onClick={navigate("/search")}
                  >
                    Find Out More!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light mt-5" id="tourist">
        <div className="container">
          <div className="row text-center">
            <div className="col-sm-12 col-md-12 mb-4">
              <h3 className="text-center mt-4 text-secondary">Top Authors </h3>
            </div>
            <div className="col-md-4">
              <div className="testimonial mb-5">
                <div className="avatar mx-auto">
                  <img
                    src={chetan}
                    className="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 className="font-weight-bold dark-grey-text mt-4">
                  Chetan Bhagat
                </h4>
                <h6 className="font-weight-bold blue-text my-3">Authors</h6>
                <p className="font-weight-normal dark-grey-text">
                  Cited by The New York Times in 2008 as the biggest selling
                  English language novelist in India’s history, Chetan Bhagat is
                  author, screenwriter, columnist and TV personality. He is
                  known for Comedy-drama novels about young urban
                  middle-className Indians. Some of his famous work includes
                  Five Point Someone, 2 States, Half Girlfriend and One Indian
                  Girl
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="testimonial mb-5">
                <div className="avatar mx-auto">
                  <img
                    src={tagore}
                    className="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 className="font-weight-bold dark-grey-text mt-4">
                  rabindranath tagore
                </h4>
                <h6 className="font-weight-bold blue-text my-3">Authors</h6>
                <p className="font-weight-normal dark-grey-text">
                  Even though Tagore received his education in law he took great
                  interest in Shakespeare and his literature. Therefore
                  following his works he became a poet and author. His first
                  poem ‘Mansai’ was published in 1890 after which he gained
                  immense popularity amongst Bengali readers. His most
                  significant works include ‘Gitanjali’ which was a collection
                  of poems and ‘Galpaguchchha’ which are eighty short stories.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial mb-5">
                <div className="avatar mx-auto">
                  <img
                    src={roy}
                    className="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 className="font-weight-bold dark-grey-text mt-4">
                  Arundhati Roy
                </h4>
                <h6 className="font-weight-bold blue-text my-3">Authors</h6>
                <p className="font-weight-normal dark-grey-text">
                  Writer, essayist and political activist, Arundhati Roy, is
                  best known for her novel The God of Small Things which won her
                  the Man Booker Prize for Fiction in 1997. Some of her other
                  works include, The Algebra of Infinite Justice, Kashmir: The
                  Case for Freedom and Capitalism: A Ghost Story.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
