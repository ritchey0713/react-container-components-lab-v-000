import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      reviews: [],
      searchTerm: " "
    };
  }


  handleInput = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(URL.concat(this.state.searchTerm))
    .then(resp => resp.json())
    .then(reviews => this.setState({ reviews: reviews.results }))
  }


  render(){
    return(
      <div className="searchable-movie-reviews">
      <form onSubmit={this.handleSubmit}>
      <input type="text" onChange={this.handleInput}></input>
      <input type="submit"></input>
      </form>
      <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
