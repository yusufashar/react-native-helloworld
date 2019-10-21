import React from 'react';
import {Button, Text, View} from 'react-native';

export default class Kategori1 extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    const {params} = navigation.state;

    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
      headerStyle: {
        backgroundColor: navigationOptions.headerStyle.backgroundColor,
      },
    };
  };
  render() {
    return (
      <View>
        <Text>Kategori1</Text>
        <Button
          title="Ke Parent Page"
          onPress={() => {
            this.props.navigation.navigate('category', {
              otherParam: 'Main Page',
            });
          }}
        />
      </View>
    );
  }
}
