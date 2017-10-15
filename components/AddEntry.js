import React, { Component } from 'react'
import { 
  View, 
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback
 } from 'react-native'
import { getMetricMetaInfo } from '../utils/helpers'
import UdaciSteppers from './UdaciSteppers'
import UdaciSlider from './UdaciSlider'
import DateHeader from './DateHeader'

export default class AddEntry extends Component {
  state = {
    run: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
    eat: 0
  }

  handlePress = () => {
    alert('Hello Anvita')
  }

  increment = (metric) => {
    const { max, step } = getMetricMetaInfo(metric)
    this.setState((state) => {
      const count = state[metric] + step
      return {
        ...state,
        [metric] : count > max ? max : count
      }
    })
  }

  decrement = (metric) => {
    this.setState((state) => {
      const count = state[metric] - getMetricMetaInfo(metric).step
      return {
        ...state,
        [metric] : count < 0 ? 0 : count
      }
    })
  }

  slide = (metric, value) => {
    this.setState(() => ({
      [metric]: value
    }))
  }

  render() {
    const metricInfo = getMetricMetaInfo()
    return(
      <View>
        <DateHeader date={(new Date()).toLocaleDateString()}/>
        {Object.keys(metricInfo).map((key) => {
          const { getIcon, type, ...rest } = metricInfo[key]
          const value = this.state[key]
          return (
            <View key={key}>
              {getIcon()}
              {type === 'slider'
                ? <UdaciSlider 
                    value={value}
                    onChange={(value) => this.slide(key, value)}
                    {...rest} />
                : <UdaciSteppers 
                    value={value} 
                    onIncrement={() => this.increment(key)}
                    onDecrement={() => this.decrement(key)}
                    {...rest} />
              }
            </View>
          )
        })}
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.btn}
            onPress={this.handlePress}>
            <Text style={styles.btnText}>Click Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    backgroundColor: '#E53224',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  btnText: {
    color: '#fff'
  }
})
