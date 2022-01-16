import React, { Component } from 'react';


import { connect } from 'react-redux';

import {
  searchMovie,
  fetchMovies,
  setLoading
} from '../../actions/searchActions';


import "./NavStyle.css";

export class SearchForm extends Component {
  onChange = e => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };

  render() {
    return (
      <div className="Navstyle">
        <div className=" navcnt">
          <h1 className="display-4 mb-3">
            <i className="fa fa-film" aria-hidden="true" /> My WatchList
          </h1>
          <p>Search To add movies or TV shows to your WatchList</p>
          <form id="searchForm" onSubmit={this.onSubmit}>
          <div class="fontuser">
            <input
              type="text"
              className="form-control in"
              name="searchText"
              placeholder="Search for a Movies, TV Show ..."
              onChange={this.onChange}
            />
           <i class="fa fa-plus" aria-hidden="true" />
            </div>
          </form>
        </div>
     
      </div>

    );
  }
}

const mapStateToProps = state => ({
  text: state.movies.text
});

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies, setLoading }
)(SearchForm);
