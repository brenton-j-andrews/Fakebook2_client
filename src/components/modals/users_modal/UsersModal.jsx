// This modal displays information pertaining to users who like a specified post or comment.

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { Modal } from "react-bootstrap";

import "./users_modal.css";

const UsersModal = ({ 
    isPost, 
    likedItem, 
    displayModal, 
    setDisplayModal 
  }) => {

  const [ userArray, setUserArray ] = useState([]);

  // Effect: fetch user data upon opening modal and save to userArray state.
  useEffect(() => {
    const fetchUserData = async () => {
      if (isPost) {
        const response = await axios.get(`/post/${likedItem._id}/modal_data`);
        setUserArray(response.data);
      }
      else {
        const response = await axios.get(`/comment/${likedItem._id}/modal_data`);
        setUserArray(response.data)
      }  
    }

    fetchUserData();
  }, [ isPost, likedItem._id ])
  
  return (
    <Modal show={displayModal}>
      <Modal.Header>
        <Modal.Title> {isPost ? "Post " : "Comment " } Likes : { userArray.length } </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <ul className="modalUsersList">

        {userArray?.map((user, index) => {

          return (
            <li className="modalUserItem" key={ index }>

              <Link to={`/profile/${user.username}`} >
                <img 
                  className="modalUserProfileImage" 
                  src={ user.profileImageUrl 
                  ? ( user.profileImageUrl ) :
                  ("/assets/images/defaultProfileImage.png")} 
                  alt=""
                />
              </Link>
              
              <span className="leftSideBarFriendName"> {user.firstName} {user.lastName} </span>
            </li>
          )
          
        })}

        </ul>
      </Modal.Body>

      <Modal.Footer>
        <button onClick={() => {setDisplayModal(false)}}> Close </button>
      </Modal.Footer>
    </Modal>
  )
}

export default UsersModal;