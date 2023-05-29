import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button, Modal, ScrollView } from 'react-native';
import { InputFiled, InputFieldsPassword } from '../Componets/InputFields';
import BtnsCard from '../Componets/Btns';
import { BgImage } from '../Componets/BgImage';
import firbase from '../firebase/firebaseconection';
const Getdata = () => {


  this.state={
    name:"",
    phone:0,
    age:0,
  }
 
  InsertItem=()=>{
    firbase.database().ref("users/"+ this.state.phone).set(
      {
fname:this.state.name,
age:this.state.age,
      }
    )
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