import React, { Component } from 'react';

class NotFound extends Component {
    render() { 
        return ( 
            <div>
            <h1 className="display-4"><span className="text-danger">404</span>  page not found</h1>
            <p className="lead">sorry,page does not exist</p>
            </div>
         );
    }
}
 
export default NotFound;
