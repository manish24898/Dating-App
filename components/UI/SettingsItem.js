import React from 'react'
import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native'
import Colors from '../../constants/Colors';
const SettingsItem = (props) => {
    return (
        <TouchableNativeFeedback onPress={props.onPress}>
            <View style={styles.container}>
            <View style={styles.innerContainer}><Text style={styles.text}>{props.title}</Text>
            <Text style={styles.nextArrow}>></Text></View>
        </View>
        </TouchableNativeFeedback>
    )
}

export default SettingsItem

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:70,
        padding:20,
        borderBottomWidth:1,
        
        borderBottomColor:Colors.lightGrey
    },
    innerContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        flex:1,
    },
    text:{
        fontFamily:'OpenSans-Regular',
        color:Colors.darkGrey,
        fontSize:18,
    },
    nextArrow:{
        fontFamily:'OpenSans-Regular',
        color:Colors.darkGrey,
        fontSize:18,
    }
})
