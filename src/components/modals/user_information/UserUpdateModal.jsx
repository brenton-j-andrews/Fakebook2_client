// Modal with form for updating user information, same on mobile and desktop.

import { Modal } from "react-bootstrap";

import "../users_modal/users_modal.css";

const UserUpdateModal = ({ displayModal, setDisplayModal }) => {

  return (
    <Modal show={displayModal}>
      <Modal.Header> This will be the user update modal! </Modal.Header>

      <Modal.Footer>
        <button onClick={() => {setDisplayModal(false)}}> Close </button>
      </Modal.Footer>
    </Modal>
  )
}

export default UserUpdateModal;