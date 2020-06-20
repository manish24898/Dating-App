import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  Modal,
  Text,
  StyleSheet,
  Button,
  FlatList,
} from 'react-native';
import HoverComponent from '../../components/Miscellanous/HoverComponent';
import CustomBlurView from '../../components/Miscellanous/CustomBlurView';
import Colors from '../../constants/Colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import PushButton from '../../components/UI/PushButton';
import HeaderElement from '../../components/UI/HeaderElement';
import CoinsElement from '../../components/UI/CoinsElement';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import ProfileCard from '../../components/Miscellanous/ProfileCard';

const DiscoverScreen = props => {
  const profiles = useSelector(state => state.profile.profiles);

  const [cameraPermission, setCameraPermission] = useState(false);
  const [locationPermission, setLocationPermission] = useState(false);
  const [pushNotification, setPushNotification] = useState(false);
  const locationComponent = (
    <HoverComponent modalStyle={styles.modalStyle} visible={locationPermission}>
      <View style={styles.permissionContainer}>
        <View style={styles.permissionIcon}>
          <FontAwesome5
            name="map-marked-alt"
            color={Colors.background}
            size={130}
          />
        </View>
        <Text style={styles.permissionHeader}>Share your Location</Text>
        <View style={{marginTop: 10}}>
          <Text style={styles.permissionText}>
            We want to access your location only to provide a better experience
            by helping you find new friend nearby.
          </Text>
        </View>
        <PushButton
          title="Share Location"
          style={{marginTop: 20, margin: 5}}
          padding={10}
          //temporarily set to disabel the modal
          onPress={() => {
            setLocationPermission(false);
          }}
        />
        <PushButton
          title="Skip"
          style={{margin: 0, backgroundColor: 'white'}}
          padding={10}
          onPress={() => {
            setLocationPermission(false);
          }}
          textStyle={{color: Colors.grey}}
        />
      </View>
    </HoverComponent>
  );
  const cameraComponent = (
    <HoverComponent
      modalStyle={{
        ...styles.modalStyle,
        marginTop: '20%',
        marginBottom: '45%',
      }}
      visible={cameraPermission}>
      <View style={styles.permissionContainer}>
        <View style={styles.permissionIcon}>
          <FontAwesome5 name="camera" color={Colors.background} size={130} />
        </View>
        <Text style={styles.permissionHeader}>Camera Access</Text>
        <Text style={styles.permissionText}>
          Please allow access to your camera to take photos
        </Text>
        <PushButton
          title="Allow Access"
          style={{marginTop: 30, margin: 5}}
          padding={10}
          //temporarily set to disabel the modal
          onPress={() => {
            setCameraPermission(false);
          }}
        />
        <PushButton
          title="Skip"
          style={{margin: 5, backgroundColor: 'white'}}
          padding={10}
          onPress={() => {
            setCameraPermission(false);
          }}
          textStyle={{color: Colors.grey}}
        />
      </View>
    </HoverComponent>
  );
  const pushNotificationComponent = (
    <HoverComponent
      modalStyle={{
        ...styles.modalStyle,
        marginTop: '20%',
        marginBottom: '45%',
      }}
      visible={pushNotification}>
      <View style={styles.permissionContainer}>
        <View style={styles.permissionIcon}>
          <MaterialCommunityIcons
            name="bell-ring"
            color={Colors.background}
            size={130}
          />
        </View>
        <Text style={styles.permissionHeader}>Push Notifications</Text>
        <Text style={styles.permissionText}>
          Enable push notification to let send you personal news and updates.
        </Text>
        <PushButton
          title="Enable"
          style={{marginTop: 30, margin: 5}}
          padding={10}
          //temporarily set to disabel the modal
          onPress={() => {
            setPushNotification(false);
          }}
        />
        <PushButton
          title="Skip"
          style={{margin: 5, backgroundColor: 'white'}}
          padding={10}
          onPress={() => {
            setPushNotification(false);
          }}
          textStyle={{color: Colors.grey}}
        />
      </View>
    </HoverComponent>
  );

  return (
    <View style={styles.main}>
      <HeaderElement style={{backgroundColor: Colors.background}}>
        <View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate.goBack();
            }}>
            <View style={{padding: 7, borderRadius: 3}}>
              <Ionicons name="md-arrow-back" size={35} color="white" />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.header}>Discover</Text>
        <CoinsElement />
      </HeaderElement>

      <FlatList
        data={profiles}
      renderItem={itemData => {console.log(itemData.item.name);
      return <ProfileCard item={itemData.item} onPress={() => {
        props.navigation.navigate('Profile', {item:itemData.item})
      }} />}}
      />

      

      {(cameraPermission || locationPermission || pushNotification) && (
        <CustomBlurView />
      )}
      {pushNotification && pushNotificationComponent}
      {cameraPermission && cameraComponent}
      {locationPermission && locationComponent}
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width:'100%',
    borderColor:"red",
    borderWidth:1,
    justifyContent:'center',
    //backgroundColor: Colors.background,
  },
  header: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 20,
    color: 'white',
  },
  modalStyle: {
    marginTop: '20%',
    marginBottom: '20%',
    padding: 20,
    marginHorizontal: '12%',
  },
  permissionContainer: {
    flex: 1,
    width: '100%',
    //justifyContent:'center',
    alignItems: 'center',
  },
  permissionIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
  },
  permissionHeader: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    textAlign: 'center',
  },
  permissionText: {
    fontSize: 15,
    color: 'black',
    fontFamily: 'OpenSans-Light',
    textAlign: 'center',
  },
});

export default DiscoverScreen;
