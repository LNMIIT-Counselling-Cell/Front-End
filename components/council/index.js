import {Dimensions ,Image,StyleSheet,View, Text } from 'react-native'
import React from 'react'
import NameTags from '../NameTags/NameTags'
import Card from '../Cards/Card'

const Council = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.heading}>Student's Gymkhana</Text>
      <Image source={require('../../assets/gymkhana emblem 1.png')} style = {styles.logo} ></Image>
      <View style = {styles.textContainer}>
        <Text style = {styles.text}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour).
        </Text>
      </View>
        <NameTags name = "Poojan Gadhiya" position = "President"/>
        <NameTags name = "Om Abhash Jha" position = "Vice-President"/>
        <NameTags name = "Tanay Khandelwal" position = "Finance Convener"/>
        <View style = {styles.Event}>
            <Text style = {styles.eventText}>Presidential Council</Text>
        </View>
        <View style = {styles.cardBox}>
            <Card name = 'Cultural' tag = 'Council' image = {require('../../assets/cultural council.png')} backgroundColor = "#FFCBA6" color = "#FF6A00"/>
            <Card name = 'Science & Technology' tag = 'Council' image = {require('../../assets/plinth logo.png')} backgroundColor = "#C3B0FF" color = "#551FFF"/>
            <Card name = 'Sports' tag = 'Council' image = {require('../../assets/despo logo.png')} backgroundColor = "#A6E6FF" color = "#00B7FE"/>
            
            
        </View>
    </View>
  )
}

export default Council


const styles = StyleSheet.create({

    container: { 
        position : 'absolute',
        width: 360,
        // height: 850,
        backgroundColor: '#3E3A66',
        alignItems : 'center',
        alignSelf : 'stretch'
      },

      heading : {
        marginTop : 21,
        fontSize : 21,
        lineHeight : 26,
        fontWeight : 400,
        color : "#FFFFFF"
      },

      logo : {
        marginTop : 13,
        width : 64,
        height : 62.88,
        backgroundColor: '#FFFF',
        borderRadius : '100%'
      },

      textContainer : {
        marginTop : 7.32,
        width : 291
      },

      text : {
        color : "#FFFFFF",
        fontSize : 10,
        lineHeight : 12,
        fontWeight : 400,
        textAlign : 'justify'
      },

      Event : {
        width : 292,
        height : 38,
        backgroundColor : "#47F4BC",
        marginTop : 20,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 8
      },

      eventText : {
        color : '#3A8A38',
        fontSize : 16,
        lineHeight : 14,
        fontWeight : 500
      },

      cardBox : {
        width : 330,
        display : 'flex',
        flexDirection : "row",
        justifyContent : 'space-evenly',
        flexWrap : 'wrap',
        flexShrink : 1,
        flexBasis : 'auto',
        flexGrow : 0,
        marginBottom : 20
        
      }

})