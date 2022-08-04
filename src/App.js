import React, { Component } from "react";
import {Auth} from './authsample'

class App extends Component {
   
  render(){
     
    return(
        <h1>client name : {Auth.clientName}<br></br>
        client age:{Auth.clientage}</h1>
         
        
    )
  }


}

export default App;