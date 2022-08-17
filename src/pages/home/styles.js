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
    height: '48%',

    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  headerBackground: {
    width: '100%',
    height: '100%',

    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  search: {
    width: '80%',
    height: 45,
    borderRadius: 40,

    blurRadius: 90,
  },
  headerInfos: {
    width: '100%',
    height: 90,

    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',

    paddingHorizontal: 20,
  },
  avatarContainer: {
    width: 50,
    height: 50,

    //backgroundColor: `${pallet1}`,

    borderRadius: 100,

    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: 45,
    height: 45,

    backgroundColor: `${base}`,

    borderRadius: 100,

    alignItems: 'center',
    justifyContent: 'center',
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
