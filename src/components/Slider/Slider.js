import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Slider/Slider.scss";
import { Carousel } from "react-bootstrap";
import { films } from "../../mockData/films";

const Slider = props => (
  <Carousel>
    {films.map(
      (film, i) =>
        film.sliderImage && (
          <Carousel.Item
            style={{ backgroundImage: `${film.sliderImage}` }}
            key={i}
          >
            <img
              className="d-block w-100 slider-image"
              src={film.sliderImage}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{film.title}</h3>
              <p>{film.description}</p>
              <button type="button" className="btn btn-primary">
                Secondary
              </button>
            </Carousel.Caption>
          </Carousel.Item>
        )
    )}
  </Carousel>
);

export default Slider;
