import {
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles.js';

const Splash = ({ navigation }) => {
  const ImageBackgroundAsset = '../../../assets/header.jpg';

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require(`${ImageBackgroundAsset}`)}
        resizeMode="cover"
        style={styles.imageBackGround}
      >
        <View style={styles.ilustrationContainer}></View>
        <View>
          <Text style={styles.textInfo}></Text>
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
