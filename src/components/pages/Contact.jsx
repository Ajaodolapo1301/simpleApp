import React, { Component } from 'react';
import {Consumer} from "../../Context"
import axios from "axios"
import {Link} from "react-router-dom"
class Contact extends Component {
    state = {
        showDetails: true
    }
       
    // methods for click events
    deleteContact = ( id, dispatch) =>{
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res=> dispatch({type: "DELETE_CONTACT",payload: id}))
       
    }
    
    
  
  
    render() { 
        // requiring the props
    const {id, name, email, phone}= this.props.contact
    const {showDetails} = this.state
 
   return ( 
        <Consumer>
            {value=>{
                const  {dispatch} = value
               return(
                <div className="container">
          <div className="card card-body mb-3">
            <h4>
                {name} {" "}
                <i onClick={()=>this.setState({showDetails: !this.state.showDetails})} 
                className="fas fa-sort-down"
                style={{cursor:"pointer"}}
                ></i>
                <i onClick={this.deleteContact.bind(this, id, dispatch)}
                className="fas fa-times" 
                style={{cursor:'pointer', 
                float: "right", color: "red"}}></i>
                
                <Link to={`/contact/edit/${id}`}>
                <i className="fas fa-pencil-alt"
                style={{
                    cursor:"pointer",
                    float:"right",
                    color: "black",
                    marginRight: "1rem"
                }}
                ></i>
                </Link>
            </h4>
            {   /* collapsing form */}
                {showDetails ? ( <ul className=" list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
              </ul>):null}
               
          </div>
          </div>
               ) 
            }}

        </Consumer>
            
    )    
    }
}
 

// Contacts.propTypes = {
//     name: propTypes.string.isRequired,
//     email: propTypes.string.isRequired,
//     phone: propTypes.string.isRequired
// }

export default Contact;

