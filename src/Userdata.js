import React, { Component } from 'react';


 class Userdata extends Component{
   state={
     Name:"",
     Email:"",
     Address:"",
     Phone:"",
     City:"",
     Country:""
   };


   componentDidMount(){
     fetch('https://5cb1e3cf6cda7b00148348c0.mockapi.io/fulltest/3')
  .then(response => {
    return response.json();
  })
  .then(myJson => {
        this.setState(myJson)
  });
   }

   render(){
     const{Name,Email,Address,Phone,Country}=this.state
     return(
       <div>
      Name:{Name} <br/>
      Email:{Email} <br/>
      Address:{Address} <br/>
      Phone:{Phone} <br/>
      Country:{Country} <br/>
      </div>
     )
   }
 }

export default Userdata;
