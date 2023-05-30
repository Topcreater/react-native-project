import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  StyleSheet,
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
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
const handleLogin = async()=>{
  if (password !== confirmPassword) {
    alert('passowrd not matched');
    return;
  }
  try {
    const userCreated = await auth().createUserWithEmailAndPassword(email,
      password, name, confirmPassword);
      console.log(userCreated);
      setEmail("");
  } catch (error) {
    console.log(error);

    setMessage(error.message);
  }
};
let errorText = null;
if (message) {
  errorText = <Text>Error: {message}</Text>;
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
            placeholder="Your Name"
            value={name}
        onChangeText={text => setName(text)}
            keyboardType='default'
            placeholderTextColor='black'
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
          // keyboardType='numeric'
        />
         <InputFieldsPassword
            placeholder="confirm password"
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
            placeholderTextColor='black'
            secureTextEntry={true}
          />
        <View style={styles.message}>
        {errorText}
</View>
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
      </ScrollView>

    </View>


  );
}
const styles = StyleSheet.create({
message:{
  fontSize: 15,
  textAlign: 'center',
  fontWeight: 'bold',
  color: 'red',
  // backgroundColor: 'red',
  padding:20,
  borderRadius:20
}
})

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