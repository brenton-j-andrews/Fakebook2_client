import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useFriendRequest = () => {

  const { dispatch } = useContext(AuthContext);

  const sendFriendRequest = async (user, currentUser) => {

    const response = await axios.put(`/user/${user._id}/send_request`, {
      "userId" : currentUser._id
    });

    dispatch({ type: "SEND_FRIEND_REQUEST", payload: user._id });
    return response.data;
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

    dispatch({ type: "ACCEPT_FRIEND_REQUEST", payload: user._id });
  }

  return { sendFriendRequest, acceptFriendRequest };
}
