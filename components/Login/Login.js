import { TouchableOpacity,Image,StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text3}>Login to Continue</Text>
      <View style = {[styles.box,styles.shadowProp]}>
        <Image source = {require('../../assets/Logos/c-cell.png')} style = {styles.image}></Image>
        <TouchableOpacity style = {[styles.textBox,styles.shadowProp,{backgroundColor : '#FFCBA6'}]} onPress={()=>{}}>
          <Text style = {[styles.text,{color : '#FF6A00'}]}>Login with LNMIIT Domain</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[styles.textBox,styles.shadowProp,{backgroundColor : '#C3B0FF'}]} onPress={()=>{}}>
          <Text style = {[styles.text,{color : '#551FFF'}]}>Continue as Guest User</Text>
        </TouchableOpacity>
        <Text style = {styles.text1}>For the students seeking Admission </Text>
        
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container : {
        position : 'absolute',
        width: 360,
        height : '100%',
        backgroundColor: '#3E3A66',
        alignItems : 'center',
        justifyContent : 'center'
    },

    box : {
        backgroundColor : '#5D5986',
        height : 414,
        width : 330,
        alignItems : 'center',
        justifyContent : 'center',
        paddingHorizontal : 20,
        paddingVertical : 57,
        borderRadius : 8
    },

    image : {
        width : 140,
        height : 140,
        marginBottom : 22,
        resizeMode : 'contain'
    },

    textBox : {
      width : 289,
      justifyContent : 'center',
      alignItems : 'center',
      padding : 14,
      marginTop : 20,
      borderRadius : 10
    },

    text : {
      fontSize : 17,
      lineHeight : 16,
      fontWeight : 500,
      textAlign : 'center'
    },

    text1 : {
      fontSize : 10,
      lineHeight : 12,
      color : '#FFFFFF',
      fontWeight : 400,
      marginTop : 7
    },

    text3 : {
      fontSize : 21,
      lineHeight : 31,
      color : '#FFFFFF',
      fontWeight : 400,
      marginBottom : 41
    },

    shadowProp: {  
      shadowOffset: {width: -2, height: 4},  
      shadowColor: '#171717',  
      shadowOpacity: 0.2,  
      shadowRadius: 3,  
    },

})