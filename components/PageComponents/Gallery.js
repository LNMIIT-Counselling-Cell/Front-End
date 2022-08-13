import {Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Gallery = () => {
  return (
    <View style = {styles.GalleryContainer}>
      <Text style = {styles.GalleryText}>Gallery</Text>
      <Image source={require('../../assets/GalleryImage.png')} style = {styles.Image} ></Image>
      <Text style = {[styles.GalleryText, { marginTop : 53}]}>Connect with us</Text>
      <View style = {styles.LogoContainer}>
        <Image source={require('../../assets/gmail.png')} style = {styles.logo} ></Image> 
        <Image source={require('../../assets/googleDrive.png')} style = {styles.logo} ></Image> 
        <Image source={require('../../assets/youtube.png')} style = {styles.logo} ></Image> 
        <Image source={require('../../assets/instagram.png')} style = {styles.logo} ></Image> 
      </View>
    </View>
  )
}

export default Gallery

const styles = StyleSheet.create({

    GalleryContainer : {
        marginTop : 31,
        alignItems : 'center'
    },

    GalleryText : {
        fontSize : 20,
        lineHeight : 24.2,
        fontWeight : 700 ,
        color : '#FFFFFF'     
    },

    Image : {
        width : 290,
        height : 148,
        marginTop : 3
    }, 
    
    LogoContainer : {
        marginTop : 10,
        display : 'flex',
        flexDirection : 'row',
        width : 220,
        height : 30,
        alignItems : 'center',
        justifyContent : 'space-evenly'
    },

    logo : {
        width : 27,
        height : 28,
    }
})