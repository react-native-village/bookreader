import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  View,
  Text
} from 'react-native'
import rules from './rules.json'

const window = Dimensions.get('window')

export default class Menu extends Component {
  state = {
    dataSource: []
  }

  componentDidMount() {
    const ds = rules 
    this.setState({
      dataSource: ds
    })
  }

  _keyExtractor = (item) => {
    return item.id
  }

  renderData = (data) => {
    const { container } = styles
    return (
      <TouchableOpacity onPress={ () => this.props.onItemSelected(data.item)}>
        <View style={container}>
          <Text style={styles.item} numberOfLines={1} ellipsizeMode='tail'>{data.item.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {

    return (
      <View style={styles.menu}>
        <Text>Игра Лила</Text>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderData}
          keyExtractor={this._keyExtractor}
          style={styles.listView}
          extraData={this.state}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 35
  },
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    marginTop: 30,
    padding: 20
  },
  item: {
    fontFamily: 'AppleSDGothicNeo-Light',
    fontSize: 14,
    fontWeight: '300',
    flex: -1,
    paddingTop: 5
  }
})

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired
}
