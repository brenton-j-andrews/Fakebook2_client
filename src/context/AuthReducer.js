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
      };
    
    case "LOG_OUT" :

      return {
        user: null,
        isLoading: false,
        error: null
      };

    case "SEND_FRIEND_REQUEST" : 
      return {
        ...state,
        user : {
          ...state.user,
          sentFriendRequests : [ ...state.user.sentFriendRequests, action.payload ]
        }
      }
    
    case "ACCEPT_FRIEND_REQUEST" :
      return {
        ...state,
        user : {
          ...state.user,
          friends : [ ...state.user.friends, action.payload ],
          receivedFriendRequests : state.user.receivedFriendRequests.filter(
            (userId) => userId !== action.payload
          )
        }
      }
    
    case "DECLINE_FRIEND_REQUEST" :
      return {
        ...state,
        user : {
          ...state.user,
          receivedFriendRequests : state.user.receivedFriendRequests.filter(
            (userId) => userId !== action.payload
          )
        }
      }
    
    case "UNFRIEND_USER" :
        return {
          ...state,
          user : {
            ...state.user,
            friends : state.user.friends.filter(
              (userId) => userId !== action.payload 
            )
          }
        }
    
    default:
      return state
  }
}

export default AuthReducer;
