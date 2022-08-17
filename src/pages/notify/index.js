import { View, TouchableOpacity, ImageBackground } from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import { pallet1 } from '../../../configs/colors';
import styles from './styles.js';

// https://dribbble.com/shots/19058343-pics-for-InnerSense

const Notify = ({ navigation }) => {
  const ImageBackgroundAsset = '../../../assets/header.jpg';
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require(`${ImageBackgroundAsset}`)}
        resizeMode="cover"
        style={styles.headerBackground}
      >
        <View style={styles.content}>
          <View style={styles.headerInfos}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.buttonContainer}
            >
              <IconMaterial
                name="chevron-left"
                size={30}
                color={`${pallet1}`}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.buttonSettingsContainer}
            >
              <IconMaterial
                name="dots-vertical"
                size={30}
                color={`${pallet1}`}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.cardNotify}></View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Notify;
