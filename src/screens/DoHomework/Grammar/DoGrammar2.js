import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Header from '../../../components/Header';
import Menu from '../../../components/Menu';
import WordArrangement from '../../../components/Homework/WordArrangement';

export default function DoGrammar2({navigation}) {
  const handleButtonPress = page => {
    // Thực hiện chuyển sang trang mới tương ứng với page
    navigation.navigate(page);
  };
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
      <Header></Header>
      <View
        style={{
        //   height: '22%',
        //   display: 'flex',
        //   justifyContent: 'f',
          marginTop: 30,
          alignItems: 'center',
        //   backgroundColor:'red'
        }}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => handleButtonPress()}>
          <Text style={{color: 'white'}}> DONE</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{
        height: '50%'
      }}>
        <View>
            <WordArrangement></WordArrangement>
        </View>
      </ScrollView>
      <View
        style={{
          paddingTop: 30,
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
