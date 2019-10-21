import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';

import {Form, Item, Input} from 'native-base';

export default class Login extends React.Component {
  // static navigationOptions = {
  //     title: 'Introduction'
  // };
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.background}>
        <ImageBackground
          source={require('../../assets/background.jpg')}
          style={styles.backgroundImage}>
          <View>
            <Text style={styles.textTitle}>Bolang.Com</Text>
            <Form style={styles.styleForm}>
              <Item style={styles.inputStyle}>
                <Input placeholder="Username" />
              </Item>
              <Item style={styles.inputStyle}>
                <Input placeholder="Password" />
              </Item>
            </Form>
          </View>
          <View style={styles.buttonStyle}>
            <Button
              title="Login"
              onPress={() => {
                this.props.navigation.navigate('HomeNavigation', {
                  otherParam: 'Main Page',
                });
              }}
            />
          </View>
          <View style={styles.viewStyle}>
            <Text>Belum Terdaftar?</Text>
            <TouchableOpacity
              style={styles.text}
              onPress={() => {
                this.props.navigation.navigate('Register', {
                  otherParam: 'Main Page',
                });
              }}>
              <Text>Register</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: '#E9E9E9',
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  },
  styleForm: {
    margin: 15,
    borderRadius: 5,
    backgroundColor: '#f343',
  },
  textTitle: {
    marginBottom: 15,
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  inputStyle: {
    marginRight: 15,
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'stretch',
    width: null,
  },
  buttonStyle: {
    marginRight: 15,
    marginLeft: 15,
  },
  viewStyle: {
    marginTop: 15,
    alignSelf: 'center',
  },
  text: {
    alignSelf: 'center',
    marginTop: 5,
    fontSize: 15,
  },
});
