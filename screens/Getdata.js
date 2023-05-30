import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button, Modal, ScrollView } from 'react-native';
import { InputFiled, InputFieldsPassword } from '../Componets/InputFields';
import BtnsCard from '../Componets/Btns';
import { BgImage } from '../Componets/BgImage';
import firestore from '@react-native-firebase/firestore';
const Getdata = () => {
const [myData, setMyData] = useState("");
  useEffect(() => {
    getdatabase();

  }, []);

  const getdatabase = async () => {
    try {
      const data = await firestore().collection('testing').doc('QvQNJIVBvPyj0ZRn74B4').get();
   console.log(data._data);
   setMyData(data._data);
    } 
    catch (error) {
      console.log(error);
    }
  }



  return (
    <View>
      <BgImage />
      <Text style={styles.crud}>CRUD APP</Text>
      <ScrollView>
        <InputFiled
          placeholder="Your Name"
          //     value={name}
          // onChangeText={text => handlenameChange(text)}
          keyboardType='default'
        />
        <InputFiled
          placeholder="Your Number"
          // value={number}
          // onChangeText={text => handleNumberChange(text)}
          keyboardType='numeric'
          maxLength={10}
        />
        <InputFiled
          placeholder="Your age"
          // value={number}
          // onChangeText={text => handleNumberChange(text)}
          keyboardType='numeric'
        />
        <BtnsCard Btns="Insert"
        />
        <Text>Name:-{myData ? myData.name : 'loding...'}</Text>
        <Text>age:-{myData ? myData.age : 'loding...'}</Text>
        <Text>Hobby:-{myData ? myData.hobby.map(list => ` ${list}`) : 'loding...'}</Text>
      </ScrollView>
    </View>
  );

}

const styles = StyleSheet.create({
  crud: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    margin: 30,

  },
  title: {
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
    color: `#2c2b3f`,
    fontWeight: 'bold',
  },
  id: {
    fontSize: 20,
    fontWeight: 'bold',
    color: `#2c2b3f`,
    textAlign: 'center'
  },
  body: {
    fontSize: 15,
    textAlign: 'center',
    color: `#2c2b3f`
  },
  btn: {
    flex: 1,
    padding: 15,
    backgroundColor: `#2c2b3f`,
    color: 'white',
  },
  modalView: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  modalView2: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 30,
    shadowColor: `#2c2b3f`,
    shadowOpacity: 0.50
  }
})
export default Getdata;