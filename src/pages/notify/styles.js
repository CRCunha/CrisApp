import { StyleSheet, Dimensions } from 'react-native';
import { base, fontDark, fontLight } from '../../../configs/colors';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  headerBackground: {
    width: '100%',
    height: '100%',
  },
  content: {
    width: width,
    height: height,

    paddingHorizontal: 25,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  headerInfos: {
    width: '100%',
    height: 90,

    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  buttonContainer: {
    width: 45,
    height: 45,

    backgroundColor: `${base}`,

    borderRadius: 100,

    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSettingsContainer: {
    width: 29,
    height: 45,

    backgroundColor: `${base}`,

    borderRadius: 100,

    alignItems: 'center',
    justifyContent: 'center',
  },
  cardNotify: {
    width: '100%',
    height: 200,

    backgroundColor: `${base}`,

    borderRadius: 30,
  },
});
