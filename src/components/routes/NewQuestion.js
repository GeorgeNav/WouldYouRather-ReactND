import React, { Component } from 'react'
import { Container, Button, Card, InputGroup, Form, FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../../actions/questions'
import { withRouter } from 'react-router-dom'

class NewQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      optionOneText: '',
      optionTwoText: '',
      author: props.authedUser
    }
  }

  submitQuestion = () => {
    this.props.dispatch(handleAddQuestion(this.state))
    this.props.history.push('/')
  }

  handleChange = (e) => {
    const value = e.target.value
    const option = e.target.name
    console.log(option, ': ', value)
    this.setState((prevState) => ({
      ...prevState,
      [option]: value
    }))
  }

  render() {
    return (<Container fluid>
      <Card
        style={{
          margin: '50px auto auto auto',
          maxWidth: '500px',
        }}
        className='justify-content-center'>
        <Card.Header>
          <Card.Title>Add your own question!</Card.Title>
        </Card.Header>
        <Card.Body>
          <h1>Would you rather..</h1>
          <Form>
            <InputGroup
              size='lg'
              style={{
                marginTop: '40px'
              }}>
              <InputGroup.Prepend>
                <InputGroup.Text>Option One</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type='textarea'
                name='optionOneText'
                value={this.state.optionOne}
                onChange={this.handleChange}/>
              <InputGroup.Append>
                <InputGroup.Text>?</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
            <InputGroup
              size='lg'
              style={{
                marginTop: '40px'
              }}>
              <InputGroup.Prepend>
                <InputGroup.Text>Option Two</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                type='textarea'
                name='optionTwoText'
                value={this.state.optionTwo}
                onChange={this.handleChange}/>
              <InputGroup.Append>
                <InputGroup.Text>?</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
            <Button
              onClick={this.submitQuestion}>Submit</Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>);
  }
}

const mapStateToProps = ({authedUserID}) => ({
  authedUser: authedUserID,
})

export default connect(mapStateToProps)(withRouter(NewQuestion))