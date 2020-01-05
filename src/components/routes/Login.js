import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Accordion, Button, Figure } from 'react-bootstrap'
import { logInUserAction } from '../../actions/authedUser'

const Login = (props) => {
  return (<Card
    style={{
      margin: '50px'
    }}>
    <Card.Header
      align='center'>
      <Card.Title>Choose a user!</Card.Title>
    </Card.Header>
    <Card.Body>
      <Accordion>
        {props.users.map((user) =>
        (<Card
          key={user.id}>
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant='link'
              eventKey={user.id}>
              <h3>{user.name}</h3>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse
            eventKey={user.id}>
            <Card.Body
              align='center'>
              <Figure>
                <Figure.Image
                  width={300}
                  height={300}
                  src={user.avatarURL}/>
                <Figure.Caption>
                  <Button
                    onClick={(_) => {
                      props.dispatch(logInUserAction(user.id))
                    }}
                    as={Link}
                    to='/home'>
                    Login!
                    </Button>
                </Figure.Caption>
              </Figure>
            </Card.Body>
          </Accordion.Collapse>
        </Card>))}
      </Accordion>
    </Card.Body>
  </Card>)
}

const mapStateToProps = ({users, authedUserID}) => ({
  users: Object.values(users),
  authedUserID
})
 
export default connect(mapStateToProps)(Login)