import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {BgImage} from '../Componets/BgImage';
import {Heading,  TextFour} from '../Componets/HeadingText';
import BtnsCard from '../Componets/Btns';
import { InputFiled, InputFieldsPassword } from '../Componets/InputFields';

const Singup = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValid, setIsValid] = useState(false);


  const validateInput = () => {
    if (name && alphaRegex.test(name) && email && regex.test(email) && number && numericRegex.test(number) && password && confirmPassword) {
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
      setConfirmPassword('');
      setName('');
      setNumber('');
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
    // handleSubmit();
    // validatePasswords();
    // paymentValid();
  }

  return (
    <SafeAreaView>
      <View>
        <BgImage />
        <ScrollView>
          <Heading
            textData="Create account"
            textData2="Fill all inputs data"
          />
          <InputFiled
            placeholder="Your Name"
            value={name}
            onChangeText={handlenameChange}
            keyboardType='TextInput'
            placeholderTextColor='black'
          />
          <InputFiled
            placeholder="Your Email"
            value={email}
            onChangeText={handleEmailChange}
            keyboardType='email-address'
            placeholderTextColor='black'
          />
          <InputFiled
            placeholder="Your Number"
            value={number}
            onChangeText={handleNumberChange}
            keyboardType='numeric'
            placeholderTextColor='black'
          />
          <InputFieldsPassword
            placeholder="New password"
            value={password}
            onChangeText={handlePasswordChange}
            placeholderTextColor='black'
            secureTextEntry={true}
          />
          <InputFieldsPassword
            placeholder="password"
            value={password}
            onChangeText={handleconfirmPasswordChange}
            placeholderTextColor='black'
            secureTextEntry={true}
          />
          <BtnsCard Btns="Sign up" onPress={() =>
            navigation.navigate('Payments page')
          }
          />
          <TextFour textData4="----Or----" />
          <BtnsCard Btns="Login" onPress={() =>
            navigation.navigate('LogIn page')
          }
          />

        </ScrollView>
      </View>
    </SafeAreaView>
  );
}



export default Singup;
