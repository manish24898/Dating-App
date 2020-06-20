import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import SettingsItem from '../../components/UI/SettingsItem';
import PushButton from '../../components/UI/PushButton';
const SettingsScreen = props => {
  return (
    <View style={styles.main}>
      <SettingsItem title="Profile" onPress={() => {}} />
      <SettingsItem title="Edit Profile" />
      <SettingsItem title="Term and Condition" />
      <SettingsItem title="Prvacy Policy" />
      <SettingsItem title="Activate Privileges" />

      <PushButton title="Logout" style={{marginHorizontal:80, marginVertical:50,}} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {flex: 1,backgroundColor:'white',},
});

export default SettingsScreen;
