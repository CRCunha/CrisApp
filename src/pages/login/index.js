import {
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles.js';
import { TextInput } from 'react-native-paper';
import React, { useState } from 'react';

const Login = ({ navigation }) => {
  const ImageBackgroundAsset = '../../../assets/login.png';
  const LogoAsset = '../../../assets/icon.png';

  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require(`${ImageBackgroundAsset}`)}
        style={styles.imageBackGround}
      >
        <View style={styles.ilustrationContainer}>
          <View style={styles.headerInfos}>
            <Image
              source={require(`${LogoAsset}`)}
              resizeMode="cover"
              style={styles.logo}
            />
            <Text style={styles.textLogin}>Cris APP</Text>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.inputs}>
            <Text style={styles.textInfo}>Email</Text>
            <TextInput
              style={styles.inputText}
              label="Email"
              value={text}
              mode="outlined"
              label={false}
              onChangeText={(text) => setText(text)}
            />
            <Text style={styles.textInfo}>password</Text>
            <TextInput
              style={styles.inputText}
              label="Password"
              value={text}
              mode="outlined"
              label={false}
              onChangeText={(text) => setText(text)}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.textInfos}>
            <Text style={styles.textInfo}>Don't have an account yet?</Text>
            <Text style={styles.signup}>Sign Up</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;
