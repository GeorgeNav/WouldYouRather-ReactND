import React from 'react'
import { Card } from 'react-bootstrap'

const FourZeroFour = (props) => {
  return (<Conatiner fluid>
    <Card
      style={{
        margin: '30px auto auto auto',
        width: '400px',
      }}>
      <Card.Header>
        <Card.Title>404 Error: {props.title}</Card.Title>
      </Card.Header>
      <Card.Body>
        {props.description}
      </Card.Body>
    </Card>
  </Conatiner>)
}

export default FourZeroFour