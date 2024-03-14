/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LanguageSelection from '../../components/LanguageSelection';
import Exam from '../Exam/Exam';
// import GoalDaily from './GoalDaily';
import SelectComponent from '../../components/SelectComponent';
import SelectLevel from './SelectLevel';
import {useState} from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

export default function SelectType({navigation}) {
  const questions = [
    {
      id: 1,
      question: 'What is the capital of France?',
      options: ['New York', 'London', 'Paris', 'Berlin'],
      correctAnswer: 'Paris'
    },
    {
      id: 2,
      question: 'What is the largest planet in our solar system?',
      options: ['Venus', 'Saturn', 'Jupiter', 'Mars'],
      correctAnswer: 'Jupiter'
    },
    // Thêm các câu hỏi khác nếu cần
  ];
  
  const languages = [
    {
      code: 'nguPhap',
      flag: '../../assets/Images/flag/vn.webp',
      name: 'Ngữ pháp',
    },
    {code: 'ngheHieu', flag: '../../assets/Images/flag/vn.webp', name: 'Nghe hiểu'},
    {code: 'phatAm', flag: '../../assets/Images/flag/vn.webp', name: 'Phát âm'},
    // {code: 'de', flag: '../../assets/Images/flag/vn.webp', name: 'Rất khó'},
    // {code: 'de', flag: '../../assets/Images/flag/vn.webp', name: 'German'},
  ];
  const [value, setValue] = React.useState('nguPhap');
  const propsToSend = 'Hello from HomeScreen';
  const handleButtonPress = page => {
    // Thực hiện chuyển sang trang mới tương ứng với page
    navigation.navigate(page, {id: value });
  };
  console.log(value);
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        display: 'flex',
        // justifyContent: 'center',
        // paddingHorizontal: 10,
        backgroundColor: '#181A20',
        height: '100%',
        // paddingBottom: 80,
      }}>
      <Header style={styles.header} />
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          display: 'flex',
          alignItems: 'center',
          //   justifyContent: 'center',
          paddingTop: 30,
        }}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            color: '#6949FF',
            fontSize: 25,
          }}>
          Bạn muốn học gì
        </Text>
      </View>
      <View style={styles.select}>
        <SelectComponent
          languages={languages}
          setValue={setValue}
          value={value}
        />
      </View>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          height: '25%',
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: 50,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => {
            navigation.navigate('SelectLevel', {id: value});
          }}>
          <Text style={{color: 'white'}}> NEXT</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          // paddingTop: 30,
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <Menu navigation={navigation} />
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
