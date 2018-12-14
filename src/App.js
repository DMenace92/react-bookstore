import React, { Component } from 'react';
import {Container} from 'reactstrap'


import Header from './component/Header'




class App extends Component {
  state = {
    bookCart:[]
    total:0,
    form:{
      quantity:"1"
      selectBookId: "0"
    }
  }
  render() {
    return (
      <div className="App">
        <Container>
          <Header/>
        </Container>
      </div>
    );
  }
}

export default App;
