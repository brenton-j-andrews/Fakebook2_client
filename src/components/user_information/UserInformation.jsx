import { useState, useEffect } from "react";
import { Breakpoint } from "react-socks";
import { Tooltip } from "react-tooltip";

import { Edit } from "@mui/icons-material";

import UserUpdateModal from "../modals/user_information/UserUpdateModal";

import "./user_information.css";

const UserInformation = ({ user, currentUser }) => {

  const [ showUserUpdateModal, setShowUserUpdateModal ] = useState(false);

  return (
    <div className="userInformationWrapper">
      <div className="userInformationItem">
        <span className="userInformationKey"> Location: </span>
        <span className="userInformationValue"> { user?.userData?.location } </span>
      </div>

      <div className="userInformationItem">
        <span className="userInformationKey"> Hometown: </span>
        <span className="userInformationValue"> { user?.userData?.hometown }</span>
      </div>

      <div className="userInformationItem">
        <span className="userInformationKey"> Education: </span>
        <span className="userInformationValue"> { user?.userData?.education } </span>
      </div>

      <div className="userInformationItem">
        <span className="userInformationKey"> Occupation: </span>
        <span className="userInformationValue"> { user?.userData?.occupation }</span>
      </div>


      {currentUser._id === user._id && 
        <> 
        <Breakpoint small down>
          <button 
          className="user_information_edit_button"
          onClick={() => {setShowUserUpdateModal(true)}}> Edit </button>
        </Breakpoint>
        <Breakpoint medium up>
          <Edit 
            onClick={() => {setShowUserUpdateModal(true)}}
            className="user_information_edit_icon"
            id="edit_user_information"
            data-tooltip-content="Edit Your Information."
          />
          <Tooltip anchorId="edit_user_information" />
        </Breakpoint>
        </>
      }    

      <UserUpdateModal 
        setDisplayModal={setShowUserUpdateModal}
        displayModal={showUserUpdateModal}
      />

    </div>
  )
}

export default UserInformation;