import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Heading,  TextFour, ForgotText } from '../Componets/HeadingText';
import {BgImage} from '../Componets/BgImage';
import BtnsCard from '../Componets/Btns';
import { InputFiled, InputFieldsPassword } from '../Componets/InputFields';
const LogIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [massage, setMassage] = useState('');
 
const handleLogin = async()=>{
  try {
    const userCreated = await auth().createUserWithEmailAndPassword(email,
      password,);
      console.log(userCreated);
  } catch (error) {
    console.log(error);
    setMassage(error.massage);
  }
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
          onChangeText={text => setEmail(text)}
          keyboardType='email-address'
          placeholderTextColor='black'
        />
        <InputFieldsPassword
          placeholder="password"
          value={password}
          onChangeText={text => setPassword(text)}
          placeholderTextColor='black'
          secureTextEntry={true}
          keyboardType='numeric'
        />

        <TouchableOpacity onPress={() =>
          navigation.navigate('Forgot page')
        }>
          <ForgotText textData5="forgot your password?" />
        </TouchableOpacity>
        <BtnsCard Btns="Login" onPress={handleLogin} />
        <TextFour textData4="----Or----" />
        <BtnsCard Btns="Create account" onPress={() =>
          navigation.navigate('SignUp page')
        }
        />
        <Text>{massage}</Text>
      </ScrollView>

    </View>


  );
}


export default LogIn;


 // const [isValid, setIsValid] = useState(false);

  // const validateInput = () => {
  //   if (email && password && password.length >= 8) {
  //     setIsValid(true);
  //   } else if (email === '' && password === '') {
  //     setIsValid(false);
  //   }
  // }
  // const handleEmailChange = (email) => {
  //   setEmail(email);
  //   validateInput();
  // }

  // const handlePasswordChange = (passowrd) => {
  //   setPassword(passowrd);
  //   validateInput();
  // }
  // const handleSubmit = () => {
  //   if (isValid) {
  //     // alert('Your form have been submited');
  //     setEmail('');
  //     setPassword('');
  //   } else {
  //     alert('Please enter a valid email and password');

  //   }
  // }
  // const paymentValid = () => {
  //   if (isValid ) {
  //     navigation.navigate('Getdata page')
  //   }
  // }
  // const functionCombined = () => {
    // handleSubmit();
    // paymentValid();
  //   handleLogin();
  // }