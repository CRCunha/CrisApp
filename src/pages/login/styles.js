import { StyleSheet, Dimensions } from 'react-native';
import { base, fontMediun, pallet3 } from '../../../configs/colors';
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
  logo: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  ilustrationContainer: {
    height: '40%',
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  content: {
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
    color: `${fontMediun}`,
    fontSize: 12,
    marginTop: 10,
    //letterSpacing: 1,
  },
  signup: {
    color: `${pallet3}`,
    marginTop: 10,
    fontSize: 13,
    fontWeight: 'bold',
    //letterSpacing: 1,
  },
  textLogin: {
    marginTop: 50,
    marginBottom: 20,

    color: `${pallet3}`,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    //letterSpacing: 1,
  },
  buttonContainer: {
    marginTop: '5%',
    padding: 15,
    width: '90%',
    height: 100,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    width: '95%',
    height: 50,
    padding: 12,
    borderRadius: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `${pallet3}`,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 1,
  },
  buttonText: {
    fontSize: 16,
    color: `${base}`,
    fontWeight: '500',
  },
  headerInfos: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInfos: {
    width: '80%',
    marginTop: 35,
  },
  inputs: {
    marginTop: 40,
    width: '80%',
    minHeight: 100,
  },
  inputText: {
    backgroundColor: 'transparent',
    marginTop: 10,
    color: `${pallet3}`,
    borderColor: `${pallet3}`,
  },
});
