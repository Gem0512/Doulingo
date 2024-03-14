/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import GoalDaily from './GoalDaily';
import SelectComponent from '../../../components/SelectComponent';
import Header from '../../../components/Header';
import Menu from '../../../components/Menu';
import DoListening from './DoListening';

export default function TypeListening({navigation}) {
  const languages = [
    {
      code: 'hoiThoai',
      flag: '../../assets/Images/flag/vn.webp',
      name: 'Hội thoại',
    },
    {
      code: 'banTin',
      flag: '../../assets/Images/flag/vn.webp',
      name: 'Bản tin',
    },
  ];
  const [value1, setValue1] = React.useState('hoiThoai');
  const handleButtonPress = page => {
    navigation.navigate(page);

    // Thực hiện chuyển sang trang mới tương ứng với page
  };

  console.log(value1);

  return (
    <View
      style={{
        display: 'flex',
        // justifyContent: 'center',
        // paddingTop: 30,
        backgroundColor: '#181A20',
        height: '100%',
        // paddingBottom: 80,
        // paddingHorizontal: 10,
      }}>
      <Header style={styles.header} />
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          //   justifyContent: 'center',
          paddingTop: 50,
        }}>
        <Text
          style={{
            color: '#6949FF',
            fontSize: 25,
          }}>
          Kiểu bài tập bạn muốn làm?
        </Text>
      </View>
      <View style={styles.select}>
        <SelectComponent
          languages={languages}
          setValue={setValue1}
          value={value1}
        />
      </View>
      <View
        style={{
          height: '40%',
          display: 'flex',
          justifyContent: 'flex-end',
        //   marginTop: 50,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => handleButtonPress(DoListening)}>
          <Text style={{color: 'white'}}>DONE</Text>
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
