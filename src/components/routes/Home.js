import React, { Component } from 'react'
import { connect } from 'react-redux'
import Questions from '../shared/Questions'
import { Row } from 'react-bootstrap'
import PageNotFound from './PageNotFound';

class Home extends Component {
  render() {
    return (<Row>
      <Questions
        show={true}
        title='Unanswered Questions'
        questions={this.props.unansweredQuestions} />
      <Questions
        show={false}
        title='Answered Questions'
        questions={this.props.answeredQuestions} />
    </Row>);
  }
}

const mapStateToProps = ({ users, questions, authedUserID }) => {
  if (!questions || !users || !authedUserID)
    return {
      answeredQuestions: [],
      unansweredQuestions: [],
    }

  let authedUser = users[authedUserID]
  let answers = Object.keys(authedUser.answers)

  let answeredQuestions = Object.values(questions)
    .filter((q) => answers.includes(q.id))
  let unansweredQuestions = Object.values(questions)
    .filter((q) => !answers.includes(q.id))

  console.log('Answered: ', answeredQuestions)
  console.log('Unanswered: ', unansweredQuestions)

  return {
    answeredQuestions: answeredQuestions.sort((a, b) =>
      b.timestamp - a.timestamp).map((q) => q.id),
    unansweredQuestions: unansweredQuestions.sort((a, b) =>
      b.timestamp - a.timestamp).map((q) => q.id),
  }
}

export default connect(mapStateToProps)(Home)