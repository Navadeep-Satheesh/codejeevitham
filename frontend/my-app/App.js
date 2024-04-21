
import { StyleSheet } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AsyncStorage } from 'react-native';


import Payment from './stacks/payment';
import Home from './stacks/home';
import Signin from './stacks/signin';
import Upi_screen from './stacks/upi_screen';
import VideoRecordPage from './stacks/videorecordpage';
import AmountScreen from './stacks/AmountScreen';
import VendorSelection from './stacks/vendorselect';

import React, { useEffect } from 'react';

const Stack = createNativeStackNavigator();


export default function App() {

  const ip = "http://192.168.18.68:8080"

  const [initialScreen, setInitialScreen] = React.useState("signin");

  async function getData() {
    try {
      const data = await AsyncStorage.getItem('signed_in');
      if (data != null) {
        if (data == "1") {
          setInitialScreen("home");
        }
      }

    } catch(e) {
      console.log(e);
    }
  }

  useEffect( () => {

    getData();


  }, [])

  return (



    <NavigationContainer>
      <Stack.Navigator

        initialRouteName={initialScreen}

        screenOptions={{
          headerShown: false
        }}

        >

        <Stack.Screen  name="home" component={Home} />
        <Stack.Screen  name="payment" component={Payment} />
        <Stack.Screen  name="signin" component={Signin} />
        <Stack.Screen  name="video" component={VideoRecordPage} />
        <Stack.Screen  name="amountscreen" component={AmountScreen} />
        <Stack.Screen  name="upiscreen" component={Upi_screen} />
        <Stack.Screen  name="vendorselection" component={VendorSelection} />

      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
