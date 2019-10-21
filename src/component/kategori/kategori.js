import React from 'react';
import {Button, StyleSheet, ScrollView, Image, Text, View} from 'react-native';
import {Card} from 'native-base';

export default class Kategori extends React.Component {
  render() {
    return (
      <ScrollView>
        <View>
          <View style={styles.header}>
            <Text style={styles.txtHeader}> Pesanan </Text>
          </View>
          <View style={styles.contentPesanan}>
            <Text>Pesanan Anda</Text>
          </View>
          {/* <Button
            title="Ke Child Page"
            onPress={() => {
              this.props.navigation.navigate('category1', {
                otherParam: 'Detail Category1',
              });
            }}
          /> */}
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  txtHeader: {
    fontSize: 20,
    margin: 10,
    color: '#fff',
  },
  header: {
    backgroundColor: '#008d4b',
    height: 40,
  },
  contentPesanan: {
    marginTop: 10,
    marginLeft: 10,
  },
});
