import { combineReducers } from 'redux'
import authedUserID from './authedUser'
import users from './users'
import questions from './questions'

export default combineReducers({
  authedUserID,
  users,
  questions,
})
