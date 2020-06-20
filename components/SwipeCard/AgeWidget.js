import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';
const AgeWidget = (props) => {
    return (
        <View style={{...styles.widgetContainer, ...props.style}}>
            {props.gender === 'F' ? <Ionicons name='md-female' color='white' size={props.iconSize ? props.iconSize : 15} /> : <Ionicons name='md-male' color='white' size={15} />}
            <Text style={{...styles.text, ...props.textStyle}}>{props.children}</Text>
        </View>
    )
}

export default AgeWidget

const styles = StyleSheet.create({
    widgetContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        backgroundColor:Colors.background,
        width:50,
        padding:5,
        borderRadius:20,
    },
    text:{
        color:'white',
        fontFamily:'open-sans-bold'
    }
})
