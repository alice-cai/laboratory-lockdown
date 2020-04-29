import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import { terminalHistoryReducer } from './store/terminal-history/reducers'
import { currentUserReducer } from './store/current-user/reducers'
import { currentImageReducer } from './store/current-image/reducers'
import { commandReducer } from './store/commands/reducers'

const createRootReducer = () => combineReducers({
  terminalHistory: terminalHistoryReducer,
  currentUser: currentUserReducer,
  currentImage: currentImageReducer,
  commands: commandReducer,
})

export type AppState = Exclude<Parameters<ReturnType<typeof createRootReducer>>[0], undefined>

// const rootReducer = combineReducers({
//   terminalHistory: terminalHistoryReducer,
// })

const store = createStore(
  createRootReducer(),
  applyMiddleware(logger),
  // composeEnhancers(
  //     enhancer,
  //     middlewareApplication
  // )
);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
