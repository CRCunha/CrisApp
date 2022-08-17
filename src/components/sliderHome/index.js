import {
  View,
  ScrollView,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles.js';
import CardSlider from '../cardSlider/index.js';

const SliderHome = ({ navigation }) => {
  return (
    <ScrollView
      horizontal={true}
      vertical={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        paddingLeft: 20,
      }}
    >
      <CardSlider
        navigation={navigation}
        icon="calculator-variant"
        size={30}
        text={'Calculate your shipment'}
      />
      <CardSlider
        navigation={navigation}
        icon="wallet"
        size={30}
        text={'Pay for parcel'}
      />
    </ScrollView>
  );
};

export default SliderHome;
