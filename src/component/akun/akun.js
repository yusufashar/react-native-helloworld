import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Card} from 'native-base';

const size = Dimensions.get('window').width;

export default class Akun extends React.Component {
  render() {
    return (
      <ScrollView style={styles.background}>
        <View>
          <View style={styles.header}>
            <Text style={styles.txtHeader}> Akun Saya </Text>
          </View>
          <View style={styles.header2}>
            <Card style={styles.content_header}>
              <View style={styles.card_profile}>
                <Image
                  source={require('../../assets/img_profile.png')}
                  style={styles.image_profile}
                />
                <View style={styles.view_txt_profile}>
                  <Text style={styles.text_profile}>Yusuf Ashari</Text>
                  <Text style={styles.text_profile}>0898546616</Text>
                </View>
                <View style={styles.button_edit_profile}>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('account1', {
                        otherParam: 'Detail Account1',
                      });
                    }}>
                    <View style={styles.button_custom}>
                      <Text style={{color: '#FFF'}}>Edit</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </Card>
          </View>
          <Card style={styles.content}>
            <View style={styles.buttonContent}>
              <Image
                style={styles.iconStyle}
                source={require('../../assets/ic_faq.png')}
              />
              <Text style={styles.textContent}>FAQ</Text>
            </View>
          </Card>
          <Card style={styles.content}>
            <View style={styles.buttonContent}>
              <Image
                style={styles.iconStyle}
                source={require('../../assets/ic_rate.png')}
              />
              <Text style={styles.textContent}>Beri Nilai Aplikasi</Text>
            </View>
          </Card>
          <Card style={styles.content}>
            <View style={styles.buttonContent}>
              <Image
                style={styles.iconStyle}
                source={require('../../assets/ic_call.png')}
              />
              <Text style={styles.textContent}>Hubungi CS</Text>
            </View>
          </Card>
        </View>
        <Button
          style={styles.exitButtonStyle}
          title="Keluar"
          onPress={() => {
            this.props.navigation.navigate('account1', {
              otherParam: 'Detail Account1',
            });
          }}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#E9E9E9',
    height: size,
    width: size,
  },
  button_edit_profile: {
    justifyContent: 'flex-end',
    alignSelf: 'center',
    flexDirection: 'row',
    flex: 1,
    marginRight: 30,
    borderRadius: 10,
  },
  button_custom: {
    padding: 10,
    backgroundColor: '#008d4b',
    borderRadius: 5,
  },
  txtHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
  header: {
    backgroundColor: '#008d4b',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header2: {
    backgroundColor: '#008d4b',
    height: 100,
  },
  content_header: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    height: 80,
    margin: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 4,
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    height: 60,
    marginTop: 13,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 4,
  },
  card_profile: {
    flex: 1,
    flexDirection: 'row',
  },
  image_profile: {
    margin: 10,
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  view_txt_profile: {
    margin: 10,
  },
  text_profile: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 5,
  },
  iconStyle: {
    width: 30,
    height: 30,
    marginTop: 15,
    marginLeft: 15,
  },
  buttonContent: {
    flexDirection: 'row',
  },
  textContent: {
    marginTop: 15,
    marginLeft: 10,
  },
  exitButtonStyle: {
    marginTop: 50,
  },
});
