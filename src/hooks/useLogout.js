import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useLogout = () => {

  const { dispatch } = useContext(AuthContext);

  const logout = () => {

    // Remove user from localstorage.
    localStorage.removeItem("user");

    // Dispatch logout action.
    dispatch({type: "LOG_OUT" });
  }

  return { logout };
}