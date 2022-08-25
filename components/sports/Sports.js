import {TouchableOpacity ,Image,StyleSheet,View, Text } from 'react-native'
import React from 'react'
import NameTags from '../NameTags/NameTags'
import Card from '../Cards/Card'

const Sports = ({navigation}) => {
  return (
    <View style = {styles.container}>
      <Image style = {styles.back} source = {require('../../assets/back.png')} onClick ={()=>navigation.goBack()}></Image>
      <Text style = {styles.heading}>Sports Council</Text>
      <Image source={require('../../assets/despo logo.png')} style = {styles.logo} ></Image>
      <View style = {styles.textContainer}>
        <Text style = {styles.text}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour).
        </Text>
      </View>
        <NameTags name = "Pratik Aswani" position = "General Secretary"/>
        <NameTags name = "Tanya Agarwal" position = "Associate General Secretary"/>
        <TouchableOpacity style = {styles.Event} onPress = {() => navigation.navigate('Despo')}>
            <Text style = {styles.eventText}> Despotivos</Text>
        </TouchableOpacity>
        <View style = {styles.cardBox}>
          <TouchableOpacity onPress={() => {navigation.navigate('')}}>
            <Card name = 'Badminton' tag = '' image = {require('../../assets/sports/badminton.png')} backgroundColor = "#FFCBA6" color = "#FF6A00"/>
            </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate('')}}>
            <Card name = 'Chess' tag = '' image = {require('../../assets/sports/chess.png')} backgroundColor = "#C3B0FF" color = "#551FFF"/>
            </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate('')}}>
            <Card name = 'Volleyball' tag = '' image = {require('../../assets/sports/volleyball.png')} backgroundColor = "#A6E6FF" color = "#00B7FE"/>
            </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate('')}}>
            <Card name = 'Cricket' tag = '' image = {require('../../assets/sports/cricket.png')} backgroundColor = "#FEB2C3" color = "#FD2254"/>
            </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate('')}}>
            <Card name = 'Basketball' tag = '' image = {require('../../assets/sports/basketball.png')} backgroundColor = "#FFCBA6" color = "#FF6A00"/>
            </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate('')}}>
            <Card name = 'Football' tag = '' image = {require('../../assets/sports/football.png')} backgroundColor = "#C3B0FF" color = "#551FFF"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate('')}}>
            <Card name = 'Kabbadi' tag = '' image = {require('../../assets/sports/kabbadi.png')} backgroundColor = "#FFCBA6" color = "#FF6A00"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate('')}}>
            <Card name = 'Karate' tag = '' image = {require('../../assets/sports/karate.png')} backgroundColor = "#C3B0FF" color = "#551FFF"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate('')}}>
            <Card name = 'Squash' tag = '' image = {require('../../assets/sports/squash.png')} backgroundColor = "#A6E6FF" color = "#00B7FE"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate('')}}>
            <Card name = 'Tennis' tag = '' image = {require('../../assets/sports/tennis.png')} backgroundColor = "#FEB2C3" color = "#FD2254"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate('')}}>
            <Card name = 'Table Tennis' tag = '' image = {require('../../assets/sports/table-tennis.png')} backgroundColor = "#FFCBA6" color = "#FF6A00"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate('')}}>
            <Card name = 'Boxing' tag = '' image = {require('../../assets/sports/boxing.png')} backgroundColor = "#C3B0FF" color = "#551FFF"/>
          </TouchableOpacity>     
        </View>
    </View>
  )
}

export default Sports


const styles = StyleSheet.create({

    container: { 
        position : 'absolute',
        width: 360,
        // height: 1700,
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
        // backgroundColor: '#322E52',
        borderRadius : '100%',
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
        
      },

      back : {
        position : 'absolute',
        top : 20,
        left : 20,
        width : 25,
        height : 25,
        alignItems : 'center',
        resizeMode : 'contain'
      }

})