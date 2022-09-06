import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, ImageBackground, Text } from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import { pallet1 } from '../../../configs/colors';
import styles from './styles.js';
import axios from 'axios';

import CardNotify from '../../components/cardNotify';
// https://dribbble.com/shots/19058343-pics-for-InnerSense

const Notify = ({ navigation }) => {
  const ImageBackgroundAsset = '../../../assets/header.jpg';
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
          <CardNotify
            navigation={navigation}
            title={dataValues?.title}
            text={dataValues?.content}
            loading={loading}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Notify;
