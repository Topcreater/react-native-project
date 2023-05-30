import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {BgImage} from '../Componets/BgImage';
import {Heading,  TextFour} from '../Componets/HeadingText';
import BtnsCard from '../Componets/Btns';
import { InputFiled, InputFieldsPassword } from '../Componets/InputFields';
import auth from '@react-native-firebase/auth';
const Singup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignIn = async()=>{
    if (password !== confirmPassword) {
      alert('passowrd not matched');
      return;
    }
    try {
      const userCreated = await auth().createUserWithEmailAndPassword(email,
        password, name, confirmPassword);
        console.log(userCreated);
        navigation.navigate('Payments page')
    } catch (error) {
      console.log(error);
  
      setMessage(error.message);
    }
  };
  let errorText = null;
  if (message) {
    errorText = <Text>Error: {message}</Text>;
  }
 
 
// const paymentValid = () => {
//   if ( userCreated(true)) {
//     navigation.navigate('Payments page')
//   }
// }
  

  const functionCombined = () => {
    // handleSubmit();
    // validatePasswords();
    // paymentValid();
    // handlePostData();
    handleSignIn();
    // navigation.navigate('Payments page')
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
            <BtnsCard Btns="Sign up" onPress={functionCombined}
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
  


export default Singup;


// const validateInput = () => {
//   if (name && alphaRegex.test(name) && email && regex.test(email) && number && numericRegex.test(number) && password && confirmPassword) {
//     setIsValid(true);
//   } else {
//     setIsValid(false);
//   }
// }
// const alphaRegex = /^[a-zA-Z]+$/;
// const handlenameChange = (text) => {
//   setName(text);
//   validateInput();

// }
// const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
// const handleEmailChange = (email) => {
//   setEmail(email);
//   validateInput();

// }
// const numericRegex = /^\d{10}$/;
// const handleNumberChange = (text) => {
//   setNumber(text);
//   validateInput();

// }
// const handlePasswordChange = (text) => {
//   setPassword(text);
//   validateInput();
// }
// const handleconfirmPasswordChange = (text) => {
//   setConfirmPassword(text);
//   validateInput();
// }
// const validatePasswords = () => {
//   if (password === confirmPassword) {
//     console.log('passowrd matched');
//   } else {
//     alert('passowrd not matched');
//   }
// };

// const handleSubmit = () => {
//   if (isValid) {
//     alert('Your form have been submited');
//     setEmail('');
//     setPassword('');
//     setConfirmPassword('');
//     setName('');
//     setNumber('');
//   } else {
//     alert('Please enter a valid email and number and password');
//   }
// }
// const paymentValid = () => {
//   if ( password === confirmPassword) {
//     navigation.navigate('Payments page')
//   }
// }

  // const handlePostData = async () => {
  //   try {
  //     await sendFormData();
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  // const sendFormData = async () => {
  //   const requestBody = {
  //     name: name,
  //     email: email,
  //     number: number,
  //     password: password,
  //     confirmPassword: confirmPassword
  //   };

  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(requestBody)
  //   });

  //   const data = await response.json();
  //   console.log(data);
  //   // Handle the API response
  // };