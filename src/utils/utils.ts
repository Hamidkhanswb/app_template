import {Platform} from 'react-native';
import {PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import Toast from 'react-native-toast-message';
import Clipboard from '@react-native-clipboard/clipboard';

const requestPermission = (
  permission: string,
  onGranted?: () => void,
  onNeedAccess?: (result: string) => void,
) => {
  let platformPermission =
    Platform.OS === 'ios'
      ? PERMISSIONS.IOS[permission as keyof typeof PERMISSIONS.IOS]
      : PERMISSIONS.ANDROID[permission as keyof typeof PERMISSIONS.ANDROID];

  request(platformPermission).then(result => {
    switch (result) {
      case RESULTS.BLOCKED:
        onNeedAccess && onNeedAccess(result);
        break;
      case RESULTS.DENIED:
        onNeedAccess && onNeedAccess(result);
        break;
      case RESULTS.LIMITED:
        onGranted?.();
        break;
      case RESULTS.GRANTED:
        onGranted?.();
        break;
      default:
        console.log('Default called');
        break;
    }
  });
};
const showToast = (
  status: 'success' | 'error' | 'warning' | 'info',
  text1: string,
  text2?: string,
  position?: 'top' | 'bottom',
  duration = 3000,
) => {
  Toast.show({
    type: 'custom_toast',
    text1: text1,
    text2: text2,
    visibilityTime: duration,
    position: position ?? 'bottom',
    props: {status: status},
  });
};

const copyToClipboard = (inputValue: string) => {
  Clipboard.setString(inputValue);
  showToast('success', 'Copied To Clipboard!');
};
function isValidJSON(data: any) {
  try {
    JSON.parse(data);
    return true;
  } catch (error) {
    return false;
  }
}

export {requestPermission, showToast, copyToClipboard, isValidJSON};
