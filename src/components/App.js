import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getDatabaseData } from '../actions/shared'
import { Switch, Route, Redirect } from 'react-router-dom'

import Header from './header/Header'
import Home from './routes/Home'
import LeaderBoard from './routes/LeaderBoard'
import Login from './routes/Login'
import NewQuestion from './routes/NewQuestion'
import QuestionDetails from './routes/QuestionDetails'
import PageNotFound from './routes/PageNotFound'

import { Container } from 'react-bootstrap'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getDatabaseData())
  }

  render() {
    return (<Container>
      {this.props.authedUserID && <Header />}
      <Container fluid
        algin='center'>
        <Switch>
          <Route exact
            path='/login'
            component={Login}/>
          <Route exact
            path='/'>
            {!this.props.authedUserID && <Redirect to='/login'/>}
            <Home/>
          </Route>
          <Route
            path='/questions/:question_id'
            component={QuestionDetails}/>
          <Route exact
            path='/add'>
            {!this.props.authedUserID && <Redirect to='/login'/>}
            <NewQuestion/>
          </Route>
          <Route exact
            path='/leader-board'>
            {!this.props.authedUserID && <Redirect to='/login'/>}
            <LeaderBoard/>
          </Route>
          <Route
            component={PageNotFound}/>
        </Switch>
      </Container>
    </Container>)
  }
}

const mapStateToProps = ({authedUserID}) => ({authedUserID})

export default connect(mapStateToProps)(App)