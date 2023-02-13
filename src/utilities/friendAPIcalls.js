import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";


// Functions that call routes associated with friend status between two users.
const SendFriendRequest = async (user, currentUser) => {

  const { dispatch } = useContext(AuthContext);

  try {
    const response = await axios.put(`/user/${user._id}/send_request`, {
      "userId" : currentUser._id
    });

    dispatch({ type: "SEND_FRIEND_REQUEST", payload: user._id })
    return response;
  }
  catch (error) {
    console.log(error);
  }
}

const acceptFriendRequest = async (user, currentUser) => {
  try {
    await axios.put(`/user/${user._id}/accept_request`, {
      "userId" : currentUser._id
    })
  }
  catch (error) {
    console.log(error);
  }
}

const unfriendUser = async (user, currentUser) => {

  try {
      await axios.put(`/user/${user._id}/unfriend`, {
      userId : currentUser._id
    });
  }

  catch (error) {
    console.log(error);
  }
} 


export { SendFriendRequest, acceptFriendRequest, unfriendUser };