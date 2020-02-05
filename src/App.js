import React from 'react'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './redux/reducers'
import {composeWithDevTools} from 'redux-devtools-extension'

import { createGlobalStyle } from 'styled-components'
import { GameScreen } from './components/screens/GameScreen'
import { initialState } from './consts/data/initialState'


const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
}
div {
  box-sizing: border-box;
}
`

export default function App () {
  const store = createStore(reducers, initialState, composeWithDevTools())

  return (
    <Provider store={store}>
      <GlobalStyle />
      <GameScreen />
    </Provider>
  )
}