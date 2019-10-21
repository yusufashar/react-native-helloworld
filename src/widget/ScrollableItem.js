import React from 'react';
import {View, Image, Dimensions, StyleSheet, Text} from 'react-native';
import {Card} from 'native-base';

const size = Dimensions.get('window').width;

const ScrollableItem = props => {
  return (
    <Card style={styles.cardStyle}>
      <View>
        <View style={{width: 100, height: 100, borderRadius: 10}}>
          <Image source={props.img} style={styles.imageStyle} />
        </View>
        <Text style={styles.textStyle}>{props.title}</Text>
      </View>
    </Card>
  );
};

export default ScrollableItem;

const styles = StyleSheet.create({
  cardStyle: {
    marginRight: 10,
    padding: 5,
  },
  imageStyle: {
    width: size,
    height: 60,
    alignSelf: 'center',
    flexGrow: 1,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 13,
    color: '#1C1C1C',
    marginTop: 12,
  },
});
