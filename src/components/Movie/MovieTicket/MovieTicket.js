import React from "react";

import "./MovieTicket.scss";

const MovieTicket = ({ title, seadId, row, seat, date }) => (
  <div className="ticket">
    <div className="stub">
      <div className="top">
        <span className="admit">Info</span>
        <span className="line"></span>
        <span className="num">
          <span>
            {" "}
            Row: 1 <br /> Seat: 3
          </span>
        </span>
      </div>
      <div className="number">1</div>
      <div className="invite">Invite for you</div>
    </div>
    <div className="check">
      <div className="big">Harry Potter And Deathly Hallows Pt. 2</div>
      <div className="info">
        <section>
          <div className="title">Date</div>
          <div>4/27/2016</div>
        </section>
        <section>
          <div className="title">Seat ID</div>
          <div>31415926</div>
        </section>
      </div>
    </div>
  </div>
);

export default MovieTicket;
