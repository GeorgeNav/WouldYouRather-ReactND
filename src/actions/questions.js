import { saveQuestion } from '../utils/api'
import { addUserQuestionAction } from '../actions/users'

export const RECEIEVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_VOTE_TO_QUESTION = 'ADD_VOTE_TO_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export const receiveQuestionsAction = (questions) => ({
  type: RECEIEVE_QUESTIONS,
  questions,
})

export const addVoteToQuestionAction = (voterID, questionID, option) => ({
  type: ADD_VOTE_TO_QUESTION,
  voterID,
  questionID,
  option,
})

export const addQuestionAction = (question) => ({
  type: ADD_QUESTION,
  question,
})

export const handleAddQuestion = (question) =>
  (dispatch) => 
    saveQuestion(question)
      .then((formattedQuestion) => {
        dispatch(addUserQuestionAction(formattedQuestion.author, formattedQuestion.id))
        dispatch(addQuestionAction(formattedQuestion))
      })