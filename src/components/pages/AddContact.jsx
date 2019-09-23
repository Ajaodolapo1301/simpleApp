import React, { Component } from 'react';
import {Consumer} from "../../Context"
import axios from 'axios';
// import uuid from "uuid"


class AddContact extends Component {
    state = {  
        name: " ",
        email: " ",
        phone: " "
    }
    //    event method 
    onChange=(e)=>this.setState({[e.target.name]:e.target.value})

   
    onSubmit=  (dispatch , e)=>{
        e.preventDefault();  
        const {name, email,phone} = this.state
               
        //   Error checking
                if (name==="") {
                    this.setState({error:{name: "name is req"}});
                    return
                };
                if (email==="") {
                  this.setState({error:{email: "name is req"}});
                  return
              };
              if (phone==="") {
                  this.setState({error:{phone: "name is req"}});
                  return
              };
      
        const newContact= {
            name,
            email, 
            phone,
            // id: uuid()
        } 
       
        axios.post(`https://jsonplaceholder.typicode.com/users`, newContact)
        .then(res=> dispatch({type: "ADD_CONTACT", payload:res.data}))

        // clearing the state
        this.setState({
            name: " ",
            email: " ",
            phone: " "
        })

       
// redirecting back to homepage
        this.props.history.push("/")
    }

   
   
   
    render() { 
        const {name,email, phone} = this.state
       
        return (
            <Consumer>
                {value=>{
                    const {dispatch} = value
                    return(
                        <div className="container">
                <div className="card mb-3">
                <div className=" card-header">Add  Contact</div>
                  <div className=" card-body">
                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                        {/* name */}
                        <div className="form-group">
                           <label htmlFor="name">Name</label> 
                        <input type="text"
                        name="name"
                         placeholder="name"
                         className="form-control form-control-lg" 
                         value={name} 
                         onChange={this.onChange}
                         />
                        </div>
                        
                        {/* email */}
                        <div className="form-group">
                           <label htmlFor="email">Email</label> 
                        <input type="email" 
                        name="email"
                        placeholder="email" 
                        className="form-control form-control-lg" 
                        value={email} 
                        onChange={this.onChange}
                        />
                        </div>
                        
                        {/* phone */}
                        <div className="form-group">
                           <label htmlFor="phone">Phone</label> 
                        <input type="text" 
                        name="phone"
                        placeholder="phone Number" 
                         className="form-control form-control-lg"
                         value={phone} 
                        onChange={this.onChange} 
                        />
                        </div>
                        <button className=" btn btn-lg btn-block">Submit</button>
                    </form>
                </div>  

            </div>
            </div>

                    )
                }}
            </Consumer>
        )
       
       
       
    
    }
}
 
export default AddContact;
