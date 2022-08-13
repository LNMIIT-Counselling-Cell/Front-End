import { Image,StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NameTags = (props) => {

    const {name,position} = props;
  return (
    <View style = {styles.NameBox}>
      <View style = {styles.name}>
        <Text style = {styles.nameText}>{name}</Text>
        <Text style = {styles.positionText}>{position}</Text>
      </View>
      <View style = {styles.attachment}>
        <View style = {styles.imageContainer}>
            <Image source={require('../../assets/attachment logo.png')} style = {styles.alogo}></Image>
        </View>  
        <View style = {styles.imageContainer}>
            <Image source={require('../../assets/attachment logo.png')} style = {styles.alogo}></Image>
        </View>  
        
      </View>
    </View>
  )
}

export default NameTags

const styles = StyleSheet.create({
    NameBox : {
        marginTop : 12,
        width : 292,
        borderRadius : 8,
        backgroundColor : '#5D5986',
        height : 38,
        alignItems : 'center',
        paddingLeft : 13,
        paddingRight : 5,
        paddingVertical : 7,
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between'
    },

    nameText : {
        color : '#FFFFFF',
        fontSize : 12,
        lineHeight : 15,
        fontWeight : 700
    },

    positionText : {
        color : '#FFFFFF',
        fontSize : 9,
        lineHeight : 11,
        fontWeight : 400
    },

    attachment : {
        display : 'flex',
        flexDirection : 'row'
    },

    imageContainer : {
        width : 22,
        height : 22,
        backgroundColor : "#3E3A66",
        borderRadius : '100%',
        justifyContent : 'center',
        alignItems : 'center',
        marginRight : 8
    },

    alogo : {
        width : 13,
        height : 13
    }
})