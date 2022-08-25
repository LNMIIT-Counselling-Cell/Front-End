
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
import PreviousOutpass from './components/Outpass/PreviousOutpass';
import Administration from './components/Admin/Administration';
import Aaveg from './components/Clubs/Aaveg';
import Capriccio from './components/Clubs/Capriccio';
import Eminence from './components/Clubs/Eminence';
import Fundoo from './components/Clubs/Fundoo';
import Imagination from './components/Clubs/Imagination';
import Insignia from './components/Clubs/Insignia';
import LitCom from './components/Clubs/LC';
import MediaCell from './components/Clubs/MediaCell';
import Rendition from './components/Clubs/Rendition';
import Sankalp from './components/Clubs/Sankalp';
import Vignette from './components/Clubs/Vignette';
import Astro from './components/Clubs/Astro';
import Cybros from './components/Clubs/Cybros';
import Cipher from './components/Clubs/Cipher';
import Debsoc from './components/Clubs/Debsoc';
import Ecell from './components/Clubs/Ecell';
import Phoenix from './components/Clubs/Phoenix';
import Quizzinga from './components/Clubs/Quizzinga';
import Vivacity from './components/Fest/Vivacity';
import Plinth from './components/Fest/Plinth';
import Despotivos from './components/Fest/Despotivos';
import AboutUs from './components/AboutUs/AboutUs';
import Facullty from './components/Faculty/Facullty';
import Menu from './components/Menu/Menu';
import TimeTable from './components/TimeTable/TimeTable';

export default function App() {
   const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : false}} initialRouteName = "Outpass">
        <Stack.Screen name = "Outpass" component = {OutPass} />
        <Stack.Screen name = "Generated" component = {OutpassGenerated} />
        <Stack.Screen name='PO' component={PreviousOutpass} />
        <Stack.Screen name = "Home" component = {Home} />
        <Stack.Screen name='Gym' component={Council} />
        <Stack.Screen name='Cult' component={Cultural} />
        <Stack.Screen name = 'Tech' component={Tech} />
        <Stack.Screen name='Sports' component={Sports} />
        <Stack.Screen name='Aaveg' component={Aaveg} />
        <Stack.Screen name='Capriccio' component={Capriccio} />
        <Stack.Screen name='Eminence' component={Eminence} />
        <Stack.Screen name='Fundoo' component={Fundoo} />
        <Stack.Screen name='Imagi' component={Imagination} />
        <Stack.Screen name='Insignia' component={Insignia} />
        <Stack.Screen name='LC' component={LitCom} />
        <Stack.Screen name='MC' component={MediaCell} />
        <Stack.Screen name='Rendition' component={Rendition} />
        <Stack.Screen name='Sankalp' component={Sankalp} />
        <Stack.Screen name='Vignette' component={Vignette} />
        <Stack.Screen name='Astro' component={Astro} />
        <Stack.Screen name='Cybros' component={Cybros} />
        <Stack.Screen name='Cipher' component={Cipher} />
        <Stack.Screen name='Debsoc' component={Debsoc} />
        <Stack.Screen name='Ecell' component={Ecell} />
        <Stack.Screen name='Phoenix' component={Phoenix} />
        <Stack.Screen name='Quizzinga' component={Quizzinga} />
        <Stack.Screen name='Viva' component={Vivacity} />
        <Stack.Screen name='Admin' component= {Administration} />
        <Stack.Screen name='Plinth' component= {Plinth} />
        <Stack.Screen name='Despo' component= {Despotivos} />
        <Stack.Screen name='AU' component= {AboutUs} />
        <Stack.Screen name='Faculty' component= {Facullty} />
        <Stack.Screen name='Menu' component= {Menu} />
        <Stack.Screen name='TT' component= {TimeTable} />


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
