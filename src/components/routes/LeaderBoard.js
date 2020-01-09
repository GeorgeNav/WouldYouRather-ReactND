import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Image, Container, Card } from 'react-bootstrap'

const LeaderBoard = (props) => <Container fluid
  style={{
    marginTop: '50px'
  }}>
  {props.users.map((user) => <Card key={user.id}>
    <Card.Header>
      <Card.Title>{user.name}</Card.Title>
    </Card.Header>
    <Card.Body>
      <Row>
        <Image
          style={{
            display: 'block',
            margin: '0 auto 0 auto',
            maxHeight: '200px',
            objectFit: 'cover',
          }}
          src={user.avatarURL}/>
        <Col
          style={{
            textJustify: 'center',
            textAlign: 'center',
          }}>
          <Card>
            <h3>Questions Answered</h3>
            <h4>{Object.keys(user.answers).length}</h4>
          </Card>
          <Card>
            <h3>Questions</h3>
            <h4>{user.questions.length}</h4>
          </Card>
        </Col>
        <Col
          style={{
            textJustify: 'center',
            textAlign: 'center',
          }}>
          <h2>Score</h2>
          <h3>{user.questions.length + Object.keys(user.answers).length}</h3>
        </Col>
      </Row>
    </Card.Body>
  </Card>)}
</Container>

const mapStateToProps = ({users}) => ({
  users: Object.values(users).sort((ub, ua) => {
    let ubCount = ub.questions.length + Object.keys(ub.answers).length
    let uaCount = ua.questions.length + Object.keys(ua.answers).length
    return uaCount - ubCount
  })
})

export default connect(mapStateToProps)(LeaderBoard)