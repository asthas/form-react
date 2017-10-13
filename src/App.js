import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route }  from 'react-router-dom'
import ConnectedForm from './container/connect-form'


class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <Route path="/form" component={ConnectedForm} />
        <Router>
      </Provider>
    )
  }
}

export default App;
