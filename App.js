import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import CupertinoButtonLight from './src/components/CupertinoButtonLight';

const App = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.rect}>
          <View style={styles.icon2Row}>
            <IoniconsIcon
              name="md-arrow-back"
              style={styles.icon2}></IoniconsIcon>
            <FeatherIcon name="menu" style={styles.icon}></FeatherIcon>
          </View>

          <View style={styles.imageRow}>
            <Image
              source={require('./src/assets/images/cat.jpg')}
              resizeMode="contain"
              style={styles.image}></Image>
            <View style={styles.marryColumn}>
              <Text style={styles.marry}>Marry</Text>
              <View style={styles.icon3Row}>
                <EntypoIcon
                  name="location-pin"
                  style={styles.icon3}></EntypoIcon>
                <Text style={styles.bakuAzerbaijan}>Baku, Azerbaijan</Text>
              </View>
            </View>
            <CupertinoButtonLight
              caption="Follow"
              style={styles.cupertinoButtonLight}></CupertinoButtonLight>
          </View>
          <View style={styles.loremIpsumRow}>
            <Text style={styles.loremIpsum}>648</Text>
            <Text style={styles.loremIpsum1}>36</Text>
            <Text style={styles.loremIpsum2}>20</Text>
          </View>
          <View style={styles.followRow}>
            <Text style={styles.follow}>Follow</Text>
            <Text style={styles.followers}>Followers</Text>
            <Text style={styles.photos}>Photos</Text>
          </View>
        </View>
        <View style={{marginHorizontal: 25}}>
          <Text style={styles.photos2}>Photos</Text>
          <ScrollView horizontal={true}>
            <View style={styles.image2Row}>
              <Image
                source={require('./src/assets/images/cat1.jpg')}
                resizeMode="contain"
                style={styles.image2}></Image>
              <Image
                source={require('./src/assets/images/cat1.jpg')}
                resizeMode="contain"
                style={styles.image3}></Image>
              <Image
                source={require('./src/assets/images/cat1.jpg')}
                resizeMode="contain"
                style={styles.image4}></Image>
              <Image
                source={require('./src/assets/images/cat1.jpg')}
                resizeMode="contain"
                style={styles.image5}></Image>
              <Image
                source={require('./src/assets/images/cat1.jpg')}
                resizeMode="contain"
                style={styles.image55}></Image>
            </View>
          </ScrollView>
          <Text style={styles.posts}>Posts</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button}>
              <Image
                source={require('./src/assets/images/catt.png')}
                resizeMode="contain"
                style={styles.image6}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button1}>
              <Image
                source={require('./src/assets/images/catt.png')}
                resizeMode="contain"
                style={styles.image7}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.button3Row}>
            <TouchableOpacity style={styles.button3}>
              <Image
                source={require('./src/assets/images/catt.png')}
                resizeMode="contain"
                style={styles.image8}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
              <Image
                source={require('./src/assets/images/catt.png')}
                resizeMode="contain"
                style={styles.image9}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  rect: {
    width: 537,
    height: 301,
    backgroundColor: 'rgba(190,91,252,1)',
    transform: [
      {
        rotate: '7.00deg',
      },
    ],
    borderRadius: 46,
    borderWidth: 0,
    borderColor: '#000000',
    marginTop: -68,
    marginLeft: -120,
  },
  icon2: {
    color: 'rgba(255,255,255,1)',
    fontSize: 40,
    height: 43,
    width: 23,
  },
  icon: {
    color: 'rgba(255,255,255,1)',
    fontSize: 33,
    height: 34,
    width: 33,
    marginLeft: 271,
    marginTop: 5,
  },
  icon2Row: {
    height: 43,
    flexDirection: 'row',
    marginTop: 77,
    marginLeft: 143,
    marginRight: 37,
    transform: [
      {
        rotate: '-7.00deg',
      },
    ],
  },
  image: {
    width: 76,
    height: 79,
    borderRadius: 74,
    borderWidth: 0,
    borderColor: '#000000',
  },
  marry: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,254,254,1)',
    fontSize: 25,
    marginLeft: 2,
  },
  icon3: {
    color: 'rgba(255,255,255,1)',
    fontSize: 18,
    height: 20,
    width: 18,
  },
  bakuAzerbaijan: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    marginLeft: 4,
    marginTop: 2,
  },
  icon3Row: {
    height: 20,
    flexDirection: 'row',
    marginTop: 6,
  },
  marryColumn: {
    width: 125,
    marginLeft: 19,
    marginTop: 10,
    marginBottom: 13,
  },
  cupertinoButtonLight: {
    height: 30,
    width: 92,
    borderRadius: 18,
    marginLeft: 29,
    marginTop: 10,
  },
  imageRow: {
    height: 79,
    flexDirection: 'row',
    marginTop: 8,
    marginLeft: 132,
    marginRight: 34,
    transform: [
      {
        rotate: '-7.00deg',
      },
    ],
  },
  loremIpsum: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 20,
  },
  loremIpsum1: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 20,
    marginLeft: 59,
  },
  loremIpsum2: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 20,
    marginLeft: 76,
  },
  loremIpsumRow: {
    height: 24,
    flexDirection: 'row',
    marginTop: 8,
    marginLeft: 232,
    marginRight: 62,
    transform: [
      {
        rotate: '-7.00deg',
      },
    ],
  },
  follow: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 13,
    marginLeft: 4,
  },
  followers: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 13,
    marginLeft: 38,
  },
  photos: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 13,
    marginLeft: 49,
  },
  followRow: {
    height: 15,
    flexDirection: 'row',
    marginTop: 6,
    marginLeft: 230,
    marginRight: 53,
    transform: [
      {
        rotate: '-7.00deg',
      },
    ],
  },
  photos2: {
    fontFamily: 'roboto-700',
    color: 'rgba(66,65,65,1)',
    fontSize: 30,
    marginTop: 29,
    // marginLeft: 21,
  },
  image2: {
    width: 81,
    height: 69,
  },
  image3: {
    width: 81,
    height: 69,
    marginLeft: 5,
  },
  image4: {
    width: 81,
    height: 69,
    marginLeft: 5,
  },
  image5: {
    width: 81,
    height: 69,
    marginLeft: 5,
  },
  image55: {
    width: 81,
    height: 69,
    marginLeft: 5,
  },
  image2Row: {
    height: 69,
    flexDirection: 'row',
    marginTop: 11,
    // marginLeft: 20,
    // marginRight: 18,
  },
  posts: {
    fontFamily: 'roboto-700',
    color: 'rgba(66,65,65,1)',
    fontSize: 30,
    marginTop: 32,
    // marginLeft: 21,
  },
  button: {
    width: 161,
    height: 143,
    backgroundColor: 'rgba(75,92,180,1)',
    borderRadius: 28,
  },
  image6: {
    width: 119,
    height: 106,
    marginTop: 19,
    marginLeft: 21,
  },
  button1: {
    width: 161,
    height: 143,
    backgroundColor: 'rgba(131,16,143,1)',
    borderRadius: 28,
    marginLeft: 15,
  },
  image7: {
    width: 119,
    height: 106,
    marginTop: 19,
    marginLeft: 23,
  },
  buttonRow: {
    height: 143,
    flexDirection: 'row',
    marginTop: 16,
    // marginLeft: 20,
    // marginRight: 18,
  },
  button3: {
    width: 161,
    height: 143,
    backgroundColor: 'rgba(75,92,180,1)',
    borderRadius: 28,
  },
  image8: {
    width: 119,
    height: 106,
    marginTop: 15,
    marginLeft: 21,
  },
  button2: {
    width: 161,
    height: 143,
    backgroundColor: 'rgba(131,16,143,1)',
    borderRadius: 28,
    marginLeft: 15,
  },
  image9: {
    width: 119,
    height: 106,
    marginTop: 15,
    marginLeft: 21,
  },
  button3Row: {
    height: 143,
    flexDirection: 'row',
    marginTop: 8,
    // marginLeft: 20,
    // marginRight: 18,
  },
});

export default App;
