import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    TextInput
} from 'react-native';


 const InputFiled = (props) => {
    return (
        <View>
          <TextInput
          placeholder= {props.placeholder}
          value={props.value}
          onChangeText={props.onChangeText}
          keyboardType={props.keyboardType}
          placeholderTextColor={props.placeholderTextColor}
          style={styles.input1}></TextInput>
        </View>
    )
}

 const InputFieldsPassword = (props) => {
    return (
        <View>
          <TextInput
          placeholder= {props.placeholder}
          value={props.value}
          onChangeText={props.onChangeText}
          keyboardType={props.keyboardType}
          placeholderTextColor={props.placeholderTextColor}
          secureTextEntry={props.secureTextEntry}
          style={styles.input1}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    input1: {
        fontSize: 20,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 20,
        marginVertical: 10,
        width: 300,
        alignSelf: 'center',
        placeholderTextColor: "black"
      },
})

export  {InputFiled,InputFieldsPassword};