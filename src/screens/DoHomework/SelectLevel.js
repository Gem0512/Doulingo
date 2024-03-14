/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LanguageSelection from '../../components/LanguageSelection';
import Exam from '../Exam/Exam';
// import GoalDaily from './GoalDaily';
import SelectComponent from '../../components/SelectComponent';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import TypeGrammar from './Grammar/TypeGrammar';
import {useRoute} from '@react-navigation/native';
import TypeListening from './Listening/TypeListening';
import TypePronounce from './Pronounce/TypePronounce';

export default function SelectLevel({navigation}) {
  const languages = [
    {code: 'de', flag: '../../assets/Images/flag/vn.webp', name: 'Dễ'},
    {code: 'tb', flag: '../../assets/Images/flag/vn.webp', name: 'Trung bình'},
    {code: 'kho', flag: '../../assets/Images/flag/vn.webp', name: 'Khó'},
    {code: 'ratKho', flag: '../../assets/Images/flag/vn.webp', name: 'Rất khó'},
    // {code: 'de', flag: '../../assets/Images/flag/vn.webp', name: 'German'},
  ];
  const [value1, setValue1] = React.useState('de');
  // const {id} = navigation.params;
  const route = useRoute();
  const {id} = route.params;
  const handleButtonPress = () => {
    if (id === 'nguPhap') {
      navigation.navigate(TypeGrammar);
    } else {
      if (id === 'ngheHieu') {
        navigation.navigate(TypeListening);
      } else {
        navigation.navigate(TypePronounce);
      }
    }
    // Thực hiện chuyển sang trang mới tương ứng với page
  };

  console.log(id);
  //   const {itemId, otherParam} = route.params;
  //   console.log(JSON.stringify(itemId));

  return (
    <View
      style={{
        display: 'flex',
        // justifyContent: 'center',
        // paddingTop: 30,
        backgroundColor: '#181A20',
        height: '100%',
        // paddingBottom: 80,
      }}>
      <Header style={styles.header} />
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          //   justifyContent: 'center',
          paddingTop: 30,
        }}>
        <Text
          style={{
            color: '#6949FF',
            fontSize: 25,
          }}>
          Bạn muốn làm ở mức độ nào?
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
          height: '22%',
          display: 'flex',
          justifyContent: 'flex-end',
          // marginTop: 50,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => handleButtonPress()}>
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
