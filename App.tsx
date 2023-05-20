
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
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import Welcome from './screens/Welcome';
import LogIn from './screens/Login';
import Singup from './screens/Signup';
import Forgot from './screens/Forgot';
import Payments from './screens/Payments';
import { SP_key } from '@env';
import { StripeProvider } from '@stripe/stripe-react-native';
const Stack = createNativeStackNavigator();
export default function App(): JSX.Element {
 
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  
  return (
 
    <NavigationContainer>
      <Stack.Navigator>
<Stack.Screen  name='Welcome page' component={Welcome} options={{ headerShown: false, }} /> 
<Stack.Screen  name='LogIn page' component={LogIn}  options={{ headerShown: false, }}/>
<Stack.Screen name='SignUp page' component={Singup} options={{ headerShown: false, }}/>
<Stack.Screen name='Payments page' component={Payments} options={{ headerShown: false, }}/>
<Stack.Screen name='Forgot page' component={Forgot} options={{ headerShown: false, }}/>
  </Stack.Navigator>
<View>
<StripeProvider
      publishableKey={SP_key}
      merchantIdentifier="merchant.identifier" // required for Apple Pay
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      >
      
    </StripeProvider>
</View>
      </NavigationContainer>

  );
}



