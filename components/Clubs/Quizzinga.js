import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import TopContent from '../PageComponents/TopContent'
import Gallery from '../PageComponents/Gallery'
import Coordinators from '../PageComponents/Coordinators'
import Footer from '../Footer'

const content = "Quizzinga is a sheltering tree for individuals harbouring weird facts or having a knack of a specific topic. It is the holy shrine for enthusiasts of anime, sports, biz, cinema, history etc. and serves as a commonplace for geeks to share their interests through quizzing. Being the official quizzing body of LNMIIT, Quizzinga is inculcated with the responsibility of riveting students’ interest in quizzing. It organises events such as First Blood: The Freshers’ Quiz, Mega Quiz, Topic Specific Insta Quizzes and club quizzes for its members. Furthermore, Quizzinga takes the responsibility of holding IPL and Football Auction: adrenaline packed events for strategists to build their own cricket/football team. Dubbed as the club of “national calibre”, Quizzinga has amassed a massive reach by being National Champions in 2019 and National Runner-Ups in 2022 at Tata Crucibles: The Campus Business Quiz. It has also been the winner of inter-college quiz events of MNIT, DAIICT, SRCC, IITD and finished FIRST in SNU InQube 2021."
const Quizzinga = ({navigation}) => {

  return (
    <View style = {styles.container}>
        <Image style = {styles.back} source = {require('../../assets/back.png')} onClick ={()=>navigation.goBack()}></Image>
      <TopContent  name = "Quizzinga"  image = {require('../../assets/Logos/quizzinga.png')} text = {content}/>
      <View style = {styles.CoContainer}>
        <Text style = {styles.positionHeading}>Coordinators</Text>
        <Coordinators name = "Aditya Singh" PhoneNO = "+91 8210933558"/>
        <Coordinators name = "Md. Raiyan Athar" PhoneNO = "+91 8210149662"/>
      </View>
      <Gallery
        g1 = {require('../../assets/Tech Clubs/Quizzinga/1.jpg')}
        g2 = {require('../../assets/Tech Clubs/Quizzinga/2.jpg')}
        g3 = {require('../../assets/Tech Clubs/Quizzinga/3.jpg')}
        g4 = {require('../../assets/Tech Clubs/Quizzinga/4.jpg')}
      />
      {/* <Footer name = {navigation.navigate('Gym')}/> */}
    </View>
  )
}

export default Quizzinga

const styles = StyleSheet.create({
    container: { 
        position : 'absolute',
        width: 360,
        backgroundColor: '#3E3A66',
        alignItems : 'center',
        alignSelf : 'stretch'
      },
    
    CoContainer : {
        width : 292,
        padding : 13,
        backgroundColor : '#5D5986',
        marginTop : 11,
        borderRadius : 8
    },

    positionHeading : {
        color : '#FFFFFF',
        fontSize : 15,
        lineHeight : 18,
        fontWeight : 700,
        marginBottom : 13
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

