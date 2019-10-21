import React from 'react';
import {Card} from 'native-base';
import Carousel from 'react-native-banner-carousel';

import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
  Image,
} from 'react-native';
import ScrollableItem from '../../widget/ScrollableItem';
const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;
const data = [
  {id: 'Hotel', value: require('../../assets/hotel.png')},
  {id: 'Pesawat', value: require('../../assets/plane.png')},
  {id: 'Kereta', value: require('../../assets/train.png')},
  {id: 'Bus', value: require('../../assets/bus.png')},
  {id: 'Rental Mobil', value: require('../../assets/car.png')},
];

const numColumns = 3;
const size = Dimensions.get('window').width / numColumns;

const images = [
  'https://www.pegadaian.co.id/uploads/produk/a1f600653bd5794b952c4ad15c11d713_thumb.jpg',
  'https://www.pegadaian.co.id/uploads/produk/e2b811d1e7d157b81721cfd9e40b3aa4_thumb.jpg',
  'https://www.pegadaian.co.id/uploads/produk/c6b5c07490e6d7aeb6c0b9a54d761aa0_thumb.jpg',
];

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  renderPage(image, index) {
    return (
      <View key={index}>
        <Image
          style={{width: BannerWidth, height: 150}}
          source={{uri: image}}
        />
      </View>
    );
  }

  render() {
    return (
      <ScrollView>
        <View>
          <View style={styles.header}>
            <Text style={styles.txtHeader}> Bolang.Com </Text>
          </View>
          <View>
            <Card>
              <Carousel
                autoplay
                autoplayTimeout={5000}
                loop
                index={0}
                pageSize={BannerWidth}>
                {images.map((image, index) => this.renderPage(image, index))}
              </Carousel>
            </Card>
          </View>
          <FlatList
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'center',
              marginTop: 10,
            }}
            data={data}
            renderItem={({item}) => (
              <Card style={styles.cardContainer}>
                <TouchableOpacity
                  onPress={() => {
                    if (item.id == 'Kereta') {
                      this.props.navigation.navigate('account1', {
                        otherParam: 'Detail Account1',
                      });
                    } else {
                      ToastAndroid.show('Soon !!', ToastAndroid.SHORT);
                    }
                  }}>
                  <View style={styles.itemContainer}>
                    <Image
                      style={styles.imageMenu}
                      source={item.value}
                      resizeMode={'contain'}
                    />
                    <Text style={styles.item}>{item.id}</Text>
                  </View>
                </TouchableOpacity>
              </Card>
            )}
            keyExtractor={item => item.id}
            numColumns={numColumns}
          />
          <View>
            <Text style={styles.textRecomended}>Rekomendasi Untuk Anda</Text>
            <ScrollView horizontal style={styles.scrolViewStyle}>
              <TouchableOpacity
                style={styles.scrolViewStyle}
                onPress={() => {
                  ToastAndroid.show('Soon !!', ToastAndroid.SHORT);
                }}>
                <ScrollableItem 
                  title="Wisata KKN Desa Penari"
                  img={require('../../assets/image-recomend1.jpeg')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.scrolViewStyle}
                onPress={() => {
                  ToastAndroid.show('Soon !!', ToastAndroid.SHORT);
                }}>
                <ScrollableItem
                  title="Goa Jepang Bandung"
                  img={require('../../assets/image-recomend2.jpeg')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.scrolViewStyle}
                onPress={() => {
                  ToastAndroid.show('Soon !!', ToastAndroid.SHORT);
                }}>
                <ScrollableItem
                  title="Wisata lawang sewu penuh misteri"
                  img={require('../../assets/image-recomend3.jpeg')}
                />
              </TouchableOpacity>
            </ScrollView>
          </View>
          {/* <Text>Home</Text>
          <Button
            title="Ke Child Page"
            onPress={() => {
              this.props.navigation.navigate('home1', {
                otherParam: 'Detail Home1',
              });
            }}
          />
          <Button
            title="Ke Introduction"
            onPress={() => {
              this.props.navigation.navigate('Introduction');
            }}
          /> */}
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  cardContainer: {
    margin: 30,
  },
  containerStyle: {},
  itemContainer: {
    width: size,
    height: size,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: size,
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
  imageMenu: {
    height: 70,
    width: 70,
    alignItems: 'center',
  },
  scrolViewStyle: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
  },
  viewRecomendStyle: {
    marginTop: 10,
  },
  textRecomended: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  txtHeader: {
    fontSize: 20,
    margin: 10,
    color: '#fff',
  },
  header: {
    backgroundColor: '#008d4b',
    height: 40,
  },
  header2: {
    backgroundColor: '#008d4b',
    height: 100,
  },
});
