import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isLoading: false,
  error: false
}

// Create context with INITIAL_STATE as the default value.
export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {

  // Create initial state value with defaults and provide reducer function to modify state.
  const [ state, dispatch ] = useReducer(AuthReducer, INITIAL_STATE);

  // // Check if user is already logged in via localStorage. If so, dispatch successful login with stored data.
  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem('user'));

  //   console.log("Are we in this useeffect?");
  //   if (user) {
  //     dispatch({ type: "LOGIN_SUCCESSFUL", payload: user });
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user))
  }, [ state.user ]);

  return (

    <AuthContext.Provider
    value={{
      user: state.user,
      isLoading: state.isFetching,
      error: state.error,
      dispatch
    }}
    >
      { children }
    </AuthContext.Provider>
  )
}