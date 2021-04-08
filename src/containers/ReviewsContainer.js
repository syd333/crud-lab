import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput 
        addReview={this.props.addReview} 
         restaurantId={this.props.restaurant.id}
         />
        <Reviews 
        reviews={this.props.reviews}
        deleteReview={this.props.deleteReview}
         restaurantId={this.props.restaurant.id}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

const mapStateToDispatch = dispatch => ({
  addReview: data => dispatch({type: 'ADD_REVIEW', payload: data}),
  deleteReview: id => dispatch({type: 'DELETE_REVIEW', payload: id})
})

export default connect(mapStateToProps, mapStateToDispatch)(ReviewsContainer);
