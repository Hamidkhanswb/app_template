/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import 'react-native-gesture-handler'; // to avoid crashed according to docs
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
LogBox.ignoreLogs(['Reanimated 2']);

AppRegistry.registerComponent(appName, () => App);
