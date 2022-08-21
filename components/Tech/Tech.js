import {TouchableOpacity,Image,StyleSheet,View, Text } from 'react-native'
import React from 'react'
import NameTags from '../NameTags/NameTags'
import Card from '../Cards/Card'

const Tech = ({navigation}) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.heading}>Science & Tech Council</Text>
      <Image source={require('../../assets/tech.png')} style = {styles.logo} ></Image>
      <View style = {styles.textContainer}>
        <Text style = {styles.text}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour).
        </Text>
      </View>
        <NameTags name = "Ayush Sharma" position = "General Secretary"/>
        <NameTags name = "Muskan Singla" position = "Associate General Secretary"/>
        <View style = {styles.Event}>
            <Text style = {styles.eventText}>Plinth</Text>
        </View>
        <View style = {styles.cardBox}>
          <TouchableOpacity onPress={() => navigation.navigate('MC')} >
            <Card name = 'Astronomy' tag = 'Club' image = {require('../../assets/Logos/astro.png')} backgroundColor = "#FFCBA6" color = "#FF6A00"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('')} >
            <Card name = 'Cybros' tag = '' image = {require('../../assets/Logos/cybros.png')} backgroundColor = "#C3B0FF" color = "#551FFF"/>
            </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('')} >
            <Card name = 'Debsoc' tag = '' image = {require('../../assets/Logos/debsoc.png')} backgroundColor = "#A6E6FF" color = "#00B7FE"/>
            </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('')} >
            <Card name = 'Phoenix' tag = '' image = {require('../../assets/Logos/e-cell.png')} backgroundColor = "#FEB2C3" color = "#FD2254"/>
            </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('')} >
            <Card name = 'E-Cell' tag = '' image = {require('../../assets/Logos/pheonix.png')} backgroundColor = "#FFCBA6" color = "#FF6A00"/>
            </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('')} >
            <Card name = 'Quizzinga' tag = '' image = {require('../../assets/Logos/quizzinga.png')} backgroundColor = "#C3B0FF" color = "#551FFF"/>
            </TouchableOpacity>     
          <TouchableOpacity onPress={() => navigation.navigate('')} >
            <Card name = 'Cipher' tag = '' image = {require('../../assets/Logos/cipher.png')} backgroundColor = "#A6E6FF" color = "#00B7FE"/>
            </TouchableOpacity>     
        </View>
    </View>
  )
}

export default Tech


const styles = StyleSheet.create({

    container: { 
        position : 'absolute',
        width: 360,
        // height: 1100,
        backgroundColor: '#3E3A66',
        alignItems : 'center',
        alignSelf : 'stretch',
        paddingBottom : 20
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
        width : 60,
        height : 60,
        // backgroundColor: '#FFFF',
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
        flexGrow : 0
        
      }

})