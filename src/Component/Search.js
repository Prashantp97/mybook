import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Sstyle.css";
import Bnavbar from "./Bnavbar";
import Card from "./Card";

function Search() {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();

  const searchBook = (evt) => {
    setDisplay(!display);
    console.log("hey hii");
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          search +
          "&key=AIzaSyBB9yWy1hdbq2kVo269_D3q19qoHbI7Y-g" +
          "&maxResults=40"
      )
      .then((res) => setData(res.data.items))
      .catch((err) => console.log(err));
    setSearch("");
  };
  return (
    <>
      <Bnavbar />
      <div className="">
        <div className="s005">
          <h1>WHAT ARE YOU LOOKING FOR ?</h1>
          <br />

          <div className="input-field">
            <input
              className="form-control"
              id="choices-text-preset-values"
              value={search}
              type="text"
              placeholder="Search your book..."
              // onKeyPress={searchBook}
              onChange={(e) => setSearch(e.target.value)}
            />
            <a className="asearch" href="#card">
              <button className="btn-search" type="button" onClick={searchBook}>
                Search
              </button>
            </a>
          </div>
        </div>
        {display && search != " " ? (
          <div className="greet">
            <span id="downemoji">&#x25BC;</span>
            <h1>welcome to your result</h1>
            <span id="downemoji1">&#x25BC;</span>
          </div>
        ) : null}
        <div id="card" className="maincard">
          <Card book={bookData} />
        </div>
      </div>
    </>
  );
}
export default Search;
