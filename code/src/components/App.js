import React, { Fragment, useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native'
import Lottie from 'lottie-react-native';
import Header from './Header'
import GameBoard from './GameBoard'
import SplashScreen from 'react-native-splash-screen'
import { CountDown } from '../assets/Lottie'
import { Modal } from 'react-native';

export default App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [timer, setTimer] = useState(false)

  const startGame = () => {
    setTimer(true);
    setTimeout(() => {
      setTimer(false)
      setGameStarted(true)
    }, 3000);
  }

  useEffect(() => {
    SplashScreen.hide();
  }, []);


  return (
    <View style={styles.container}>
      <Header />
      {
        gameStarted ? (
          <Fragment>
            <GameBoard />
          </Fragment>
        ) : (
          <View>
            <Text style={styles.welcome}>
              Welcome to the game!
            </Text>
            <TouchableOpacity style={{ backgroundColor: 'skyblue', borderRadius: 10, height: 40, justifyContent: 'center', alignItems: 'center', marginTop: 20 }} onPress={() => startGame()}>
              <Text style={{ color: '#000000', fontFamily: 'OpenSans-Bold', fontSize: 18 }}>
                Play
              </Text>
            </TouchableOpacity>
          </View>
        )
      }

      <Modal visible={timer}>
        <StatusBar barStyle={'light-content'} backgroundColor={'purple'} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Lottie source={CountDown} autoPlay={true} loop={false} />
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    marginTop: 50,
    color: '#000000'
  },
  instructions: {
    textAlign: 'center',
    color: 'grey',
    marginBottom: 5,
  },
})
