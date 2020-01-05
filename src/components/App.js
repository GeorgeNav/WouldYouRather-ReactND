import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getDatabaseData } from '../actions/shared'
import { Switch, Route } from 'react-router-dom'

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
          {!this.props.authedUserID
          ? <Route exact path='/' component={Login}/>
          : <Fragment>
              <Route exact
                path='/'
                component={Home}/>
              <Route
                path='/questions/:question_id'
                component={QuestionDetails}/>
              <Route
                path='/add'
                component={NewQuestion}/>
              <Route
                path='/leader-board'
                component={LeaderBoard}/>
            </Fragment>}
          <Route exact path='/login' component={Login}/>
          <Route component={PageNotFound}/>
        </Switch>
      </Container>
    </Container>)
  }
}

const mapStateToProps = ({authedUserID}) => ({authedUserID})

export default connect(mapStateToProps)(App)