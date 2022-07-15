import React, { Fragment } from 'react'
import { Route } from 'vtex.my-account-commons/Router'
// Your component pages
import UserPoints from './components/UserPoints'

const MyAppPage = () => (
  <Fragment>
    <Route exact path="/points" component={UserPoints} />
  </Fragment>
)

export default MyAppPage
