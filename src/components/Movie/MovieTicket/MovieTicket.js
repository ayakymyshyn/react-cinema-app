import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import "./MovieTicket.scss";

const styles = StyleSheet.create({
  ticket: {
    display: "flex",
    justifyContent: "center",
  },
  stub: {
    background: "#fff",
    minHeight: "250px",
    width: "250px",
    color: "white",
    padding: "20px",
    position: "relative"
  },
  heading: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "28px",
    paddingBottom: "5px",
    marginBottom: "5px",
    fontWeight: "bold",
    lineHeight: "35px",
    backgroundColor: "#333"
  },
  subheader: {
    fontSize: "18px",
    paddingBottom: "5px",
    marginBottom: "5px",
    fontWeight: "bold",
    lineHeight: "25px",
    color: "#333"
  },
  block: {
    display: "block",
    margin: "10px 0",
    color: "#333"
  },
  blackBorder: {
    display: "block",
    borderBottom: "3px solid #333",
    color: "#333"
  }
});

const MovieTicket = ({ title, selectedSeats, movieId}) => (
  <Document>
    <Page size="A4">
      <View style={styles.ticket}>
        <View style={styles.stub}>
          <View style={styles.heading}>
            <Text>{title}</Text>
          </View>
          <Text style={styles.subheader}>
            Date: {selectedSeats && selectedSeats[0].stringDate}
          </Text>
          {selectedSeats &&
            selectedSeats.map(seat => (
              <Text style={styles.blackBorder} key={seat._id}>
                Row: {seat.row + 1}, Seat: {seat.seat + 1}, 
                <Text style={styles.block}>SeatID: {seat.seatNum}, </Text>
                <Text style={styles.block}>MovieID: {movieId}</Text>
              </Text>
            ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default MovieTicket;
