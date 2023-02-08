import { createContext, useReducer, useEffect } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: null,
  isLoading: false,
  error: false
}

// Create context with INITIAL_STATE as the default value.
export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {

  // Create initial state value with defaults and provide reducer function to modify state.
  const [ state, dispatch ] = useReducer(AuthReducer, INITIAL_STATE);

  
  // // Save fetched user to localStorage. 
  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(state.user))
  //   console.log(`CONTEXT IS CHANGING DUDE!!!`);
  // }, [state.user]);

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