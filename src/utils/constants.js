import {Dimensions} from 'react-native';

const TESTING_DEVICE_WIDTH = 414;

export const rem = Dimensions.get('window').width / TESTING_DEVICE_WIDTH;
