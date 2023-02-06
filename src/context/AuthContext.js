import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "63e0739da2c7a9c34601219d", 
    fullName: "Brenton Andrews",
    email: "abc", 
    firstName: "brent", 
    lastName: "andrews",
  },
  // user: null,
  isFetching: false,
  error: false
}

// Create context with INITIAL_STATE as the default value.
export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {

  // Create initial state value with defaults and provide reducer function to modify state.
  const [ state, dispatch ] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
    value={{
      user: state.user,
      isFetching: state.isFetching,
      error: state.error,
      dispatch
    }}
    >
      { children }
    </AuthContext.Provider>
  )
}