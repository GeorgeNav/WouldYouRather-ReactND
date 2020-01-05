import {
  RECEIEVE_QUESTIONS,
  ADD_VOTE_TO_QUESTION,
  ADD_QUESTION,
} from '../actions/questions'

export default function questions(questions = {}, action) {
  switch(action.type) {
    case RECEIEVE_QUESTIONS: {
      return {
        ...questions,
        ...action.questions,
      }
    } case ADD_VOTE_TO_QUESTION: {
      let newQuestionInfo = Object.assign({}, questions[action.questionID])
      newQuestionInfo[action.option].votes = newQuestionInfo[action.option].votes.concat(action.voterID)
      return {
        ...questions,
        [action.questionID]: newQuestionInfo,
      }
    } case ADD_QUESTION: {
      console.log('new question')
      return {
        ...questions,
        [action.question.id]: action.question,
      }
    } default: return questions
  }
}