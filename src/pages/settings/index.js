import { View, Text, ImageBackground } from 'react-native';
import styles from './styles.js';
import Menu from '../../components/menu';
import SliderHome from '../../components/sliderHome';

const Settings = ({ navigation }) => {
  const ImageBackgroundAsset = '../../../assets/header.jpg';
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <ImageBackground
            source={require(`${ImageBackgroundAsset}`)}
            resizeMode="cover"
            style={styles.headerBackground}
            imageStyle={{
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50,
            }}
          ></ImageBackground>
        </View>
        <View style={styles.content}>
          <View style={styles.contentTexts}>
            <Text style={styles.services}>My service</Text>
            <Text style={styles.seeAll}>See all</Text>
          </View>
          <SliderHome />
        </View>
      </View>
      <View style={styles.menuContainer}>
        <Menu navigation={navigation} />
      </View>
    </View>
  );
};

export default Settings;
