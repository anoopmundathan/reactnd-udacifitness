import React from 'react'
import { View } from 'react-native'
import AddEntry from './components/AddEntry'
import { createStrore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View>
          <AddEntry />
        </View>
      </Provider>
    );
  }
}
