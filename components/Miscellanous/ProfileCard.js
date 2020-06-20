import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  Platform,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../constants/Colors';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';

const TouchableCmp =
  Platform.OS === 'android' && Platform.Version >= 21
    ? TouchableNativeFeedback
    : TouchableOpacity;

const ProfileCard = props => {
  const [liked, setLiked] = useState(false);
  let doesPersonLikesYou = false;
  if (props.item.likes.indexOf('u1') > -1) {
    doesPersonLikesYou = true;
  }
  return (
    <View>
      <View
        style={{
          ...styles.likeButtonContainer,
          marginTop: liked ? 310 : 260,
          elevation: liked ? 0 : 5,
          zIndex: 100,
        }}>
        <TouchableCmp
          style={{flex: 1, padding: 9}}
          onPress={() => {
            setLiked(like => (like ? false : true));
          }}>
          <AntDesign name="like1" color={Colors.background} size={40} />
        </TouchableCmp>
      </View>

      <TouchableCmp onPress={props.onPress}>
        <View style={styles.main}>
          <View style={{width: '100%', height: '70%'}}>
            <ImageBackground
              source={{uri: props.item.images[0]}}
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              {liked && doesPersonLikesYou && (
                <View
                  style={{
                    width: '100%',
                    height: '15%',
                    backgroundColor: Colors.background,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'OpenSans-Bold',
                      fontSize: 18,
                      color: 'white',
                    }}>
                    {props.item.gender === 'M' ? 'He' : 'She'} likes you!
                  </Text>
                </View>
              )}
            </ImageBackground>
          </View>
          <View style={styles.detailContainer}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: 'OpenSans-Bold',
                  fontSize: 18,
                  marginRight: 10,
                }}>
                {props.item.age}, {props.item.location}
              </Text>
              <MaterialCommunityIcons
                name="heart-pulse"
                color={'#ff8c00'}
                size={30}
              />
            </View>
            <View
              style={{
                flexDirection: !liked ? 'row' : 'column',
                justifyContent: !liked ? 'space-between' : 'center',
                alignItems: !liked ? 'center' : 'flex-start',
              }}>
              <View style={{}}>
                {!liked && (
                  <Text style={styles.detailsHeading}>Working as</Text>
                )}
                <Text style={styles.detailsText}>
                  Product Designer at Stackgeeks
                </Text>
              </View>
              <View>
                {!liked && <Text style={styles.detailsHeading}>Education</Text>}
                <Text style={styles.detailsText}>CSE - Panjab University</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableCmp>
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    height: Dimensions.get('window').height * 0.6,
    backgroundColor: 'white',
  },
  detailContainer: {
    flex: 1,
    padding: 15,
  },
  likeButtonContainer: {
    position: 'absolute',
    elevation: 26,
    backgroundColor: 'white',
    borderRadius: 30,
    overflow: 'hidden',
    maxHeight: 100,
    marginBottom: 0,
    marginLeft: Dimensions.get('window').width * 0.75,
    marginTop: 260,
  },
  detailsText: {
    fontFamily: 'OpenSans-Light',
    color: 'black',
    fontSize: 13,
    width: '70%',
  },
  detailsHeading: {
    fontFamily: 'OpenSans-Light',
    color: Colors.darkGrey,
    fontSize: 13,
  },
});
