import React from 'react';
import {StyleSheet, Text, View, Modal, Button} from 'react-native';
import Colors from '../../constants/Colors';

const HoverComponent = props => {
  return (
    <Modal
      style={styles.modalContainer}
      animationType={'slide'}
      transparent={true}
      visible={props.visible}
      onRequestClose={() => {
        console.log('Modal has been closed.');
      }}>
      <View style={{...styles.modal, ...props.modalStyle}}>
        {props.children}
      </View>
    </Modal>
  );
};

export default HoverComponent;

const styles = StyleSheet.create({
    modalContainer:{
        flex:1,
    },
    modal:{
        alignItems:'center',
        padding:30,
        
        marginHorizontal:55,
        marginTop:'30%',
        marginBottom:'45%',
        flex:1,
        borderRadius:30,
        backgroundColor:'white',
        overflow:'hidden'
    },
   
});
