import React,{Component} from 'react';

import User from './User';
import Axios from 'axios';
import {BrowserRouter as Router , Route ,Link} from 'react-router-dom';
class AddMovie extends Component{
    

    constructor(props)
    {
        super(props);
        this.state={
		     name:'',
			 _id:'',
             review:'',
             actor:'',
             actress:'',
             duration:''
            
           
    };
        console.log('called from const');
        
        this.handleInputChange=this.handleInputChange.bind(this);
       this.handleSubmit=this.handleSubmit.bind(this);

    }
	
    
 
 
 handleInputChange(event){
     const target=event.target;
     const value=target.value;
	 const name=target.name;
	
	 this.setState({
	 [name]:value});
	 
 }
  
 handleSubmit(){
	let movie={
	    name:this.state.name,
		_id:this.state._id,
        review:this.state.review,
        actor:this.state.actor,
        actress:this.state.actress,
        duration:this.state.duration
    }
	Axios.post("http://localhost:8000/api/movies",movie).then(res=>(console.log(res)));
	 
	 
 }
   
    render(){
    
    
    
    return (
      
        
        
        <div className="left">
	    <form onSubmit={this.handleSubmit}>
		<h1>AddMovies</h1>
		<h4>Name:<input type="text" name="name" value={this.state.name} onChange={this.handleInputChange}></input></h4>
        <h4>Id:<input type="text" name="_id" value={this.state._id} onChange={this.handleInputChange}></input></h4>
        <h4>Review:<input type="text" name="review" value={this.state.review} onChange={this.handleInputChange}></input></h4>
        <h4>Actor:<input type="text" name="actor" value={this.state.actor} onChange={this.handleInputChange}></input></h4>
        <h4>Actress:<input type="text" name="actress" value={this.state.acttress} onChange={this.handleInputChange}></input></h4>
        <h4>Duration:<input type="text" name="duration" value={this.state.duration} onChange={this.handleInputChange}></input></h4>

        <input type="submit" name="submit" value="SUBMIT"></input>
		<input type="reset" name="reset" value="RESET"></input>
		
     </form>
             <Link className="btn-btn-primary" to="/movies">Back</Link>
               </div>
          
       
    );
}
}

export default AddMovie;