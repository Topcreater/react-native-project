
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import Welcome from './screens/Welcome';
import LogIn from './screens/Login';
import Singup from './screens/Signup';
import Forgot from './screens/Forgot';
import Payments from './screens/Payments';
import Getdata from './screens/Getdata';
import { StripeProvider } from '@stripe/stripe-react-native';
const Stack = createNativeStackNavigator();
export default function App(): JSX.Element {
  const stripePublishableKey = "pk_test_51N8zjbIMZqODXWwi8usTjeJYKAsHwWJNTEsaFpvMoaSMXRxtWeQoyBSjqi7pj5xamGvVrQX2Myenmssy8vUNmpQg00LoDO2QsA";
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  
  return (
    <StripeProvider
    publishableKey={stripePublishableKey}  >
  
    <NavigationContainer>
      <Stack.Navigator>
<Stack.Screen  name='Welcome page' component={Welcome} options={{ headerShown: false, }} /> 
<Stack.Screen  name='LogIn page' component={LogIn}  options={{ headerShown: false, }}/>
<Stack.Screen name='SignUp page' component={Singup} options={{ headerShown: false, }}/>
<Stack.Screen name='Payments page' component={Payments} options={{ headerShown: false, }}/>
<Stack.Screen name='Forgot page' component={Forgot} options={{ headerShown: false, }}/>
<Stack.Screen name='Getdata page' component={Getdata} options={{ headerShown: false, }}/>
</Stack.Navigator>
      </NavigationContainer>
      </StripeProvider>

  );
}



