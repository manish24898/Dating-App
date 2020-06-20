import React from 'react';
import {StyleSheet, View,Dimensions} from 'react-native';
import Colors from '../../constants/Colors';
import LinearGradient from 'react-native-linear-gradient';

const Gradient = props => {
    return (<LinearGradient style={styles.gradient} 
    colors={[Colors.gradient1, Colors.gradient2]} >{props.children}</LinearGradient>)
}

const styles = StyleSheet.create({
    gradient:{
        flex:1,
    }
})

export default Gradient;