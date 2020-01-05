import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOutUserAction } from '../../actions/authedUser'

class Header extends Component {
  render() { 
    return (<header>
      <Navbar
        style={{
          backgroundColor: 'ghostwhite',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        }}>
        <Nav>
          <Nav.Link as={Link} to='/'>Home</Nav.Link>
          <Nav.Link as={Link} to='/add'>New Question</Nav.Link>
          <Nav.Link as={Link} to='/leader-board'>Leader Board</Nav.Link>
        </Nav>
        <Navbar.Collapse
          className='justify-content-end'>
          <Navbar.Text>
            Signed in as: <strong>{this.props.authedUser.name}</strong>
          </Navbar.Text>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to='/login'
              onClick={(_) => this.props.dispatch(logOutUserAction(this.props.authedUser.id))}>
              Logout
            </Nav.Link>
          </Nav.Item>
        </Navbar.Collapse>
      </Navbar>
    </header>);
  }
}

const mapStateToProps = ({users, authedUserID}) => ({
  authedUser: authedUserID ? users[authedUserID] : {}
})

export default connect(mapStateToProps)(Header)