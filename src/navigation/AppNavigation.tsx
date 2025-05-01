import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BootSplash from 'react-native-bootsplash';

import {Home} from '@screens';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {AppColors} from '@config';
import CustomDrawerContent from './CustomDrawerContent';

// constants
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: AppColors.background,
  },
};

const StackScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={
        {
          // headerTintColor: '#fff',
          // headerTitleStyle: {
          //   fontWeight: 'normal',
          //   fontSize: 20,
          // },
        }
      }>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer
      theme={MyTheme}
      onReady={() => {
        BootSplash.hide();
      }}>
      <Drawer.Navigator
        drawerContent={() => <CustomDrawerContent />}
        screenOptions={{
          headerShown: false,
        }}>
        <Drawer.Screen name="StackScreens" component={StackScreens} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
