import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Splash from './src/pages/splash';
import Home from './src/pages/home';
import Mark from './src/pages/mark';
import Notify from './src/pages/notify';
import Settings from './src/pages/settings';

// https://dribbble.com/shots/18135924-Parcel-Tracking-App

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <Stack.Navigator
        hidden={true}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Mark" component={Mark} />
        <Stack.Screen name="Notify" component={Notify} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
