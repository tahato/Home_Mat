import { Keyboard, KeyboardAvoidingView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Form from '../../components/Form'
export default function Login() {
  return (
   <SafeAreaView style={{flex:1}} edges={['top', 'bottom']} >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={[{ flex: 1 ,width:'100%'},styles.container]}
                    
                >
        <Form></Form>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})