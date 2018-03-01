import React, { Component } from 'react'
import {
  StyleSheet,
  TextInput,
  ScrollView
} from 'react-native'
import SideMenu from 'react-native-side-menu'
import Menu from './components/Menu'
import { 
  Header 
} from './common'

const info = '   Игра Лила или Лила Чакра открывает игрокам Вселенную через самопознание и исследование природы своего ума.\n  Трансформационная, психологическая и божественная игра передававшаяся по семьям браминов от отца к сыну, на протяжении более 5500 лет.\n  В своей жизни, по мере эволюции ума, вначале мы пытаемся изменить правила мира и законы Вселенной под себя, но с течением времени мы понимаем, что гораздо проще и правильней понять существующие правила игры и стать искусным игроком.\n  Лила Чакра, как мудрая мать, заботливо передает нам концентрированный экстракт священных писаний индуизма в игровой и понятной форме.'

export default class App extends Component {
  state = {
    isOpen: false,
    selectedItem: { 
      name: 'Игра Лила',
      bio: info
    }
  }

  onMenuItemSelected = item =>
    this.setState({
      isOpen: false,
      selectedItem: item
    })

  updateMenuState = isOpen => {
    this.setState({ isOpen })
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />
    console.log('state', this.state)

    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
        <Header 
          title={this.state.selectedItem.name}
          leftButton
          leftIcon='md-menu'
          colorLeft='black'
          rightButton
          rightIcon='md-add'
          colorRight='gold'
          onPress={this.toggle}
        />
        <ScrollView style={styles.container}>
          <TextInput 
            multiline
            autogrow
            editable={false}
            style={styles.instructions}
            value={this.state.selectedItem.bio}
          />
        </ScrollView>
      </SideMenu>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF'
  },
  button: {
    position: 'absolute',
    top: 20,
    padding: 10
  },
  instructions: {
    color: '#333333',
    paddingTop: 30,
    padding: 20,
    marginBottom: 5
  }
})

