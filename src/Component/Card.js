import React, { useState } from "react";
import Bnavbar from "./Bnavbar";
import "./Cstyle.css";
import Page from "./Page";
function Card({ book }) {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();

  return (
    <>
      {book.map((item) => {
        let imglink =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        let bookname = item.volumeInfo.title;
        if (
          imglink != undefined &&
          amount != undefined &&
          bookname != undefined
        ) {
          return (
            <>
              <div
                className="card card-width"
                onClick={() => {
                  setShow(true);
                  setItem(item);
                }}
              >
                <div className="card-header">
                  <div className="profile">
                    <h3 className="letter">{bookname.substring(0, 2)}</h3>
                  </div>

                  <h3 className="card-title">{bookname}</h3>
                </div>
                <div className="cardimg">
                  <img src={imglink} alt="Logo" className="card-image" />
                </div>
                <div className="price">
                  <h3>
                    Price of Book :- <span> &#8377; {amount}</span>{" "}
                  </h3>
                </div>
              </div>
              <Page
                show={show}
                item={bookItem}
                onClose={() => setShow(false)}
              />
            </>
          );
        }
      })}
    </>
  );
}

export default Card;
