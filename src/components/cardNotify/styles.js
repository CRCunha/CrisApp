import { StyleSheet, Dimensions } from 'react-native';
import { base, fontDark, pallet1, fontMediun } from '../../../configs/colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
  cardNotify: {
    width: '100%',
    minHeight: 155,

    backgroundColor: `${base}`,

    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 20,
    color: `${fontDark}`,

    marginBottom: 5,
  },
  tagContainer: {
    width: '100%',

    flexDirection: 'row',
    alignItems: 'center',
  },
  tag: {
    width: 16,
    height: 16,
    backgroundColor: `${pallet1}`,
    borderRadius: 100,
  },
  tagText: {
    marginLeft: 8,
    fontSize: 16,
    color: `${fontMediun}`,
  },
  textConmtainer: {
    marginTop: 30,
    width: '100%',
    minHeight: 30,
  },
  cardText: {
    fontSize: 14,
    color: `${fontMediun}`,
  },
  loadingContainer: {
    width: '100%',
    height: 155,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
