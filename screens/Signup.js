import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Button,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import firstImage from '../assest/first.jpg';


const Singup = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  
  
  const validateInput = () => {
    if (name  && alphaRegex.test(name) && email && regex.test(email) && number&& numericRegex.test(number) && password && confirmPassword) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }
  const alphaRegex = /^[a-zA-Z]+$/;
  const handlenameChange = (text) => {
    setName(text);
    validateInput();
    
  }
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const handleEmailChange = (email) => {
    setEmail(email);
    validateInput();

  }
  const numericRegex = /^\d{10}$/;
  const handleNumberChange = (text) => {
    setNumber(text);
    validateInput();

  }
  const handlePasswordChange = (text) => {
    setPassword(text);
    validateInput();
  }
  const handleconfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    validateInput();
  }
  const validatePasswords = () => {
    if (password === confirmPassword) {
      console.log('passowrd matched');
    } else {
      alert('passowrd not matched');
    }
  };

  const handleSubmit = () => {
    if (isValid) {
      alert('Your form have been submited');
      setEmail('');
      setPassword('');
    } else {
      alert('Please enter a valid email and number and password');
    }
  }
const paymentValid = () => {
  if (isValid && password === confirmPassword) {
    navigation.navigate('Payments page')
  }
}

  functionCombined = () => {
    handleSubmit();
    validatePasswords();
    paymentValid();
  }  

  return (
    <SafeAreaView>
      <View>
        <ImageBackground style={styles.Image} source={firstImage} />
        <ScrollView>
          <Text style={styles.text}>Create account</Text>
          <Text style={styles.text2}>Fill all the input belwo Here</Text>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={handlenameChange}
            keyboardType='text'
            autoFocus
            placeholderTextColor={Colors.black}
            style={styles.input1}></TextInput>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={handleEmailChange}
            autoCapitalize='none'
            keyboardType='email-address'
            placeholderTextColor={Colors.black}
            style={styles.input1}></TextInput>
          <TextInput
            placeholder="Number"
            value={number}
            onChangeText={handleNumberChange}
            placeholderTextColor={Colors.black}
            style={styles.input1}></TextInput>
          <TextInput
            placeholder="password"
            value={password}
            onChangeText={handlePasswordChange}
            secureTextEntry={true}
            placeholderTextColor={Colors.black}
            style={styles.input1}></TextInput>
          <TextInput
            placeholder="Confrim password"
            value={confirmPassword}
            onChangeText={handleconfirmPasswordChange}
            secureTextEntry={true}
            placeholderTextColor={Colors.black}
            style={styles.input1}></TextInput>
          <TouchableOpacity onPress={functionCombined}>
            <Text style={styles.login}>Sign Up</Text>
          </TouchableOpacity>
          {/* <View>
            {isValid ? (
              <Button title="Payments!" onPress={() =>
                navigation.navigate('Payments page')
              } style={styles.login} />
            ) : null}
          </View> */}
          <Text style={styles.text4}>----Or----</Text>
          <TouchableOpacity onPress={() =>
            navigation.navigate('LogIn page')
          }>
            <Text style={styles.sign}>LogIn</Text>
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
    marginTop: 20,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 40,
  },
  text2: {
    fontSize: 20,
    marginLeft: 30,
    marginTop: 30,
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

  login: {
    fontSize: 20,
    padding: 10,
    backgroundColor: `#2c2b3f`,
    borderRadius: 20,
    marginVertical: 10,
    width: 300,
    alignSelf: 'center',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  text4: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  sign: {
    fontSize: 20,
    padding: 10,
    backgroundColor: `#2c2b3f`,
    borderRadius: 20,
    marginVertical: 10,
    width: 300,
    alignSelf: 'center',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  }
});

export default Singup;
