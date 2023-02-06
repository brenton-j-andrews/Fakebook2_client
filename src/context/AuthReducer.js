const AuthReducer = (state, action) => {

  switch (action.type) {

    case "LOGIN_START" :
      return {
        user: null,
        isLoading: true,
        error: null
      };

    case "LOGIN_SUCCESSFUL" : 
      return {
        user: action.payload,
        isLoading: false,
        error: null
      };

    case "LOGIN_FAILURE" :
      return {
        user: null,
        isLoading: false,
        error: true
      }
    
    default:
      return state
  }
}

export default AuthReducer;