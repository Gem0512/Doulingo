import React, {useState} from 'react';
import {ScrollView, Text } from 'react-native';
import {Image, TouchableOpacity, View} from 'react-native';
import SelectPronounce from './SelectPronounce';
import {Modal, Portal, Button, PaperProvider} from 'react-native-paper';
export default function Pronounce() {
  const languages = [
    {code: 'en', name1: 'Bố', name: 'Father'},
    {code: 'fr', name1: 'Bố', name: 'Father'},
    {code: 'es', name1: 'Bố', name: 'Father'},
    {code: 'di', name1: 'Bố', name: 'Father'},
    {code: 'he', name1: 'Bố', name: 'Father'},
    {code: 'ke', name1: 'Bố', name: 'Father'},
    {code: 'le', name1: 'Bố', name: 'Father'},
    // {code: 're', flag: '../../assets/Images/flag/vn.webp', name: 'German'},
  ];
  const [value1, setValue1]= useState('en');
  const [iconRecord, setIconRecord] = useState(true);

  const toggleButton = () => {
    setIconRecord(prevState => !prevState);
  };
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={toggleButton}>
          {iconRecord ? (
            <Image
              style={{height: 40, width: 40}}
              source={require('../../assets/Icons/record.png')}
            />
          ) : (
            <Image
              style={{height: 40, width: 40}}
              source={require('../../assets/Icons/acrd.webp')}
            />
          )}
        </TouchableOpacity>
        <View style={{
          paddingTop: 20,
          paddingBottom: 20
        }}>
        <TouchableOpacity style={{
          height: 40,
          width: 80,
          display:'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#6949FF',
          borderRadius: 20
        }}
        onPress={showModal}>
          <Text>Check</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
      <SelectPronounce
       languages={languages}
          setValue={setValue1}
          value={value1}
          ></SelectPronounce>
      </ScrollView>
      </View>
      {/* <PaperProvider> */}
      {/* <Portal> */}
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}
        style={{
          height: 'auto',
          zIndex: 9999,
          display:'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 20
        }}>
          <Text style={{fontSize: 20, color: '#6949FF'}}>Điểm số của bạn: 20/100</Text>
          <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
             <TouchableOpacity style={{
          height: 40,
          width: 80,
          display:'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#6949FF',
          borderRadius: 20,
          marginTop: 20,
        }}
        >
          <Text style={{color: 'white'}}>Thử lại</Text>
        </TouchableOpacity>
        </View>
        </Modal>
      {/* </Portal> */}
      {/* <Button style={{marginTop: 30}} onPress={showModal}>
        Show
      </Button> */}
    {/* </PaperProvider> */}
    </View>
  );
}
