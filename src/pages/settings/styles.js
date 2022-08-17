import { StyleSheet, Dimensions } from 'react-native';
import { base, fontDark, fontLight } from '../../../configs/colors';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: `${base}`,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: height - 80,
  },
  menuContainer: {
    height: 70,
    width: '100%',
    borderTopColor: '#F8F8F8',
    borderTopWidth: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    height: '45%',

    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  headerBackground: {
    width: '100%',
    height: '100%',

    alignItems: 'center',
  },
  content: {
    width: '100%',
    height: '55%',
  },
  contentTexts: {
    width: '100%',
    height: '22%',
    paddingHorizontal: 20,

    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  services: {
    fontSize: 26,
    fontWeight: '500',
    color: `${fontDark}`,
  },
  seeAll: {
    color: `${fontLight}`,
  },
});
