// Modal with form for updating user information, same on mobile and desktop.
import { useContext } from "react";
import { Modal, Form, Button } from "react-bootstrap";

import "../users_modal/users_modal.css";

import { AuthContext } from "../../../context/AuthContext";

import axios from "axios";

const UserUpdateModal = ({ displayModal, setDisplayModal }) => {

  const { user } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target);
    setDisplayModal(false);
  }

  return (
    <Modal show={displayModal}>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label> First Name: </Form.Label>
            <Form.Control type="text" placeholder={user.firstName}></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label> Last Name: </Form.Label>
            <Form.Control type="text" placeholder={user.lastName}></Form.Control>
          </Form.Group>
          
          <Form.Group>
            <Form.Label> Location: </Form.Label>
            <Form.Control type="text" placeholder={user.userData.location}></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label> Hometown: </Form.Label>
            <Form.Control type="text" placeholder={user.userData.hometown}></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label> Education: </Form.Label>
            <Form.Control type="text" placeholder={user.userData.education}></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label> Occupation: </Form.Label>
            <Form.Control type="text" placeholder={user.userData.occupation}></Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Update Information
          </Button>

          <Button variant="primary" onClick={() => {setDisplayModal(false)}} type="button">
            Close
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default UserUpdateModal;