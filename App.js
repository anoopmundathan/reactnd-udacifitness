import React from 'react'
import { View } from 'react-native'
import AddEntry from './components/AddEntry'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import reducer from './reducers'
import History from './components/History'

const logger = createLogger()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, applyMiddleware(logger))}>
        <View style={{flex: 1}}>
          <History />
        </View>
      </Provider>
    );
  }
}
