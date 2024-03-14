import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

const SelectPronounce = ({ languages, value, setValue }) => {
  const handleLanguageSelect = newValue => {
    setValue(newValue);
  };

  const [selectedStars, setSelectedStars] = useState(new Array(languages.length).fill(false));

  const handleStarPress = index => {
    const newSelectedStars = [...selectedStars];
    newSelectedStars[index] = !newSelectedStars[index];
    setSelectedStars(newSelectedStars);
  };

  return (
    <View style={{ paddingHorizontal: 20 }}>
      <RadioButton.Group onValueChange={handleLanguageSelect} value={value}>
        {languages.map((language, index) => (
          <View key={language.code} style={styles.radioButtonContainer}>
            <View>
              {/* <Image
                style={{height: 150, width: 150}}
                source={require('../../assets/Images/logo.png')}
            /> */}
            </View>
            <View style={styles.languageSelect}>
              <Text>{language.name}</Text>
            </View>
            <View style={{paddingRight: 40}}>
              <Text>{language.name1}</Text>
            </View>
            <View  style={{paddingRight: 30}}>
              <TouchableOpacity onPress={() => handleStarPress(index)}>
                <Image
                  source={
                    selectedStars[index]
                      ? require('../../assets/Icons/starYellow.png')
                      : require('../../assets/Icons/starGray.png')
                  }
                  style={{ width: 25, height: 25 }}
                />
              </TouchableOpacity>
            </View>
            <View>
              <RadioButton value={language.code} />
            </View>
          </View>
        ))}
      </RadioButton.Group>
    </View>
  );
};

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#ccc',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
  },
  languageSelect: {
    width: '40%',
  },
});

export default SelectPronounce;
