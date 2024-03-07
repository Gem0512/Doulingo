import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Exam from '../screens/Exam/Exam';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
export default function FunctionApp({navigation }) {
    
    const handleButtonPress = (page) => {
        // Thực hiện chuyển sang trang mới tương ứng với page
        navigation.navigate(page);
      };
  return (
    <View style={styles.container}>
      {/* Hàng trên */}
      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress(Exam)}
        >
          <View>
          <Text style={styles.buttonText}>Học từ vựng</Text>
          {/* <LocalLibraryIcon></LocalLibraryIcon> */}
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('Page2')}
        >
          <Text style={styles.buttonText}>Làm bài tập</Text>
        </TouchableOpacity>
      </View>

      {/* Hàng dưới */}
      <TouchableOpacity
        style={[styles.button, styles.singleButton]}
        onPress={() => handleButtonPress('Page3')}
      >
        <Text style={styles.buttonText}>Kiểm tra</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    rowContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#6949FF',
      justifyContent: 'center',
      width: "40%",
      height: 200,
      padding: 10,
      margin: 5,
      borderRadius: 5,
    },
    singleButton: {
      marginTop: 20,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    },
  });