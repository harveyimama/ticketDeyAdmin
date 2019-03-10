import React, {Component} from "react";
import {Component} from  "Login";  
import {Component} from  "Dashboard";  

class App extends Component { 
 s
    constructor() {
        super();
        this.state = {
            islogggedin: false
        };
    }


    render() {
        if (this.state.islogggedin) {
                return <body><Dashboard/></body>;
       
        } else {
            return <body><Login/></body>;
        }
    }

}

export default App;