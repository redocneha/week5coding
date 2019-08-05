import React,{Component} from 'react';
import Axios from 'axios';
import {BrowserRouter as Router , Route ,Link} from 'react-router-dom';

import User from './User';
class  UserDetails extends Component {
    constructor()
    {
        super();
        this.state={ users:[
            ]
           
    }
}
    componentDidMount()
    {
        let {id}=this.props.match.params;
        console.log(`Component is mounted on the DOM`);
        Axios.get('http://localhost:8000/api/movies/'+id)
            .then(res=> this.setState({
                
                 users:res.data.data
            })
          
            )
            
           
       
    }
    render()
    {
        
    
        return(
            <div>
                    <h1>Movie Details</h1>
                    <div className="card" style={{width: 18 +'rem', margin:10+'px'}}>
                    <div className="card-body">
                    <h3>MOVIENAME</h3> <h5 className="card-title">{this.state.users.name}</h5>
                   <h3>MOVIEID</h3> <p className="card-title">{this.state.users._id}</p>
                   <h3>REVIEW</h3> <p className="card-title">{this.state.users.review}</p>
                   <h3>ACTOR</h3> <p className="card-title">{this.state.users.actor}</p>
                   <h3>ACTRESS</h3> <p className="card-title">{this.state.users.actress}</p>
                   <h3>DURATION</h3> <p className="card-title">{this.state.users.duration}</p>
                   <Link className="btn-btn-primary" to="/movies">Back</Link>
                   
                    </div>
                </div>

            </div>
        )
    }
    }

  
  export default UserDetails;