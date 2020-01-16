import React from "react";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { Link } from "react-router-dom";
import MovieTicket from "./MovieTicket";

const DownloadTicket = ({ title, selectedSeats, movieId }) => {
  return (
    <React.Fragment>
      <MovieTicket title={title} selectedSeats={selectedSeats} />
      <PDFDownloadLink
        document={<MovieTicket title={title} selectedSeats={selectedSeats} movieId={movieId}/>}
        fileName="ticket.pdf"
      >
        <a className="theme-btn">Download Ticket Info in PDF</a>
        <Link to="/" className="theme-btn">
          Back to main page
        </Link>
      </PDFDownloadLink>
    </React.Fragment>
  );
};

export default DownloadTicket;
