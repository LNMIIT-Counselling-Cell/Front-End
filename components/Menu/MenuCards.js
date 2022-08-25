import { Image,StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MenuCards = (props) => {

    const {name,tag,image,backgroundColor,color} = props;
  return (
    <View style = {[styles.card, {backgroundColor : backgroundColor}]}>
      <View style = {styles.LogoCOntainer}>
        <Image source={image} style = {[styles.logo,styles.shadowProp]}></Image>
      </View>
      <Text style = {[styles.name, {color : color}]}>{name}</Text>
      <Text style = {[styles.name,{color : color}]}>{tag}</Text>
      
      
      
    </View>
  )
}

export default MenuCards

const styles = StyleSheet.create({
    
    card : {
        backgroundColor : '#FFCBA6',
        width : 142,
        height : 189,
        marginTop : 18,
        borderRadius : 15,
        alignItems : 'center',
        justifyContent : 'center'
    } ,

    LogoCOntainer : {
        width : 114,
        height : 59,
        marginBottom : 20,
        justifyContent : 'center',
        alignItems : 'center'
    },

    logo : {
        width : 114,
        height : 59,
        resizeMode : 'contain'
    },

    name : {
        color : '#FF6A00',
        fontSize : 16,
        lineHeight : 14,
        fontWeight : 500,
        textAlign : 'justify'
    },
    shadowProp: {  
      shadowOffset: {width: -2, height: 4},  
      shadowColor: '#171717',  
      shadowOpacity: 0.2,  
      shadowRadius: 3,  
    },  
})