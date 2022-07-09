import React,{Component} from 'react';

const styleMedia={
    navi:{
        height:'70px',
        backgroundColor:'black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
       
       
    },
    content:{
        marginLeft:'500px',
        color:'white',
        fontSize:'24px'
    }
}

export default class Header extends Component {
    constructor(props){
        super(props);
    
    }
    
 
    render() {
     
      return (
          <React.Fragment>
              <div class="container-fluid">
              <h2>Movie App</h2>
             <div style={styleMedia.navi}>
             <a class="navbar-brand" style={styleMedia.content} href="#"><i class="fa fa-film" style={{fontSize:"24px"}}></i>&nbsp;React Movie Cards</a>
                               
                                </div>
             </div>
          </React.Fragment>
        
      );
    }
}