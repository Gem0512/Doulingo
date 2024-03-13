import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Exam from '../screens/Exam/Exam';
import Home from '../screens/Home';

export default function Menu({navigation}) {
  const handleButtonPress = page => {
    // Thực hiện chuyển sang trang mới tương ứng với page
    navigation.navigate(page);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress(Exam)}>
        <Image
          style={{height: 40, width: 40}}
          source={require('../assets/Icons/chat.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress(Exam)}>
        <Image
          style={{height: 40, width: 40}}
          source={require('../assets/Icons/noti.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress(Home)}>
        <Image
          style={{height: 40, width: 40}}
          source={require('../assets/Icons/home.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress(Exam)}>
        <Image
          style={{height: 40, width: 40}}
          source={require('../assets/Icons/setting.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleButtonPress(Exam)}>
        <Image
          style={{height: 40, width: 40}}
          source={require('../assets/Icons/profile.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6949FF',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    // paddingTop: 10,
    // flex: 1,
    // resizeMode: 'cover',
    // eslint-disable-next-line no-dupe-keys
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    // color:'',
    width: '100%',
    // paddingLeft: 10,
  },
  button: {
    paddingHorizontal: 15,
  },
});
