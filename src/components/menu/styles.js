import { StyleSheet, Dimensions } from 'react-native';
import { base, secondary, pallet1 } from '../../../configs/colors';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    padding: 15,
    width: width,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: `${base}`,
  },
  menuActive: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    height: 42,
    borderRadius: 25,
    backgroundColor: `${secondary}`,
  },
  menuButtonText: {
    marginLeft: 10,
    color: `${pallet1}`,
  },
});
