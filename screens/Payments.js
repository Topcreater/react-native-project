
import React, { useState } from 'react';
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
import PayBtn from '../Componets/PayBtn';
import { CardField, createToken } from '@stripe/stripe-react-native';

function Payments() {
  const [cardInfo, setCardInfo] = useState(null);

  const fetchCardDetail = (cardDetails) => {

if (cardDetails.complete) {
  setCardInfo(cardDetails)
} else{
  setCardInfo(null)
}
  }
  const onDone =async() => {
  console.log("cardInfocardIndo",cardInfo)
  if (!!cardInfo) {
    try {
      const resToken = await createToken[{...cardInfo, type:'Card'}]
      console.log( resToken)
    } catch (error) {
      alert("Error are ocure during create token")
    }
  }
  disabled = false
}



  return (
    <View style={styles.container}>
    <SafeAreaView style={{flex: 1}}>
      <View style={{padding: 10}}>
       {/* <ImageBackground style={styles.Image} source={firstImage} /> */}
       <CardField
      postalCodeEnabled={false}
      placeholders={{
        number: '4242 4242 4242 4242',
      }}
      cardStyle={{
        backgroundColor: 'black',
        textColor: 'white',
      }}
      style={{
        width: '100%',
        height: 50,
        marginVertical: 30,
      }}
      onCardChange={(cardDetails) => {
        fetchCardDetail (cardDetails)
      }}
      onFocus={(focusedField) => {
        console.log('focusField', focusedField);
      }}
    />
   <PayBtn
   onPress={onDone}
   disabled={!cardInfo}
   />
    </View>
    </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({ 

  container: {
   flex: 1, 
  }
})

export default Payments;
