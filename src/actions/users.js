
export const RECEIEVE_USERS = 'GET_USERS'
export const TOGGLE_USER_VOTE = 'TOGGLE_USER_VOTE'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'

export const receiveUsersAction = (users) => ({
  type: RECEIEVE_USERS,
  users: users,
})

export const toggleUserVoteAction = (userID, questionID, option) => ({
  type: TOGGLE_USER_VOTE,
  userID,
  questionID,
  option,
})

export const addUserQuestionAction = (userID, questionID) => ({
  type: ADD_USER_QUESTION,
  userID,
  questionID,
})