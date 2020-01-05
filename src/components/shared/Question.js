import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Card,
  Button,
} from 'react-bootstrap'

const Question = (props) => {
  return (<Card
    style={{
      maxWidth: '400px',
      margin: '15px',
    }}>
    <Card.Img
      variant='top'
      src={props.author.avatarURL}/>
    <Card.Header>
      <Card.Title>{props.author.name}</Card.Title>
    </Card.Header>
    <Card.Body>
      <h3><strong>Would you rather</strong></h3>
      <p>{props.question.optionOne.text}?</p>
      <p>{props.question.optionTwo.text}?</p>
    </Card.Body>
    {!props.vote && (<Card.Footer>
      <Button
        as={Link}
        to={`/questions/${props.question.id}`}>
        Vote!
      </Button>
    </Card.Footer>)}
  </Card>)
}

const mapStateToProps = ({ users, questions }, { id }) => ({
  author: users[questions[id].author],
  question: questions[id],
})

export default connect(mapStateToProps)(Question)