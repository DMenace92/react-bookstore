import React, { Component } from 'react';
import {Container,Row} from 'reactstrap'
import Header from './component/Header'
// import SideBar from './component/SideBar'
import BookItem from './component/BookItem'
// import CartItems from './component/CartItems'




class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Container>
          
          <Row>
        
          <BookItem/>
          </Row>
        </Container>
      </div>
    );
  }
 
 
}

export default App;
