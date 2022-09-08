import {
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import styles from './styles.js';
import {
  TextInput,
  Dialog,
  Portal,
  Paragraph,
  Button,
  Provider,
} from 'react-native-paper';
import React, { useState } from 'react';
import * as EmailValidator from 'email-validator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { fontDark } from '../../../configs/colors';

const Login = ({ navigation }) => {
  const ImageBackgroundAsset = '../../../assets/login.png';
  const LogoAsset = '../../../assets/icon.png';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = React.useState(false);
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const validate = () => {
    let validationEmail = EmailValidator.validate(email);
    let validationPassword;

    if (password.length <= 3) {
      validationPassword = false;
    } else {
      validationPassword = true;
    }

    sendFields(validationEmail, validationPassword);
  };

  const sendFields = (validationEmail, validationPassword) => {
    if (validationEmail === true && validationPassword === true) {
      navigation.navigate('Home');
    } else {
      showDialog();
    }
  };

  const ModalDialogError = () => {
    return (
      <Provider>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Login</Dialog.Title>
            <Dialog.Content>
              <Paragraph>Invalid e-mail or password try again</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </Provider>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ImageBackground
        source={require(`${ImageBackgroundAsset}`)}
        style={styles.imageBackGround}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.imageBackGround}>
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
                  value={email}
                  mode="outlined"
                  label={false}
                  onChangeText={(email) => setEmail(email)}
                />
                <Text style={styles.textInfo}>Password</Text>
                <TextInput
                  style={styles.inputText}
                  label="Password"
                  value={password}
                  mode="outlined"
                  label={false}
                  secureTextEntry={isPasswordSecure}
                  onChangeText={(password) => setPassword(password)}
                  right={
                    <TextInput.Icon
                      name={() => (
                        <Icon
                          name={isPasswordSecure ? 'eye-off' : 'eye'}
                          size={22}
                          color={`${fontDark}`}
                        />
                      )} // where <Icon /> is any component from vector-icons or anything else
                      onPress={() => {
                        isPasswordSecure
                          ? setIsPasswordSecure(false)
                          : setIsPasswordSecure(true);
                      }}
                    />
                  }
                />
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={validate} style={styles.button}>
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.textInfos}>
                <Text style={styles.textInfo}>Don't have an account yet?</Text>
                <Text style={styles.signup}>Sign Up</Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
        {ModalDialogError()}
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Login;
