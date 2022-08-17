import {
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles.js';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import { pallet1 } from '../../../configs/colors';

const cardSlider = ({ navigation, icon, size, text }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.iconContainer}>
          <IconMaterial name={icon} size={size} color={`${pallet1}`} />
        </View>
      </View>
      <View style={styles.cardTextContainer}>
        <Text style={styles.cardText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default cardSlider;
