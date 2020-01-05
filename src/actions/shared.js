import {
  getInitialData,
  saveQuestionAnswer,
} from '../utils/api'
import { receiveUsersAction } from '../actions/users'
import { receiveQuestionsAction } from '../actions/questions'
import { toggleUserVoteAction } from './users'
import { addVoteToQuestionAction } from './questions'

export const getDatabaseData = () =>
  (dispatch) =>
    getInitialData()
      .then(({users, questions}) => {
        dispatch(receiveUsersAction(users))
        dispatch(receiveQuestionsAction(questions))
      })

export const handleQuestionAnswer = ({authedUser, qid, answer}) =>
  (dispatch) => saveQuestionAnswer({authedUser, qid, answer})
      .then(() => {
        dispatch(getDatabaseData())
      })

export const handleUserVote = (voterID, questionID, option) => {
  return (dispatch) => {
    dispatch(toggleUserVoteAction(voterID, questionID, option))
    dispatch(addVoteToQuestionAction(voterID, questionID, option))
    saveQuestionAnswer({
      authedUser: voterID,
      qid: questionID,
      answer: option,
    })
  }
}