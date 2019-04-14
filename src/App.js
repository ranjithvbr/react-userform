import React, { Component } from 'react';

import './App.css';


class App extends Component {
  constructor(probs){
    super(probs);
    this.Updatestate=this.Updatestate.bind(this);
    this.UpdateSubmit=this.UpdateSubmit.bind(this);

  }


  state={
    Name:"",
    Email:"",
    Address:"",
    Phone:"",
    Country:""
  }

  Updatestate(e){
    this.setState({
      [e.target.name]:e.target.value
    }

  );
  };

UpdateSubmit(){

  var url = 'https://5cb1e3cf6cda7b00148348c0.mockapi.io/fulltest';
var data = this.state;
console.log(JSON.stringify(this.state));

fetch(url, {
  method: 'POST',
  body: JSON.stringify(data),
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.then(response => {
  console.log(JSON.stringify(response));
      this.props.history.push('Userdata');

})
.catch(error => console.error('Error:', error));

}
  render() {
    const {Name,Email,Address,Phone,Country}=this.state
    return (
     <div>
      Name:<input type="text" name="Name" value={Name} onChange={this.Updatestate} /><br />
      Email:<input type="text" name="Email" value={Email} onChange={this.Updatestate} /><br />
      Address:<input type="text" name="Address" value={Address} onChange={this.Updatestate} /><br />
      Phone:<input type="text" name="Phone" value={Phone} onChange={this.Updatestate} /><br />
      Country:<input type="text" name="Country" value={Country} onChange={this.Updatestate} /><br />
      <button onClick={this.UpdateSubmit}>SUBMIT</button>

      </div>
    )
  }
}

export default App;
