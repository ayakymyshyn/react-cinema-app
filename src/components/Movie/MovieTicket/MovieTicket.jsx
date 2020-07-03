/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-underscore-dangle */
// Core
import React from 'react';
// Other
import T from 'prop-types';
import {
  Page,
  Text,
  View,
  Document,
} from '@react-pdf/renderer';
// Styles
import './MovieTicket.scss';
import { styles } from './styles';

const MovieTicket = ({ title, selectedSeats, movieId }) => (
  <Document>
    <Page size="A4">
      <View style={styles.ticket}>
        <View style={styles.stub}>
          <View style={styles.heading}>
            <Text>{title}</Text>
          </View>
          <Text style={styles.subheader}>
            <Text>Date:</Text>
            {selectedSeats && selectedSeats[0].stringDate}
          </Text>
          {selectedSeats
            && selectedSeats.map((seat) => (
              <Text style={styles.blackBorder} key={seat._id}>
                <Text>Row: </Text>
                {seat.row + 1}
                <Text>, Seat:</Text>
                {seat.seat + 1}
                <Text style={styles.block}>
                  <Text>SeatID:</Text>
                  {seat.seatNum}
                </Text>
                <Text style={styles.block}>
                  <Text>MovieID:</Text>
                  {movieId}
                </Text>
              </Text>
            ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default MovieTicket;

MovieTicket.propTypes = {
  title: T.string.isRequired,
  selectedSeats: T.array.isRequired,
  movieId: T.string.isRequired,
};
