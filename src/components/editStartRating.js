import React,{Component} from 'react';
import StarRatings from 'react-star-ratings';
import axios from 'axios';
 
export default class EditStarRating extends Component {
    constructor(props){
        super(props);
        this.state={
            rating:props.rate,
            keppId:undefined
        }
    }
    changeRating=( newRating, name )=> {
        
      axios.patch('http://localhost:4000/movie/'+this.props.id,{
        rating:newRating
      }).then(()=>{
          
        this.setState({
            rating: newRating,
           
          });
          this.props.callParent();
      })
      let htm=document.querySelectorAll('input');
      htm.forEach((data,i)=>{
          console.log(data.value);
          data.value='';
      })
    }
    editRating=(e)=>{
        console.log(e.target.value);
        this.setState({keppId:e});
        
        let val=(e.target.value);
        if(val !=null && val !=undefined && val >='0' && val <'6' && val !=''){
           
            this.setState({
                rateValue:val
              });
            axios.patch('http://localhost:4000/movie/'+this.props.id,{
            rating:Number(val)
          }).then(()=>{
            axios.get('http://localhost:4000/movie/'+this.props.id).then((res)=>{
                this.setState({
                    rating: res.data.rating,
                    
                  });
                  
              })
           
                
              
          })
        }else{
            
              e.target.value='';
              
        }
        
    }
 
    render() {
     
      return (
          <React.Fragment>
        <StarRatings
          rating={this.state.rating}
          starRatedColor="blue"
          changeRating={this.changeRating}
          numberOfStars={5}
          name='rating'
          starDimension="25px"
          starSpacing="5px"
        />
             <input type="text"  id="starVal" placeholder="Rate" onChange={this.editRating.bind(this)} style={{height:'20px',width:'50px'}}/>
        </React.Fragment>
      );
    }
}