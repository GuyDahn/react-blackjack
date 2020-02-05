import React from 'react'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './redux/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

import { createGlobalStyle } from 'styled-components'
import { GameScreen } from './components/screens/GameScreen'
import { initialState } from './consts/data/initialState'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './redux/reducers'

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
}
div {
  box-sizing: border-box;
}
`

export default function App() {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )
  sagaMiddleware.run(rootSaga)
  return (
    <Provider store={store}>
      <GlobalStyle />
      <GameScreen />
    </Provider>
  )
}