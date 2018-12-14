import React, { Component } from 'react';
import {Container,Row} from 'reactstrap'
import Header from './component/Header'
// import SideBar from './component/SideBar'
import BookItem from './component/BookItem'
// import CartItems from './component/CartItems'




class App extends Component {
  // state = {
  //   bookCart:[]
  //   total:0,
  //   form:{
  //     quantity:"1"
  //     selectBookId: "0"
    // }
  // }
  render() {
    return (
      <div className="App">
        <Container>
          <Header/>
          <Row>
          {/* <CartItems/> */}
        
          <BookItem/>
          </Row>
        </Container>
      </div>
    );
  }
 
 
}

export default App;
