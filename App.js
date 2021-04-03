import * as React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import {Audio} from 'expo-av'

class SoundButton extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      {uri:'https://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
      {shouldPlay: true}
    )
    
  };

  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'purple',
          justifyContent: 'center',
          borderWidth: 1,
          marginLeft: 100,
          alignItems: 'center',
          borderRadius: 250,
          width: 150,
          height: 150,
          borderColor: 'blue'
        }}>
        <Text style={{
          fontFamily: 'Arial',
          fontSize: 20,
          }}>Press</Text>
      </TouchableOpacity>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 200 }}>
        <SoundButton />
      </View>
    );
  }
}
