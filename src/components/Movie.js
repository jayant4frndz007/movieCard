import React,{Component} from 'react';
import StarRating from './StarRating';
import axios from 'axios';
import '../movie.css';
import EditStarRating from './editStartRating';


const styleData={
    main:{
        
        display:'flex',
        flexWrap: 'wrap',
       },
    card:{
        width:'320px',
        margin:'30px',
        boxShadow: '1px 1px 1px 4px #f2f2f2',
        
    },
    waterData:{
        position:'absolute',
        },
    buttonAlign:{
        marginLeft:'120px'
    }
}
export default class Movie extends Component {
    constructor(props){
        super(props);
        this.state={
            movies:[],
            showData:'none',
            editData:'none'
        }
    }
    componentDidMount(){
        axios.get('http://localhost:4000/movie').then((res)=>{
                console.log(res);
                this.setState({movies:res.data});
        })
    }
    changeReview=(id,e)=>{
       
    }
    showData=(id,e)=>{
        console.log(id)
        document.getElementById(id+'').style.display='';
    }
    
    hideData=(id,e)=>{
        console.log(id)
        document.getElementById(id+'').style.display='none';
    }
    editData=(id,e)=>{
        console.log(id);
        document.getElementById(id+'').style.display='';
    }
    hideEditData=(id,e)=>{
        document.getElementById(id+'').style.display='none';
        this.callReload(id);
    }
    callReload=(id)=>{
        axios.get('http://localhost:4000/movie').then((res)=>{
            console.log(res);
            this.setState({movies:res.data});
            document.getElementById(id+'').style.display='none';
    })  
    }
    imgaeload=(img)=>{
        console.log(img)
        alert(img)
      // return  img;
    }
    render() {
      // rating = 2;
      return (
          <React.Fragment>
              <div style={styleData.main}>
              {
                  
                    this.state.movies.map((data,i)=>{
                        const img=data.url;
                       return(<React.Fragment  >
                            <div className="card" style={styleData.card}>
                               
                                    <img className="card-img-top" src={(data.url)} alt="Card image cap" width={'320px'} height={'200px'} />
                                    <div className="card-body" >
                                        <div style={{height:'150px',padding:'5px'}}>
                                        <h4 className="card-title">{data.movieName}</h4>
                                        <h5 className="card-title">{data.subName}</h5>
                                        <p className="card-text">{data.desc}</p>
                                        </div>
                                        <div className="well bg-light " style={{marginBottom:'0px',display:'flex'}} onMouseOver={this.showData.bind(this,data.id)} onMouseLeave={this.hideData.bind(this,data.id)} >
                                            <div className="modalData" style={{display: this.state.editData}} id={data.movieName+''+data.id} onMouseLeave={this.hideEditData.bind(this,data.movieName+''+data.id)}>
                                            <EditStarRating rate={data.rating}  value1={0} id={data.id+''} callParent={this.callReload.bind(this,data.movieName+''+data.id)}/>
                                            
                                            </div>
                                            <StarRating rate={data.rating}/>
                                            <div  className="waterData" id={data.id} style={{display:this.state.showData}}>
                                                <button className="btn btn-sm btn-primary" style={styleData.buttonAlign} onClick={this.editData.bind(this,data.movieName+''+data.id)} >Edit</button></div>
                                            <span class="badge" style={{marginLeft:'120px',backgroundColor:'#4db8ff'}}>{data.rating}</span>
                                        </div>
                                       
                                    </div>
                            </div>
                             
                        </React.Fragment>) 
                        
                    })
                
                   
              }
              </div>
                
          </React.Fragment>
        
      );
    }
}