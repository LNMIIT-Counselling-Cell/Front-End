
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OutPass from './components/Outpass/Outpass';
import OutpassGenerated from './components/Outpass/OutpassGenerated';
import Home from './components/Home';
import Council from './components/council';
import Cultural from './components/Cultural.js/Cultural';
import Tech from './components/Tech/Tech';
import Sports from './components/sports/Sports';
import MediaCell from './components/Clubs/MediaCell';
import PreviousOutpass from './components/Outpass/PreviousOutpass';
import Administration from './components/Admin/Administration';

export default function App() {
   const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : false}} initialRouteName = "Admin">
        <Stack.Screen name = "Outpass" component = {OutPass} />
        <Stack.Screen name = "Generated" component = {OutpassGenerated} />
        <Stack.Screen name='PO' component={PreviousOutpass} />
        <Stack.Screen name = "Home" component = {Home} />
        <Stack.Screen name='Gym' component={Council} />
        <Stack.Screen name='Cult' component={Cultural} />
        <Stack.Screen name = 'Tech' component={Tech} />
        <Stack.Screen name='Sports' component={Sports} />
        <Stack.Screen name='MC' component={MediaCell} />
        <Stack.Screen name='Admin' component= {Administration} />

        
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
