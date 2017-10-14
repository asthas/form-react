import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route }  from 'react-router-dom'
import ConnectedForm from './container/connect-form'
import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunkMiddleware)
  )
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path="/" component={ConnectedForm} />
        </Router>
      </Provider>
    )
  }
}

export default App;
