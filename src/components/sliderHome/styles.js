import { StyleSheet, Dimensions } from 'react-native';
import { base, fontLightGreen, pallet1 } from '../../../configs/colors';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    width: width,
    height: 200,
    backgroundColor: `${base}`,
  },
});
