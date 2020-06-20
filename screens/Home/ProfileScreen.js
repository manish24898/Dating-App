import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import HeaderElement from '../../components/UI/HeaderElement';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-web-swiper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../constants/Colors';
import AgeWidget from '../../components/SwipeCard/AgeWidget';
import MultiSwitchButton from '../../components/Miscellanous/MultiSwitchButton';

const ProfileScreen = props => {
  const item = props.route.params.item;
  return (
    <View style={styles.main}>
      <HeaderElement
        style={{
          position: 'absolute',
          backgroundColor: 'transparent',
          zIndex: 100,
        }}>
        <View style={{}}>
          <TouchableOpacity
            style={{}}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <View style={{padding: 7, borderRadius: 3}}>
              <Ionicons name="md-arrow-back" size={35} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </HeaderElement>

      <View style={{height: '60%', width: '100%'}}>
        <Swiper
          vertical
          from={0}
          loop
          minDistanceForAction={0.1}
          controlsProps={{
            dotActiveStyle: {backgroundColor: 'white'},
            dotsTouchable: true,
            prevPos: 'left',
            nextPos: 'right',
            nextTitle: '',
            //nextTitleStyle: {color: 'red', fontSize: 24, fontWeight: '500'},
            PrevComponent: ({onPress}) => {
              return <View />;
            },
          }}>
          {item.images.map((image, index) => (
            <View
              key={index}
              style={{
                width: '100%',
                flex: 1,
              }}>
              <ImageBackground
                style={{height: '100%', width: '100%'}}
                source={{uri: image}}
              />
            </View>
          ))}
        </Swiper>
      </View>

      <View style={styles.detailContainer}>
        <View style={styles.detailUpperContainer}>
          <Text
            style={{
              fontFamily: 'OpenSans-Bold',
              fontSize: 20,
              marginRight: 15,
            }}>
            {item.name}
          </Text>
          <MaterialCommunityIcons
            name="heart-pulse"
            color={'#ff8c00'}
            size={30}
          />
        </View>
        <View style={styles.detailUpperContainer}>
          <Text
            style={{
              fontFamily: 'OpenSans-Regular',
              fontSize: 15,
              marginRight: 15,
              color: Colors.darkGrey,
            }}>
            {item.location}
          </Text>
          <AgeWidget
            iconSize={10}
            style={styles.ageWidget}
            textStyle={styles.ageWidgetText}
            gender={item.gender}>
            {item.age}
          </AgeWidget>
        </View>
        <MultiSwitchButton />
        <View style={styles.detailLowerSection}>
          <View style={{flex:1}}>
            <Text style={styles.textHead}>Height</Text>
            <Text style={styles.text}>{item.height} cm</Text>
          </View>
          <View style={{flex:1}}>
            <Text style={styles.textHead}>Ethnicity</Text>
            <Text style={styles.text}>{item.nationality}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  detailContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
  },
  detailUpperContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  detailLowerSection:{
      flex:1,
      width:"100%",
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
  ageWidget: {
    width: 40,
    padding: 3,
  },
  ageWidgetText: {
    fontSize: 10,
  },
  textHead:{
    fontFamily:'OpenSans-Regular',
    fontSize:14,
    color:Colors.darkGrey
  },
  text:{
    fontFamily:'OpenSans-Regular',
    fontSize:14,
    color:'black'
  }
});
