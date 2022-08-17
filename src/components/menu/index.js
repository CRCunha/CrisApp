import { View, Text, TouchableOpacity } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { pallet1 } from '../../../configs/colors';
import { useRoute } from '@react-navigation/native';
import styles from './styles.js';

const Menu = ({ navigation }) => {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.menuActive}
      >
        <IconEntypo name="home" size={20} color={`${pallet1}`} />
        {route.name == 'Home' ? (
          <Text style={styles.menuButtonText}>Home</Text>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Mark')}
        style={styles.menuActive}
      >
        <IconIonicons name="bookmarks" size={20} color={`${pallet1}`} />
        {route.name == 'Mark' ? (
          <Text style={styles.menuButtonText}>Mark</Text>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Notify')}
        style={styles.menuActive}
      >
        <IconMaterial name="bell" size={20} color={`${pallet1}`} />
        {route.name == 'Notify' ? (
          <Text style={styles.menuButtonText}>Notify</Text>
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Settings')}
        style={styles.menuActive}
      >
        <IconFontAwesome name="gear" size={22} color={`${pallet1}`} />
        {route.name == 'Settings' ? (
          <Text style={styles.menuButtonText}>Settings</Text>
        ) : null}
      </TouchableOpacity>
    </View>
  );
};
export default Menu;
