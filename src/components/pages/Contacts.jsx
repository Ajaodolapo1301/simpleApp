import React, { Component } from 'react';
import Contact from "./Contact"
import {Consumer} from "../../Context"


class Contacts extends Component {
   

    //  deleteContact= (id) =>{
    //      const {contacts} = this.state
    //      const newContacts = contacts.filter(contact=>contact.id !==id)

    //      this.setState({contacts: newContacts})
    //  }


    render() { 
    return(
        <Consumer>
            {value=>{
                const {contacts} = value
                console.log(contacts)
                return(                
                <React.Fragment>
                    <h1 style={{marginLeft:"40px"}}> <span className="text-danger">Contact </span>Manager</h1>
                {contacts.map(contact =>(
                    <Contact
                    key= {contact.id}
                    contact ={contact}
                    />
                ))}
            </React.Fragment>
        )
}}
        </Consumer>
    )
} 
}      
export default Contacts;
