import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// import CartItems from 'CartItems'
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    
    render = () => {
        return (
            <>
                <div style={{ color: 'white', backgroundColor: 'gray', padding: '20px', width:'100vw' }}>
                    BookStore
                    <div style={{display:'flex',float:'right'}}>
        <Button color="white" onClick={this.toggle}>{this.props.buttonLabel} Cart</Button>
        <Modal isOpen={this.state.modal} backdropTransition={{ timeout: 1300 }}
          toggle={this.toggle} className={this.props.className}>
          <ModalHeader  toggle={this.toggle}>Book Cart</ModalHeader>
          <ModalBody >
              <div style={{border: "1px solid black",overflowX:"scroll"}}>
              <div style={{border: "1px solid black", width:'7vw',height:'18vh'}}>
              <img src="https://via.placeholder.com/150 C/O https://placeholder.com/#"></img>
              </div>
              <p>title:</p>
              <p>discription:</p>
              <p>author:</p>
              
              </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
                </div>
            </>
        )
    }
}

export default Header
