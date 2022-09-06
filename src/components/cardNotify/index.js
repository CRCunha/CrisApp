import { View, Text, ActivityIndicator } from 'react-native';
import styles from './styles.js';
import { pallet1 } from '../../../configs/colors';

// https://dribbble.com/shots/19058343-pics-for-InnerSense

const Notify = ({ navigation, title, text, loading }) => {
  return (
    <View style={styles.cardNotify}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={`${pallet1}`} />
        </View>
      ) : (
        <View>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.tagContainer}>
            <View style={styles.tag} />
            <Text style={styles.tagText}>Pros</Text>
          </View>
          <View style={styles.textConmtainer}>
            <Text style={styles.cardText}>{text}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default Notify;
