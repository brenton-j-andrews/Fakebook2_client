// This modal will display information pertaining to users who like a specified post or comment and provide a link to their profile page.
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { Modal } from "react-bootstrap";

const UsersModal = ({ 
  isPost, 
  likedItem, 
  displayModal, 
  setDisplayCommentModal 
}) => {

  const [ userArray, setUserArray ] = useState([]);

  // Effect: fetch user data upon opening modal and save to userArray state.
  useEffect(() => {
    const fetchUserData = async () => {
      if (isPost) {
        console.log(`Im a post!`);
      }
      else {
        const response = await axios.get(`/comment/${likedItem._id}/modal_data`);
        setUserArray(response.data)
      }  
    }

    fetchUserData();

  }, [ isPost, userArray, likedItem._id ])
  
  return (
    <>
      <Modal show={displayModal}>
        <Modal.Header>
          <Modal.Title> {isPost ? "Post " : "Comment " } Likes : { likedItem.likes.length } </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ul className="leftSideBarFriendsList">

          {userArray?.map((user, index) => {

            return (
              <li className="leftSideBarFriendItem" key={ index }>

                <Link to={`/profile/${user.username}`} >
                  <img 
                    className="leftSideBarFriendImage" 
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
          <button onClick={() => {setDisplayCommentModal(false)}}> Close </button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UsersModal;