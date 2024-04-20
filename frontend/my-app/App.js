
import { StyleSheet } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Payment from './stacks/payment';
import Home from './stacks/home';
import Signin from './stacks/signin';
import Upi_screen from './stacks/upi_screen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator

        screenOptions={{
          headerShown: false
        }}

      >
        <Stack.Screen name="home" component={Upi_screen} />
        <Stack.Screen name="payment" component={Payment} />
        <Stack.Screen name="signin" component={Signin} />
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
