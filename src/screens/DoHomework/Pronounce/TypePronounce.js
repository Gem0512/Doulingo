/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import GoalDaily from './GoalDaily';
import SelectComponent from '../../../components/SelectComponent';
import Header from '../../../components/Header';
import Menu from '../../../components/Menu';
import DoPronounce from './DoPronounce';


export default function TypePronounce({navigation}) {
  const languages = [
    {
      code: 'conNguoi',
      flag: '../../assets/Images/flag/vn.webp',
      name: 'Con người',
    },
    {
      code: 'camXuc',
      flag: '../../assets/Images/flag/vn.webp',
      name: 'Cảm xúc',
    },
    {
        code: 'ngoaiHinh',
        flag: '../../assets/Images/flag/vn.webp',
        name: 'Ngoại hình',
      },
      {
        code: 'giaDinh',
        flag: '../../assets/Images/flag/vn.webp',
        name: 'Gia đình',
      },
      {
        code: 'thoiTrang',
        flag: '../../assets/Images/flag/vn.webp',
        name: 'Thời trang',
      },
  ];
  const getNameFromCode = code => {
    const language = languages.find(lang => lang.code === code);
    return language ? language.name : 'Không tìm thấy';
  }
  const [value1, setValue1] = React.useState('conNguoi');
  const t = getNameFromCode(value1);
  console.log(getNameFromCode(value1));

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
          paddingTop: 20,
        }}>
        <Text
          style={{
            color: '#6949FF',
            fontSize: 25,
          }}>
          Bạn muốn chọn chủ đề nào?
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
        //   height: '40%',
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: 40,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => {
            navigation.navigate('DoPronounce', {id: getNameFromCode(value1)});
          }}>
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
