import React, { useState } from "react";
import { data } from "../config/data";
import Card from "./Card";
import { Link } from "react-router-dom";

const Body = () => {
  const [info] = useState(data);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [domain, setDomain] = useState("");
  const [gender, setGender] = useState("");
  const [avilable, setAvailable] = useState("");

  const unique_domain = ["--select--",...new Set(info.map((item) => item.domain))];
  const unique_gender = ["--select--",...new Set(info.map((item) => item.gender))];
  // const unique_available = [...new Set(info.map((item) => item.available))]

  return (
    <div className="Body">
      <div className="header">
        <div className="header_container">
          <Link to="/">
            <div className="home">Home</div>
          </Link>
          <Link to="/team">
            <div className="team">Team</div>
          </Link>
        </div>
      </div>
      <div className="search_filter">
        <input
          type="text"
          placeholder="search_here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="drop_down">
        <div className="domain">
          <span>Domain</span>
          <select value={domain} onChange={(e) => setDomain(e.target.value)}>
            {unique_domain.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
        </div>
        <div className="gender">
          <span>Gender</span>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            {unique_gender.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
        </div>
        <div className="availability">
          <span>Availability</span>
          <select
            value={avilable}
            onChange={(e) => setAvailable(e.target.value)}
          >
            <option>--select--</option>
            <option>true</option>
            <option>false</option>
          </select>
        </div>
      </div>
      <div className="main-body">
        {info
          .filter(
            (item) =>
              item.first_name.toLowerCase().includes(search.toLowerCase()) ||
              item.last_name.toLowerCase().includes(search.toLowerCase())
          )
          .filter((item) => item.domain === domain)
          .filter((item) => item.gender === gender).filter((item)=> item.available.toString()===avilable)
          .slice(page * 20 - 20, 20 * page)
          .map((item) => {
            return <Card {...item} key={item.id} />;
          })}
      </div>
      <div className="pagination">
        <div>
          {page > 1 && <button onClick={() => setPage(page - 1)}>Prev</button>}
          {page}
          {page < 50 && (
            <button
              onClick={() => {
                setPage(page + 1);
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;
