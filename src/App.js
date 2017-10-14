import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route }  from 'react-router-dom'
import ConnectedForm from './container/connect-form'
import { createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path="/form" component={ConnectedForm} />
        </Router>
      </Provider>
    )
  }
}

export default App;
