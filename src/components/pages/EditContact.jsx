import React, { Component } from 'react';
import {Consumer} from "../../Context"
import axios from 'axios';
// import uuid from "uuid"


class EditContact extends Component {
    state = {  
        name: " ",
        email: " ",
        phone: " "
    }


    async componentDidMount(){
        const {id} = this.props.match.params
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        const contact = res.data
        
        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone

        })
    }


    //    event method 
    onChange=(e)=>this.setState({[e.target.name]:e.target.value})

   
    onSubmit= async (dispatch , e)=>{
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
      
    // updating
    const UpdContact ={
        name, 
        email,
        phone
    }
    const {id} = this.props.match.params
     const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, UpdContact)         
      dispatch({type: "UPDATE_CONTACT", payload:res.data})
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
                        <button className=" btn btn-lg btn-block">Update</button>
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
 
export default EditContact;
