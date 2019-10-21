import React from 'react';
import {Button, Text, View} from 'react-native';

export default class Akun1 extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    const {params} = navigation.state;

    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
      headerStyle: {
        backgroundColor: '#008d4b',
      },
    };
  };
  render() {
    return (
      <View>
        <Text>Akun1</Text>
        <Button
          title="Ke Parent Page"
          onPress={() => {
            this.props.navigation.navigate('account', {
              otherParam: 'Main Page',
            });
          }}
        />
      </View>
    );
  }
}
