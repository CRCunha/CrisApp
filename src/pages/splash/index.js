import {
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles.js';

const Splash = ({ navigation }) => {
  const ImageBackgroundAsset = '../../../assets/getStarted.png';
  const Ilustration = '../../../assets/ilustration.png';

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require(`${ImageBackgroundAsset}`)}
        resizeMode="cover"
        style={styles.imageBackGround}
      >
        <View style={styles.ilustrationContainer}>
          <Image
            style={styles.ilustration}
            source={require(`${Ilustration}`)}
          />
        </View>
        <View>
          <Text style={styles.textInfo}>
            Send a new parcel or track the one
            {'\n'} which your friend have sent
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Splash;
