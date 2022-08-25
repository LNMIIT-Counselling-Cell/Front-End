import { Image,StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CordiCard = (props) => {
    const {bg,name,image,color} = props;
  return (
    <View style = {[styles.card,{backgroundColor : bg}]}>
      <Image source = {image} style = {styles.image}></Image>
      <Text style = {[styles.name,{color : color}]}>{name}</Text>
      <View style = {styles.attachmentBox}>
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

export default CordiCard

const styles = StyleSheet.create({
    card : {
        width : 93.11,
        height : 116,
        borderRadius : 8,
        shadowOffset: {width: -2, height: 4},  
        shadowColor: '#171717',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,  
        justifyContent : 'center',
        alignItems : 'center'
    },

    image : {
        width : 64,
        height : 64,
        marginBottom : 4,
    },

    name : {
        color : '#FF6A00',
        fontSize : 9,
        lineHeight : 11,
        fontWeight : 500,
        textAlign : 'center'
    },

    attachmentBox : {
        width : 28,
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        marginTop : 6
    },

    imageContainer : {
        width : 11,
        height : 11,
        backgroundColor : "#3E3A66",
        borderRadius : '100%',
        justifyContent : 'center',
        alignItems : 'center',
        
    },

    alogo : {
        width : 7,
        height : 7,

    }
})