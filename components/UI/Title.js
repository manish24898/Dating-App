import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Title = props => {
return (<View style={{...styles.titleContainer, ...props.style}}><Text style={{...styles.text, ...props.textStyle}}>{props.children}</Text></View>)
};

const styles = StyleSheet.create({
    titleContainer:{
        padding:20,
        marginTop:20,
        width:'100%',
       
    },
    text:{
        color:'white',
        fontFamily:'open-sans',
        fontSize:30,
        
    }
});

export default Title;