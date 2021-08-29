import React, { Component } from 'react';
import { View, StyleSheet, TextInput, KeyboardAvoidingView, Button } from 'react-native';

export const MessageTextInput = () =>
{
    return (
        <View style={styles.container}>
          <KeyboardAvoidingView style={{position: 'absolute', left: 0, right: 0, bottom: 0}} behavior="position">
            <TextInput
                style={styles.input}
                // onChangeText={text => this.setState({ message: text })}
               // value={this.state.email}
                placeholderTextColor='white'
                underlineColorAndroid='transparent'
              />
            <Button title='SEND' />
          </KeyboardAvoidingView>
        </View>
      );
}
   
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    position: 'relative',
    bottom: 0,
  },
  input: {
    backgroundColor: 'red',
    width: '100%',
    height: 40,
    color: '#ffffff'
  },
});