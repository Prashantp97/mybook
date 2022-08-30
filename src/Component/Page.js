import React from "react";
import "./Page.css";
const Page = ({ show, item, onClose }) => {
  if (!show) {
    return null;
  }
  let thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}>
            X
          </button>
          <div className="inner-box">
            <img src={thumbnail} alt="" />
            <div className="info">
              <h1>{item.volumeInfo.title}</h1>

              <h3>
                <span className="author">Author :- </span>
                {item.volumeInfo.authors}
              </h3>
              <h4>
                <span className="author">Publisher :- </span>
                {item.volumeInfo.publisher}
                <br />
                <span className="author">published Date :- </span>
                <span>{item.volumeInfo.publishedDate}</span>
              </h4>

              <br />
              <a href={item.volumeInfo.previewLink}>
                <button>More</button>
              </a>
            </div>
          </div>
          <p className="description">{item.volumeInfo.description}</p>
        </div>
      </div>
    </>
  );
};
export default Page;
