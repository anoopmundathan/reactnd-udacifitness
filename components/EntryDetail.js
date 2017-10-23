import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { white } from '../utils/colors'
import MetricCard from './MetricCard'
class EntryDetail extends Component {
  render() {
    const { metrics } = this.props
    return(
      <View>
        <MetricCard metrics={metrics} />
        <Text>Entry Detail - {JSON.stringify(this.props.navigation.state.params.entryId)}</Text>
      </View>
    )
  }
}

function mapStateToProps(state, { navigation }) {
  const { entryId } = navigation.state.params
  return {
    entryId,
    metrics: state[entryId]
  }
}

export default connect(mapStateToProps)(EntryDetail)
