export const LoginStart = () => ({
  type: "LOGIN_START"
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SULOGIN_SUCCESSFUL",
  payload: user
})

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
})