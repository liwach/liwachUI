import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import AwesomeAlert from 'react-native-awesome-alerts';
import { colors } from '../../utils/colors';

export const AlertModal = ({show,setShowAlert,message}) => {

 

  const showAlert = () => {
    setShowAlert(true)

  };

  const hideAlert = () => {
    setShowAlert(false)
  };

  return (
  
      <View style={styles.container}>

      

        <AwesomeAlert
          show={show}
          showProgress={false}
          title={message.title==''?"Alert":message.title}
          message={message.msg==''?"Alert":message.msg}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          
          confirmText="Okay"
          confirmButtonColor={message.color==""?colors.flord_secondary:message.color}
          onCancelPressed={() => {
            hideAlert();
          }}
          onConfirmPressed={() => {
           hideAlert();
          }}
        />
      </View>
    

  )
   
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    backgroundColor: "#AEDEF4",
  },
  text: {
    color: '#fff',
    fontSize: 15
  }
});