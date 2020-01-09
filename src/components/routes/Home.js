import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import Questions from '../shared/Questions'
import { Col, Row } from 'react-bootstrap'

class Home extends Component {
  state = { unAnswered: true }

  render() {
    return <Col>
      <Row
        className= 'justify-content-center'>
        <Button
          style={{margin: '15px'}}
          onClick={ _ => this.setState(prevState => ({
            unAnswered: !prevState.unAnswered
          }))}>
          <h1
            style={{margin: '15px'}}>
            {this.state.unAnswered
              ? 'Show Answered'
              : 'Show Unanswered'}
          </h1>
        </Button>
      </Row>
      <Row
        className= 'justify-content-center'>
        {this.state.unAnswered
          ? <Questions
              show={this.state.unAnswered}
              title='Unanswered Questions'
              questions={this.props.unansweredQuestions} />
          : <Questions
              show={!this.state.unAnswered}
              title='Answered Questions'
              questions={this.props.answeredQuestions} />}
      </Row>
    </Col>
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