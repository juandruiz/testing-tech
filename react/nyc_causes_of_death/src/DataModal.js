import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class DataModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div style={{ marginTop: "33px" }}>
        <Button variant="primary" onClick={this.handleShow}>
          See More Details
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>NYC Leading Causes of Death</Modal.Title>
          </Modal.Header>
          <Modal.Body> {this.props.table}</Modal.Body>
          <Modal.Footer />
        </Modal>
      </div>
    );
  }
}

export default DataModal;
