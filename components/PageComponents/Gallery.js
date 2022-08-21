import {Image, StyleSheet, Text, View ,FlatList,} from 'react-native'
import React, { useState } from 'react'
import Carousel from 'react-native-snap-carousel/src/carousel/Carousel';


const Gallery = (props) => {
  
  const {g1,g2,g3,g4} = props;
  
  const IMAGES = {
    image1: g1,
    image2: g2,
    image3: g3,
    image4: g4,
    
  };
  const [images,setImages] = useState([
    { id: '1', image: IMAGES.image1 },
    { id: '2', image: IMAGES.image2 },
    { id: '3', image: IMAGES.image3 },
    { id: '4', image: IMAGES.image4 },
  ]);

  return (
    <View style = {styles.GalleryContainer}>
      <Text style = {styles.GalleryText}>Gallery</Text>
      <Carousel
        layout='default'
        data={images}
        sliderWidth= {350}
        itemWidth= {350}
        renderItem={({ item, index }) => (
          <Image
            key={index}
            style={styles.Image}
            resizeMode='contain'
            source={item.image}
          />
        )}
      />
      {/* <Image source={require('../../assets/GalleryImage.png')} style = {styles.Image} ></Image> */}
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
        width : 350,
        height : 148,
        marginTop : 3,
        borderRadius : 5,
        // marginHorizontal : 20
    }, 
    
    LogoContainer : {
        marginTop : 10,
        display : 'flex',
        flexDirection : 'row',
        width : 220,
        height : 30,
        alignItems : 'center',
        justifyContent : 'space-evenly',
        marginBottom : 20
    },

    logo : {
        width : 27,
        height : 28,
    }
})