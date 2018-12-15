import React, { Component } from 'react';
import {Container,Row} from 'reactstrap'
import Header from './component/Header'
// import SideBar from './component/SideBar'
import BookItem from './component/BookItem'





class App extends Component {
  render() {
    return (
      <div className="App">
      <div class="Row" style={{marginRight:'29vw'}}>
        <Header/>
        <Container>
          
          <Row>
        
          <BookItem/>
          </Row>
        </Container>
        </div>
      </div>
    );
  }
 
 
}

export default App;
