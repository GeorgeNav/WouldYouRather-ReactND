import React, { Component } from 'react'
import Question from './Question'
import { Col, Row, Button } from 'react-bootstrap'

class Questions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: props.show
    }
  }

  toggleShow = () => {
    this.setState((prevState) =>
      ({show: !prevState.show}))
  }

  render() {
    return (<Col
      style={{
        margin: '30px',
        textAlign: 'center',
        textJustify: 'center',
      }}>
      <Button
        style={{
          margin: '15px',
        }}
        onClick={this.toggleShow}>
        <h1
          style={{
            margin: '15px',
          }}>
          {this.props.title}
        </h1>
      </Button>
      {this.state.show && (<Row
        className='justify-content-md-center'
        style={{padding: '15px'}}>
        {this.props.questions.map((id) =>
          (<Question
            key={id}
            id={id} />))}
      </Row>)}
    </Col>)
  }
}

export default Questions