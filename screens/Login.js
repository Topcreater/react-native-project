import React, { useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
  
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import firstImage from '../assest/first.jpg';
const LogIn =({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateInput = () => {
    if (email && password && password.length >= 8) {
      setIsValid(true);
    } else if(email === '' &&  password === ''){
      setIsValid(false);
    }
  }
  const handleEmailChange = (email) => {
    setEmail(email);
    validateInput();
    }

  const handlePasswordChange = (passowrd) => {
    setPassword(passowrd);
    validateInput();
  }
  const handleSubmit = () => {
    if (isValid) {
      alert('Your form have been submited');
      setEmail('');
      setPassword('');
    } else {
      alert('Please enter a valid email and password');
   
    }
  }
  return (
    <SafeAreaView>
      <View>
        <ImageBackground style={styles.Image} source={firstImage} />
<ScrollView>
        <Text style={styles.text}>Login Here!</Text>
        <Text style={styles.text2}>Welcome back Join your account</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={handleEmailChange}
          autoCapitalize='none'
          keyboardType='email-address'
          placeholderTextColor={Colors.black}
          style={styles.input1}></TextInput>
        <TextInput
          placeholder="password"
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry={true}
          placeholderTextColor={Colors.black}
          style={styles.input1}></TextInput>
      {/* {!isValid && <Text style={styles.errorText}>Please enter a valid email and password (password must be at least 8 characters)</Text>} */}

        <TouchableOpacity  onPress={() =>
        navigation.navigate('Forgot page')
      }>
          <Text style={styles.text3}>forgot your password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSubmit} >
          <Text style={styles.login}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.text4}>----Or----</Text>
          <TouchableOpacity  onPress={() =>
        navigation.navigate('SignUp page') 
      }>
          <Text style={styles.sign}>Create account</Text>
          </TouchableOpacity>
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
  input1: {
    fontSize: 20,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 20,
    marginVertical: 10,
    width: 300,
    alignSelf: 'center',
  },
  text3:{
fontSize: 20,
textAlign:'right',
color: 'white',
margin: 20,
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
  errorText: {
    color: 'red',
    marginTop: 10,
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

export default LogIn;
