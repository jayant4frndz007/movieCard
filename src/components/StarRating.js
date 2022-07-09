import React,{Component} from 'react';
import StarRatings from 'react-star-ratings';

export default class StarRating extends Component {
    constructor(props){
        super(props);
        this.state={
            rating:2.5
        }
    }
    changeRating( newRating, name ) {
      this.setState({
        rating: 2.5
      });
    }
 
    render() {
      // rating = 2;
      return (
          <div>
        <StarRatings
          rating={this.props.rate}
          starRatedColor="black"
          numberOfStars={5}
          name='rating'
          starDimension="15px"
          starSpacing="5px"
        />
          </div>
        
      );
    }
}