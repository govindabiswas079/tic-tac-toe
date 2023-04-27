import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import Lottie from 'lottie-react-native';
import { Winner } from '../assets/Lottie'
import { GAME_RESULT_NO, GAME_RESULT_USER, GAME_RESULT_AI, GAME_RESULT_TIE } from '../GameHelper'
import { Modal } from 'react-native'
import { StatusBar } from 'react-native';


export default Header = (props) => {
  const { result, onRestart } = props
  const [timer, setTimer] = useState(false)

  const generateResultText = (result) => {

    switch (result) {
      case GAME_RESULT_USER:
        return 'You won the game!'
      case GAME_RESULT_AI:
        return 'AI won the game!'
      case GAME_RESULT_TIE:
        return 'Tie!'
      default:
        return ''
    }
  }

  useEffect(() => {
    if (result == 0) {
      setTimer(true);
      setTimeout(() => {
        setTimer(false);
        onRestart()
      }, 2000)
    }
  }, [result])



  return (
    <View>
      <Text style={styles.text}>{generateResultText(result)}</Text>
      {
        result !== GAME_RESULT_NO && (
          <TouchableOpacity onPress={() => onRestart()} style={{ borderRadius: 10, height: 40, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'center', paddingLeft: 20, paddingRight: 20, marginTop: 20 }}>
            <Text style={styles.instructions}>
              Touch here to play again
            </Text>
          </TouchableOpacity>
        )
      }
      <Modal visible={timer}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFFFF'} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Lottie source={Winner} autoPlay={true} loop={false} />
          <Text style={{ color: '#000000', position: 'absolute', bottom: 50, fontFamily: 'OpenSans-Bold', fontSize: 16 }}>{generateResultText(result)}</Text>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#000000',
    fontSize: 19,
    fontFamily: 'OpenSans-Bold',
    fontWeight: 'bold',
    textAlign: 'center',

    marginTop: 20
  },
  instructions: {
    fontFamily: 'OpenSans-Bold',
    color: '#000000',
    textAlign: 'center'
  },
})
