import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LanguageSelection from '../../components/LanguageSelection';
import Register from './Register';

export default function GoalDaily({navigation}) {
  const languages = [
    {code: 'en', flag: '../../assets/Images/flag/vn.webp', name: '3 phút/ngày'},
    {code: 'fr', flag: '../../assets/Images/flag/vn.webp', name: '10 phút/ngày'},
    {code: 'es', flag: '../../assets/Images/flag/vn.webp', name: '15 phút/ngày'},
    {code: 'de', flag: '../../assets/Images/flag/vn.webp', name: '30 phút/ngày'},
    // {code: 're', flag: '../../assets/Images/flag/vn.webp', name: 'German'},
  ];

  const handleButtonPress = page => {
    // Thực hiện chuyển sang trang mới tương ứng với page
    navigation.navigate(page);
  };

  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 30,
        backgroundColor: '#181A20',
        height: '100%',
        // paddingBottom: 80,
      }}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            color: '#6949FF',
            fontSize: 25,
          }}>
          What are your daily goals?
        </Text>
      </View>
      <View style={styles.select}>
        <LanguageSelection languages={languages} />
      </View>
      <View
        style={{
          height: 130,
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: 50,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => handleButtonPress(Register)}>
          <Text style={{color: 'white'}}> DONE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  select: {
    paddingTop: 50,
  },
  button1: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#6949FF',
    marginBottom: 10,
    width: '90%',
    color: 'white',
    borderRadius: 30,
    display: 'flex',
    justifyContent: 'flex-end',
    //   marginTop: 50,
    alignItems: 'center',
  },
});
