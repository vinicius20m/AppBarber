/* eslint-disable dot-notation */
import {ToastAndroid} from 'react-native';

export default (type, message) => {
  let positions = [];
  positions['top'] = ToastAndroid.TOP;
  positions['center'] = ToastAndroid.CENTER;
  positions['bottom'] = ToastAndroid.BOTTOM;

  let offsets = [];
  offsets['top'] = 70;
  offsets['center'] = 0;
  offsets['bottom'] = 70;

  return ToastAndroid.showWithGravityAndOffset(
    message,
    ToastAndroid.SHORT,
    positions[type],
    0,
    offsets[type],
  );
};
