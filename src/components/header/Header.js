import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOutUserAction } from '../../actions/authedUser'

const Header = (props) => <header>
  <Navbar
    style={{
      backgroundColor: 'ghostwhite',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    }}>
    <Nav>
      <Nav.Link as={Link} to='/'>Home</Nav.Link>
      <Nav.Link as={Link} to='/add'>New Question</Nav.Link>
      <Nav.Link as={Link} to='/leaderboard'>Leader Board</Nav.Link>
    </Nav>
    <Navbar.Collapse
      className='justify-content-end'>
      <Navbar.Text>
        Signed in as: <strong>{props.authedUser.name}</strong>
      </Navbar.Text>
      <Nav.Item>
        <Nav.Link
          as={Link}
          to='/login'
          onClick={(_) => props.dispatch(logOutUserAction(props.authedUser.id))}>
          Logout
        </Nav.Link>
      </Nav.Item>
    </Navbar.Collapse>
  </Navbar>
</header>

const mapStateToProps = ({users, authedUserID}) => ({
  authedUser: authedUserID ? users[authedUserID] : {}
})

export default connect(mapStateToProps)(Header)