import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../../components/Header';
import Menu from '../../../components/Menu';
import Pronounce from '../../../components/Homework/Pronounce';
import DoListening from '../Listening/DoListening';
import ListeningExercise from '../../../components/Homework/ListeningExercise';
import {useRoute} from '@react-navigation/native';

export default function DoPronounce({navigation}) {
  const handleButtonPress = page => {
    // Thực hiện chuyển sang trang mới tương ứng với page
    navigation.navigate(page);
  };
  const route = useRoute();
  const {id} = route.params;
  console.log(id);
  return (
    <View
      style={{
        display: 'flex',
        // justifyContent: 'center',
        // paddingTop: 30,
        backgroundColor: '#181A20',
        height: '100%',
        // marginBottom: 30,
      }}>
      <Header />
      {/* <View style={{}}>
            <Pronounce />
        </View> */}
      <View style={{
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 20
      }}>
        <Text style={{color: 'white', fontSize: 30}}>Chủ đề {id}</Text>
      </View>
      <View
        style={{
          height: '45%',
          marginTop: 30,
          marginBottom: 20
        }}>
        {/* <ListeningExercise /> */}
        <Pronounce />
      </View>
      <View
        style={{
          marginTop: 30,
          flex: 1,
          justifyContent: 'flex-end',
        }}>
      </View>
      <Menu navigation={navigation} />
    </View>
  );
}
{/* <View
          style={{
            //   height: '22%',
            //   display: 'flex',
            flex: 1,
            justifyContent: 'flex-end',
            //   marginTop: 30,
            alignItems: 'center',
            //   backgroundColor:'red'
          }}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => handleButtonPress()}>
            <Text style={{color: 'white'}}> DONE</Text>
          </TouchableOpacity>
        </View> */}
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
      marginTop: 10,
    alignItems: 'center',
  },
});
