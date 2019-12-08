import React from "react";

import './MovieDetails.scss';

const MovieDetails = props => {
    console.log(props.match.params); //will fetch movie data using match.params
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 details-image">
          <img className="img-fluid" src="https://wallpaperaccess.com/full/35357.jpg" alt="" />
        </div>
        <div className="col-md-9">
          <h3 className="my-3">Project Description</h3>
          <p className="details-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
            euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem,
            adipiscing in adipiscing et, interdum nec metus. Mauris ultricies,
            justo eu convallis placerat, felis enim.
          </p>
          <buttom className="btn btn-primary">Book ticket</buttom>
        </div>
      </div>
    </div>
  );
};   

export default MovieDetails;
