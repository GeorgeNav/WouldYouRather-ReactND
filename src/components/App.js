import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getDatabaseData } from '../actions/shared'
import { Switch, Route, Redirect } from 'react-router-dom'

import Header from './header/Header'
import Home from './routes/Home'
import LeaderBoard from './routes/LeaderBoard'
import Login from './routes/Login'
import NewQuestion from './routes/NewQuestion'
import QuestionDetails from './routes/QuestionDetails'

import { Container } from 'react-bootstrap'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory({
  basename: '',
  forceRefresh: false,
})

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getDatabaseData())
  }

  render() {
    return (<BrowserRouter history={history}>
      {this.props.authedUserID && <Header />}
      <Container fluid
        algin='center'>
        <Switch>
          <Route exact
            path='/login'
            component={Login}/>
          {this.props.authedUserID && [
            <Route exact
              key='/home'
              path='/home'
              component={Home}/>,
            <Route
              key='/questions'
              path='/questions/:question_id'
              component={QuestionDetails}/>,
            <Route
              key='/add'
              path='/add'
              component={NewQuestion}/>,
            <Route
              key='/leader-board'
              path='/leader-board'
              component={LeaderBoard}/>,
          ]}
          {!this.props.authedUserID
            ? <Redirect
              to='/login'/>
            : <Redirect
              to='/home'/>}
        </Switch>
      </Container>
    </BrowserRouter>)
  }
}

const mapStateToProps = ({authedUserID}) => ({authedUserID})

export default connect(mapStateToProps)(App)