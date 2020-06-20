import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import CustomBlurView from '../Miscellanous/CustomBlurView'
const TouchableCmp =
  Platform.OS === "android" && Platform.Version >= 21
    ? TouchableNativeFeedback
    : TouchableOpacity;
const DiscoverHeader = (props) => {
    return (
        <View style={styles.main}>
            
            
        </View>
    )
}

export default DiscoverHeader

const styles = StyleSheet.create({
    main:{
        borderColor:'white',
        borderWidth:1,
        //height:'10%',
        padding:20,
        backgroundColor:'blue',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        margin:0,
    }
})
