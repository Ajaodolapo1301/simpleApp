import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Headers extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                    <nav className="navbar navbar-expand-md navbar-dark bg-danger mb-4">
                <div className="container">   
                            <Link to="/" className="navbar-brand">
                            contactManager
                            </Link>
                </div>
                <ul className="navbar-nav mr-auto">
                   <li className="nav-item">
                    <Link to="/" className="nav-link"> <i className="fas fa-home"></i>Home</Link>    
                    </li>
                    <li>
                    <Link to="/contact/add" className="nav-link"><i className="fas fa-plus"></i>Add
                    
                    </Link>                 
                    </li>
                    <li>
                    <Link to="/about" className="nav-link"> <i className="fas fa-question"></i>About
                    
                    </Link>                
                    </li>
                    
                     
                </ul>
            </nav>

            </div>
         );
    }
}
 
export default Headers
