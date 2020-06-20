import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Colors from '../../constants/Colors'
const LocationWidget = (rops) => {
    return (
        <View style={styles.widgetContainer}>
            <Text style={styles.text}>{rops.children}</Text>
        </View>
    )
}

export default LocationWidget

const styles = StyleSheet.create({
    widgetContainer:{
        backgroundColor:'white',
        padding:5,
        borderRadius:10,
    },
    text:{
        fontFamily:'open-sans-bold',
        
        color:Colors.grey
    }
})
