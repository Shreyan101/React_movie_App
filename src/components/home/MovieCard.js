import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./NavStyle.css";

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="col-md-3 mb-5">
          <Link className='link-sty' to={'/movie/' + movie.imdbID} style={{ textDecoration: 'none' }}>
          <div className="card card-body text-center h-100 cardbg">
          <img className="w-100 mb-2" src={movie.Poster} alt="Movie Cover" />
         <div className='.bottom-left'>
         <h5 className="card-title card-titStyle">
            {movie.Title} - {movie.Year}
          </h5>
         </div>
          </div>
          </Link>
      </div>
    );
  }
}

export default MovieCard;
