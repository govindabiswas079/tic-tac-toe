import React, { Component } from 'react'
import {
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native'

export default Header = () => {

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'skyblue'} />
      <Text style={styles.title}>
        Tic Tac Toe
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    flexDirection: 'row'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  }
})
