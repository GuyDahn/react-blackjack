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

const cursorImage = require('../src/images/cursor.png')

const GlobalStyle = createGlobalStyle`
* {
  cursor: url(${cursorImage}), default;
}

body {
  margin: 0;
  padding: 0;
}

div {
  box-sizing: border-box;
}

img {
    // image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
  }
`

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