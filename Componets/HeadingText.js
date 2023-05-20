import React, { useState} from 'react';
import {
  Text,
  View,
  StyleSheet, 
} from 'react-native';
 const Heading = (props)=>{
  return(
  <View>
  <Text style={styles.text}>{props.textData}</Text>
  <Text style={styles.text2}>{props.textData2}</Text>
  </View>
 )}

 const TextThree = (props)=>{
  return(
  <View>
  <Text style={styles.text3}>{props.textData3}</Text>
  </View>
 )}

 const TextFour = (props)=>{
  return(
  <View>
  <Text style={styles.text4}>{props.textData4}</Text>
  </View>
 )}

 const ForgotText = (props)=>{
  return(
  <View>
  <Text style={styles.text5}>{props.textData5}</Text>
  </View>
 )}

 const styles = StyleSheet.create({ 
  text: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 80,
    color: 'white',
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  text3: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    margin: 20,
    fontWeight: 'bold',
  },
  text4: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    marginTop: 10,
    fontWeight: 'bold',
  },
  text5: {
    fontSize: 20,
    textAlign: 'right',
    color: 'white',
    margin: 20,
    fontWeight: 'bold',
  },
 })

 export {Heading, TextThree, TextFour, ForgotText} ;