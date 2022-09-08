import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Text,
} from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import { pallet1 } from '../../../configs/colors';
import styles from './styles.js';
import axios from 'axios';

//https://cdn.dribbble.com/userupload/3370921/file/original-7bbab46e74fe1e1fd86342f2c4e85916.png?compress=1&resize=1024x768&vertical=center

const Mark = ({ navigation }) => {
  const ImageBackgroundAsset = '../../../assets/mark.png';
  const [dataValues, setDataValues] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios({
      method: 'get',
      url: `https://demo.treblle.com/api/v1/articles/voidgs`,
    }).then((response) => {
      setLoading(false);
      setDataValues(response.data.article);
    });
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require(`${ImageBackgroundAsset}`)}
        resizeMode="cover"
        style={styles.headerBackground}
      >
        <View style={styles.contentHeader}>
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
          </View>
        </View>
        <ScrollView style={styles.content}></ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Mark;
