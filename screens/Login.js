import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Heading,  TextFour, ForgotText } from '../Componets/HeadingText';
import {BgImage} from '../Componets/BgImage';
import BtnsCard from '../Componets/Btns';
import { InputFiled, InputFieldsPassword } from '../Componets/InputFields';
const LogIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateInput = () => {
    if (email && password && password.length >= 8) {
      setIsValid(true);
    } else if (email === '' && password === '') {
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
      // alert('Your form have been submited');
      setEmail('');
      setPassword('');
    } else {
      alert('Please enter a valid email and password');

    }
  }
  const paymentValid = () => {
    if (isValid ) {
      navigation.navigate('Getdata page')
    }
  }
  const functionCombined = () => {
    handleSubmit();
    paymentValid();
  }
  return (

    <View>
      <BgImage />
      <ScrollView>
        <Heading
          textData="Login Here!"
          textData2="Welcome back Join your account"
        />
        <InputFiled
          placeholder="Email"
          value={email}
          onChangeText={text => handleEmailChange(text)}
          keyboardType='email-address'
          placeholderTextColor='black'
        />
        <InputFieldsPassword
          placeholder="password"
          value={password}
          onChangeText={handlePasswordChange}
          placeholderTextColor='black'
          secureTextEntry={true}
        />

        <TouchableOpacity onPress={() =>
          navigation.navigate('Forgot page')
        }>
          <ForgotText textData5="forgot your password?" />
        </TouchableOpacity>
        <BtnsCard Btns="Login" onPress={functionCombined} />
        <TextFour textData4="----Or----" />
        <BtnsCard Btns="Create account" onPress={() =>
          navigation.navigate('SignUp page')
        }
        />
      </ScrollView>

    </View>


  );
}


export default LogIn;
