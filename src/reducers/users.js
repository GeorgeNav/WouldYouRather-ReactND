import {
  RECEIEVE_USERS,
  TOGGLE_USER_VOTE,
  ADD_USER_QUESTION,
} from '../actions/users'

export default function users(users = {}, action) {
  switch(action.type) {
    case RECEIEVE_USERS: {
      return {
        ...users,
        ...action.users,
      }
    } case TOGGLE_USER_VOTE: {
      let newUserInfo = Object.assign({}, users[action.userID])
      if(Object.keys(newUserInfo.answers).includes(action.questionID)) {
        delete newUserInfo.answers[action.questionID]
      } else {
        newUserInfo.answers[action.questionID] = action.option
      }
      return {
        ...users,
        [action.userID]: newUserInfo,
      }
    } case ADD_USER_QUESTION: {
      let newUserInfo = users[action.userID]
      newUserInfo.questions = newUserInfo.questions
        .concat(action.questionID)
      return {
        ...users,
        [action.userID]: newUserInfo
      }
    }
    default: return users
  }
}