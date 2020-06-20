import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';

import Gradient from '../../components/UI/Gradient';
import HeaderElement from '../../components/UI/HeaderElement';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import * as profileActions from '../../store/actions/profile';
import HoverComponent from '../../components/Miscellanous/HoverComponent';
import Swipe from '../../components/SwipeCard/Swipe';
import Colors from '../../constants/Colors';
import CustomBlurView from '../../components/Miscellanous/CustomBlurView';
import AgeWidget from '../../components/SwipeCard/AgeWidget';
import PushButton from '../../components/UI/PushButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CoinsElement from '../../components/UI/CoinsElement';

const TouchableCmp =
  Platform.OS === 'android' && Platform.Version >= 21
    ? TouchableNativeFeedback
    : TouchableOpacity;

const HomeScreen = props => {
  const [match, setMatch] = useState({isMatch: false, item: null});
  const dispatch = useDispatch();
  const profiles = useSelector(state => state.profile.profiles);

  const checkMatch = profile => {
    //we like this person, check if the persons like property has our id , that means it a match
    if (profile.likes.indexOf('u1') > -1) {
      setMatch({isMatch: true, item: profile});
    }
  };
  return (
    <Gradient>
      <View style={styles.main}>
        <SafeAreaView style={styles.main}>
          <HeaderElement>
            <View style={styles.filterIcon}>
              <TouchableCmp
                onPress={() => {
                  props.navigation.navigate('Filter');
                }}>
                <View style={{padding: 7, borderRadius: 3}}>
                  <FontAwesome name="filter" size={35} color="white" />
                </View>
              </TouchableCmp>
            </View>
            <Text style={styles.logo}>Logo</Text>
            <CoinsElement />
          </HeaderElement>
          <View style={styles.swipeContainer}>
            <Swipe
              data={profiles}
              onSwipeLeft={item => {
                //add the item to dislikes and never show again
              }}
              onSwipeRight={item => {
                //1. add this to liked
                dispatch(profileActions.likeAction(item.id));
                //2. check if the person also lieks us , then its a match.
                checkMatch(item);
              }}
            />
          </View>
          {match.isMatch && <CustomBlurView /> && (
            <HoverComponent visible={match.isMatch}>
              <View style={styles.backgroundStyle} />
              <View style={styles.profileIconContainer}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={{uri: match.isMatch ? match.item.images[0] : null}}
                />
              </View>
              <Text
                style={{
                  color: '#ff8c00',
                  fontSize: 20,
                }}>
                {' '}
                It's a Match{' '}
              </Text>

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <Text style={{fontSize: 25}}>
                  {match.isMatch ? match.item.name : ''}
                </Text>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 16, color: Colors.grey}}>
                    {match.isMatch ? match.item.location + '  ' : ''}
                  </Text>
                  <AgeWidget
                    iconSize={3}
                    style={{height: 20, width: 30, padding: 2}}
                    textStyle={{fontSize: 11}}
                    gender={match.isMatch ? match.item.gender : ''}>
                    {match.isMatch ? match.item.age : ''}
                  </AgeWidget>
                </View>
              </View>

              <PushButton
                title="Send a Message"
                style={{marginTop: 30, margin: 5}}
                padding={15}
                //temporarily set to disabel the modal
                onPress={() => {
                  setMatch({value: false, item: null});
                }}
              />
              <PushButton
                title="Keep Playing"
                style={{margin: 0, backgroundColor: 'white'}}
                padding={15}
                onPress={() => {
                  setMatch({value: false, item: null});
                }}
                textStyle={{color: Colors.grey}}
              />
            </HoverComponent>
          )}
        </SafeAreaView>
      </View>
    </Gradient>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  filterIcon: {
    borderRadius: 30,
    overflow: 'hidden',
  },
  logo: {
    color: 'white',
    fontFamily: 'OpenSans-Regular',
    fontSize: 20,
  },
  swipeContainer: {
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flex: 1,
    alignItems: 'center',
  },

  backgroundStyle: {
    position: 'absolute',
    width: '100%',
    borderTopColor: Colors.background,
    top: -250,
    borderTopWidth: 400,
    borderRightWidth: 300,
    borderRightColor: Colors.background,
    borderRadius: 200,
  },
  profileIconContainer: {
    marginTop: '25%',
    width: '55%',
    height: '27%',
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 2,
    overflow: 'hidden',
  },

  text: {},
});

export default HomeScreen;
