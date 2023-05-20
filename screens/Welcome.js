
import React from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
} from 'react-native';

import { Heading,  TextFour } from '../Componets/HeadingText';
import { BgImage, WelcomeImage } from '../Componets/BgImage';
import BtnsCard from '../Componets/Btns';
function Welcome({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <BgImage />
        <ScrollView>
          <WelcomeImage />
          <Heading
            textData="Welcome buddy!"
            textData2="Join our team and get best"
          />
          <BtnsCard Btns="Login" onPress={() =>
            navigation.navigate('LogIn page')
          }
          />
          <TextFour textData4="----Or----" />
          <BtnsCard Btns="Sign up" onPress={() =>
            navigation.navigate('SignUp page')
          }
          />
        </ScrollView>

      </View>

    </SafeAreaView>
  );
}


export default Welcome;
