import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { QuestionContext } from '../App'

const PrivateRoute = ({ children, authedUserID, computedMatch, ...rest }) => {
  return <Route
  {...rest}
  render={({ location }) => {
    console.log(computedMatch)
    return authedUserID
      ? <QuestionContext.Provider value={{match: computedMatch}}>
          {children}
        </QuestionContext.Provider>
      : <Redirect
          to={{
            pathname: '/login',
            state: {
              from: location
            },
          }}
      />}}/>
}

const mapStateToProps = ({authedUserID}, {computedMatch}) => ({authedUserID, computedMatch})
export default connect(mapStateToProps)(PrivateRoute)