import React, {Component} from "react";
import {Component} from  "Login";  
import {Component} from  "Dashboard";  

class App extends Component { 
 s
    constructor() {
        super();
        this.state = {
            islogggedin: false,
            sessionid: "",
            roleid: 0
        };
    }


    render() {
        if (this.state.islogggedin) {
                return <body><Dashboard sessionid={this.state.sessionid}  roleid = {this.state.roleid}/></body>;
       
        } else {
            return <body><Login sessionid={this.state.sessionid}  roleid = {this.state.roleid} /></body>;
        }
    }

}

export default App;