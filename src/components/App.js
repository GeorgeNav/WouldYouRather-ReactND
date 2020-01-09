import React, { Component } from 'react'
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
import PrivateRoute from './routes/PrivateRoute'

export const QuestionContext = React.createContext()

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
          <PrivateRoute exact
            path='/'>
            <Home/>
          </PrivateRoute>
          <PrivateRoute
            path='/questions/:question_id'>
            <QuestionContext.Consumer>{({match}) => {
              console.log('match: ',match)
              return <QuestionDetails match={match}/>
            }}</QuestionContext.Consumer>
          </PrivateRoute>
          <PrivateRoute exact
            path='/add'>
            <NewQuestion/>
          </PrivateRoute>
          <PrivateRoute exact
            path='/leaderboard'>
            <LeaderBoard/>
          </PrivateRoute>
          <Route
            component={PageNotFound}/>
        </Switch>
      </Container>
    </Container>)
  }
}

const mapStateToProps = ({authedUserID}) => ({authedUserID})

export default connect(mapStateToProps)(App)