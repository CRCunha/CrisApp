import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './styles.js';
import Menu from '../../components/menu';
import SliderHome from '../../components/sliderHome';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import { pallet1 } from '../../../configs/colors';

const Home = ({ navigation }) => {
  const ImageBackgroundAsset = '../../../assets/header.jpg';
  const ImageAvatar = '../../../assets/avatar/avatar2.png';
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
          >
            <View style={styles.headerInfos}>
              <TouchableOpacity style={styles.buttonContainer}>
                <IconMaterial name="orbit" size={30} color={`${pallet1}`} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.avatarContainer}>
                <ImageBackground
                  source={require(`${ImageAvatar}`)}
                  resizeMode="cover"
                  style={styles.headerBackground}
                  imageStyle={{
                    borderRadius: 100,
                  }}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
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

export default Home;
