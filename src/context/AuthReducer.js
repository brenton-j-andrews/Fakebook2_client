const AuthReducer = (state, action) => {

  switch (action.type) {

    case "LOGIN_START" :
      return {
        user: null,
        isFetching: true,
        error: null
      };

    case "LOGIN_SUCCESSFUL" : 
      return {
        user: action.payload,
        isFetching: false,
        error: null
      };

    case "LOGIN_FAILURE" :
      return {
        user: null,
        isFetching: false,
        error: true
      }
    
    default:
      return state
  }
}

export default AuthReducer;