
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {BgImage} from '../Componets/BgImage';
import { Heading, TextThree, TextFour } from '../Componets/HeadingText';
import BtnsCard from '../Componets/Btns';
import { InputFiled } from '../Componets/InputFields';

const Forgot = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateInput = () => {
    if (email || number) {
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
        <BgImage />
        <ScrollView>
          <Heading
            textData="Here We go"
            textData2="Forgot your password"
          />
          <InputFiled
            placeholder="Type Your Email"
            value={email}
            onChangeText={text => handleEmailChange(text)}
            keyboardType='email-address'
            placeholderTextColor='black'
          />
          <TextFour textData4="----Or----" />
          <InputFiled
            placeholder="Type Phone Number"
            value={number}
            onChangeText={handleNumberChange}
            keyboardType='numeric'
            placeholderTextColor='black'
          />
          <BtnsCard Btns="Forgot password" onPress={handleSubmit}
          />
          <TextThree textData3="If you have New one press sign up" />
          <BtnsCard Btns="Create account" onPress={() =>
            navigation.navigate('SignUp page')
          }
          />
        </ScrollView>

      </View>
    </SafeAreaView>
  );

}


export default Forgot;
