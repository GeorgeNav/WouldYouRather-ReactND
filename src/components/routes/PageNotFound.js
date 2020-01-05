import React from 'react'
import { Card, Container } from 'react-bootstrap'

const PageNotFound = (props) => {
  return (<Container fluid>
    <Card
      style={{
        margin: '30px auto auto auto',
        width: '400px',
      }}>
      <Card.Header>
        <Card.Title>404</Card.Title>
      </Card.Header>
      <Card.Body>
        Page not found
      </Card.Body>
    </Card>
  </Container>)
}

export default PageNotFound