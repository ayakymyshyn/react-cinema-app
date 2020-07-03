/* eslint-disable react/forbid-prop-types */
// Core
import React from 'react';
import { Link } from 'react-router-dom';
// Other
import T from 'prop-types';
import { PDFDownloadLink } from '@react-pdf/renderer';
// Components
import MovieTicket from './MovieTicket';

const DownloadTicket = ({ title, selectedSeats, movieId }) => (
  <>
    <MovieTicket title={title} selectedSeats={selectedSeats} />
    <PDFDownloadLink
      document={<MovieTicket title={title} selectedSeats={selectedSeats} movieId={movieId} />}
      fileName="ticket.pdf"
    >
      <div className="theme-btn">Download Ticket Info in PDF</div>
      <Link to="/" className="theme-btn">Back to main page</Link>
    </PDFDownloadLink>
  </>
);

export default DownloadTicket;

DownloadTicket.propTypes = {
  title: T.string.isRequired,
  selectedSeats: T.array.isRequired,
  movieId: T.string.isRequired,
};
