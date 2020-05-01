import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import ReduxLogger from 'redux-logger'
import ReduxThunk from 'redux-thunk'

import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { terminalHistoryReducer } from './store/terminal-history/reducers'
import { currentUserReducer } from './store/current-user/reducers'
import { currentImageReducer } from './store/current-image/reducers'
import { commandReducer } from './store/commands/reducers'
import { fileReducer } from './store/files/reducers'

const createRootReducer = () => combineReducers({
  terminalHistory: terminalHistoryReducer,
  currentUser: currentUserReducer,
  currentImage: currentImageReducer,
  commands: commandReducer,
  files: fileReducer,
})

export type AppState = Exclude<Parameters<ReturnType<typeof createRootReducer>>[0], undefined>

const store = createStore(
  createRootReducer(),
  applyMiddleware(ReduxLogger, ReduxThunk),
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
