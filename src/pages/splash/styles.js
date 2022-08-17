import { StyleSheet, Dimensions } from 'react-native';
import { base, fontLightGreen, pallet1 } from '../../../configs/colors';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    width: width,
    height: height,
    flex: 1,
    backgroundColor: `${base}`,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackGround: {
    witdh: '100%',
    width: width,
    height: height,

    alignItems: 'center',
  },
  ilustrationContainer: {
    height: '55%',
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  ilustration: {
    width: '100%',
    height: '92%',
  },
  textInfo: {
    marginTop: 35,
    padding: 15,
    color: `${fontLightGreen}`,
    fontSize: 20,
    textAlign: 'center',
    //letterSpacing: 1,
  },
  buttonContainer: {
    marginTop: '15%',
    padding: 15,
    width: '90%',
    height: 100,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: 50,
    padding: 12,
    borderRadius: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${base}`,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  buttonText: {
    color: `${pallet1}`,
  },
});
