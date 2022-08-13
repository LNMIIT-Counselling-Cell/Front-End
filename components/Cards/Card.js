import { Image,StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = (props) => {

    const {name,tag,image,backgroundColor,color} = props;
  return (
    <View style = {[styles.card, {backgroundColor : backgroundColor}]}>
      <View style = {styles.LogoCOntainer}>
        <Image source={image} style = {[styles.logo]}></Image>
      </View>
      <Text style = {[styles.name, {color : color}]}> {name} {'\n'} {tag}</Text>
      
    </View>
  )
}

export default Card

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
        width : 100,
        height : 100,
        marginBottom : 11,
        justifyContent : 'center',
        alignItems : 'center'
    },

    logo : {
        width : 64,
        height : 64,
    },

    name : {
        color : '#FF6A00',
        fontSize : 16,
        lineHeight : 14,
        fontWeight : 500,
        textAlign : 'center'
    }
})