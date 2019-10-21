import React from 'react';
import {View, Text, Button} from 'react-native';

export default class Intro extends React.Component {
  // static navigationOptions = {
  //     title: 'Introduction'
  // };
  render() {
    return (
      <View>
        <View>
          <Text>Bolang.Com</Text>
        </View>
        <Button
          title="Go to Main Page"
          onPress={() => {
            this.props.navigation.navigate('HomeNavigation', {
              otherParam: 'Main Page',
            });
          }}
        />
      </View>
    );
  }
}
