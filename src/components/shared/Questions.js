import React from 'react'
import Question from './Question'
import { Col, Row } from 'react-bootstrap'

const Questions = (props) => <Col
      style={{
        margin: '30px',
        textAlign: 'center',
        textJustify: 'center',
      }}>
      {props.show &&
        <Row
          className='justify-content-md-center'
          style={{padding: '15px'}}>
          {props.questions.map((id) =>
            <Question
              key={id}
              id={id} />)}
        </Row>}
    </Col>

export default Questions