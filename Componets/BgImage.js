import React, { useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import firstImage from '../assest/first.jpg';
import WelcomeImg from '../assest/welcome-img.png'
 const BgImage = (props)=>{
  return(
  <View>
  <ImageBackground style={styles.Image} source={firstImage} />
  </View>
 )}
 const WelcomeImage = (props)=>{
  return(
  <View>
  <Image source={WelcomeImg} style={styles.Image2}></Image>
  </View>
 )}

 const styles = StyleSheet.create({ 
    Image: {
        height: 750,
        width: 400,
        flex: 1,
      },
      Image2: {
        width: 250,
        height: 250,
        alignSelf: 'center'
      },
 })

 export  {BgImage, WelcomeImage};