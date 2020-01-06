import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleUserVote } from '../../actions/shared'
import PageNotFound from './PageNotFound'
import {
  Container,
  Col,
  Row,
  Card,
  Button,
  ProgressBar,
} from 'react-bootstrap'

class QuestionDetails extends Component {
  handleVote = (option) => (e) => {
    const { authedUser, question } = this.props
    this.props.dispatch(handleUserVote(authedUser.id, question.id, option))
  }
  
  render() {
    const {
      authedUser,
      question,
    } = this.props
    if(!authedUser)
      return <PageNotFound/>
    
    let answered = Object.keys(authedUser.answers)
      .includes(question.id)
    
    let opOneVotes = question.optionOne.votes.length
    let opTwoVotes = question.optionTwo.votes.length
    let totalVotes = opOneVotes + opTwoVotes
    let opOnePerc = Math.floor(opOneVotes / totalVotes * 100)
    let opTwoPerc = 100 - opOnePerc
    let option = authedUser.answers[question.id]
    let opOneSelected = option && option === 'optionOne' ? true : false

    return (<Container fluid>
      <Card
        style={{
          margin: '30px auto auto auto',
          width: '400px',
        }}>
        <Card.Img
          variant='top'
          src={this.props.author.avatarURL}/>
        <Card.Header>
          <Card.Title>Author: {this.props.author.name}</Card.Title>
        </Card.Header>
        <Card.Body
          align='center'>
          <h3>Would you rather..</h3>
          <Row>
            <Col
              align='center'>
              <p>{this.props.question.optionOne.text}?</p>
              {answered &&
                (<Col>
                  <ProgressBar
                  striped={opOneSelected}
                  variant={opOneSelected ? 'success' : 'info'}
                  style={{
                    margin: '15px'
                  }}
                  label={`${opOnePerc}%`}
                  now={opOnePerc}/>
                  <p>{opOneVotes} votes</p>
                </Col>)}
              {!answered &&
                (<Button
                  onClick={this.handleVote('optionOne')}>
                  Vote
                </Button>)}
            </Col>
            <Col
              align='center'>
              <p>{this.props.question.optionTwo.text}?</p>
              {answered &&
                (<Col>
                  <ProgressBar
                    striped={!opOneSelected}
                    variant={!opOneSelected ? 'success' : 'info'}
                    style={{
                      margin: '15px'
                    }}
                    label={`${opTwoPerc}%`}
                    now={opTwoPerc}/>
                  <p>{opTwoVotes} votes</p>
                </Col>)}
              {!answered &&
                (<Button
                  onClick={this.handleVote('optionTwo')}>
                  Vote
                </Button>)}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>)
  }
}

const mapStateToProps = ({users, questions, authedUserID}, {match}) => {
  console.log('Question Details')
  if(!authedUserID) return {validQuestionID: false}
  const qid = match.params.question_id
  
  return Object.keys(questions).includes(qid) ? {
    author: users[questions[qid].author],
    question: questions[qid],
    authedUser: authedUserID ? users[authedUserID] : null,
    validQuestionID: true,
  } : { validQuestionID: false }
}

export default connect(mapStateToProps)(QuestionDetails)