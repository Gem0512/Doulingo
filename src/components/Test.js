import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Sound from 'react-native-sound';

const Test = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const soundPath = require('F:Ki2_nam4Phat_trien_app_TB_di_dongBTLDoulingosrcassetsaudio\town-10169.mp3');
  let sound = null;

  const playSound = () => {
    sound = new Sound(soundPath, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('Không thể tải file âm thanh', error);
        return;
      }
      sound.play(success => {
        if (success) {
          setIsPlaying(true);
          console.log('Âm thanh đã được phát thành công');
        } else {
          console.log('Không thể phát âm thanh');
        }
      });
    });
  };

  const stopSound = () => {
    if (sound) {
      sound.stop(() => {
        setIsPlaying(false);
        console.log('Âm thanh đã dừng');
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Phát âm thanh</Text>
      <TouchableOpacity style={styles.button} onPress={isPlaying ? stopSound : playSound}>
        <Text style={styles.buttonText}>{isPlaying ? 'Dừng' : 'Phát'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default Test;
