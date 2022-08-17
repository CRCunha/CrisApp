import { StyleSheet, Dimensions } from 'react-native';
import {
  base,
  baseGray,
  fontLightGreen,
  fontMediun,
} from '../../../configs/colors';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
  card: {
    width: 250,
    height: 180,

    borderRadius: 40,
    borderWidth: 1,
    borderColor: `${baseGray}`,

    backgroundColor: `${base}`,
    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 20,
    paddingHorizontal: 25,
  },
  cardHeader: {
    width: '100%',
    height: 60,

    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  iconContainer: {
    height: 60,
    width: 60,
    borderRadius: 100,
    backgroundColor: `${fontLightGreen}`,

    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTextContainer: {
    width: '100%',
    height: 80,

    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  cardText: {
    color: `${fontMediun}`,
    fontSize: 19,
  },
});
