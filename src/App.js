import React from 'react'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './redux/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

import { GameScreen } from './components/screens/GameScreen'
import { initialState } from './consts/data/initialState'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './redux/reducers'

import { GlobalStyle } from './components/globalStyle'

export default function App() {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )
  sagaMiddleware(rootSaga)

  return (
    <Provider store={store}>
      <GlobalStyle />
      <GameScreen />
    </Provider>
  )
}