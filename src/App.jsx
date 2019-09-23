import React, { Component } from 'react';
import Header from "./components/layouts/Header"
import Contacts from "./components/pages/Contacts"
import AddContact from "./components/pages/AddContact"
import EditContact from "./components/pages/EditContact"
import About from "./components/pages/About"
import NotFound from "./components/pages/NotFound"
import {Provider} from "./Context"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <Provider>
                    <Router basename={process.env.PUBLIC_URL}>
                        <div>
                        <Header/>
                    <Switch>
                        <Route exact path = "/" component={Contacts} />
                       <Route exact path ="/contact/add" component={AddContact} />
                       <Route exact path ="/contact/edit/:id" component={EditContact} />
                       <Route exact path ="/about" component={About} />
                       <Route component={NotFound} />
                    </Switch>

                    </div>
                </Router>
            </Provider>
         );
    }
}
 
export default App;