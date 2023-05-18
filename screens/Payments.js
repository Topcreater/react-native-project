
import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  style,
  ImageBackground,
  ScrollView,
  Button
} from 'react-native';


import firstImage from '../assest/first.jpg';
import WelcomeImage from '../assest/welcome-img.png'
function Payments({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <ImageBackground style={styles.Image} source={firstImage} />
<ScrollView>
    <Image source={WelcomeImage}  style={styles.Image2}></Image>
        <Text style={styles.text}>Welcome buddy!</Text>
        <Text style={styles.text2}>Join our team and get best</Text>
      
      
          <Text style={styles.sign}>Create account</Text>
         
          </ScrollView>
        
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Image: {
    height: 750,
    width: 400,
    flex: 1,
  },
  Image2:{
width: 300,
height: 300,
alignSelf: 'center'
  },
  text: {
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  login:{
    fontSize: 20,
    padding: 10,
    backgroundColor: `#2c2b3f`,
    borderRadius: 20,
    marginVertical: 10,
    width: 300,
    alignSelf: 'center',
    textAlign:'center',
    color: 'white',
    fontWeight: 'bold',
  },
  text4:{
    fontSize: 30,
    textAlign:'center',
    color: 'white',
  },
  sign:{
    fontSize: 20,
    padding: 10,
    backgroundColor: `#2c2b3f`,
    borderRadius: 20,
    marginVertical: 10,
    width: 300,
    alignSelf: 'center',
    textAlign:'center',
    color: 'white',
    fontWeight: 'bold',
  }
});

export default Payments;
