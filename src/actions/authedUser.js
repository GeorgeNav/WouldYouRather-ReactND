
export const LOG_IN_USER = 'LOG_IN_USER'
export const LOG_OUT_USER = 'LOG_OUT_USER'

export const logInUserAction = (id) => ({
  type: LOG_IN_USER,
  id,
})

export const logOutUserAction = (id) => ({
  type: LOG_OUT_USER,
  id,
})