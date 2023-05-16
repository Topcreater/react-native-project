
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

const Forgot =({navigation}) => {
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateInput = () => {
    if (email || number ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }

  const handleEmailChange = (email) => {
    setEmail(email);
    validateInput();
  }
  const handleNumberChange = (number) => {
    setNumber(number);
    validateInput();
  }
  const handleSubmit = () => {
    if (isValid) {
      alert('We will send a confirmation code on your email or number');
      setEmail('');
      setNumber('');
    } else {
      alert('Please enter a valid email or Number');
      
    }
  }
  
  return (
    <SafeAreaView>
      <View>
        <ImageBackground style={styles.Image} source={firstImage} />
<ScrollView>
        <Text style={styles.text}>Here We Go!</Text>
        <Text style={styles.text2}>Forgot your password</Text>
        <TextInput
          placeholder="Type Your Email"
          value={email}
          onChangeText={text=> handleEmailChange(text)}
          autoCapitalize='none'
          keyboardType='email-address'
          placeholderTextColor={Colors.black}
          style={styles.input1}></TextInput>
          <Text style={styles.text4}>----Or----</Text>
        <TextInput
          placeholder="Type your Number"
          value= {number}
          onChangeText={handleNumberChange}
          placeholderTextColor={Colors.black}
          style={styles.input1}></TextInput>
        
        <TouchableOpacity onPress={handleSubmit} >
          <Text style={styles.login}>Forgot password</Text>
          </TouchableOpacity>
          <Text style={styles.text3}>If you have New one press sign up</Text>
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
  text3:{
    fontSize: 15,
    textAlign:'center',
    color: 'white',
    margin: 20,
    fontWeight: 'bold',
  },
  text4:{
    fontSize: 20,
    textAlign:'center',
    color: 'white',
    marginTop: 10,
    fontWeight: 'bold',
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

export default Forgot;
