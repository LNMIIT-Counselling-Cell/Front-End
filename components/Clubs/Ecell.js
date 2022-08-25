import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import TopContent from '../PageComponents/TopContent'
import Gallery from '../PageComponents/Gallery'
import Coordinators from '../PageComponents/Coordinators'
import Footer from '../Footer'

const content = "Future builders that are interested in learning about entrepreneurship, cryptocurrency, the stock market, web3, and several other fields come to this location for all of their learnings. They seek guidance in 5 major domains being event planning, marketing, management, sponsorship, content creation and designing which add up to create a well verse soft skill development and a variety of other subjects, all of which contribute to a child's holistic development and help him grow into a multi-talented adult.The exclusive club at our campus that collaborates with several Tech colleges across India is E-Cell, with its collaboration with Entrepreneurship Development Cell, IIT Roorkee, serving as a prominent example. We organize and participate in various funding events and interact closely with startup founders and make our members understand the crucial stages of start-up ecosystem."
const Ecell = ({navigation}) => {

  return (
    <View style = {styles.container}>
        <Image style = {styles.back} source = {require('../../assets/back.png')} onClick ={()=>navigation.goBack()}></Image>
      <TopContent  name = "E-cell"  image = {require('../../assets/Logos/e-cell.png')} text = {content}/>
      <View style = {styles.CoContainer}>
        <Text style = {styles.positionHeading}>Coordinators</Text>
        <Coordinators name = "Vaishvi Bansal" PhoneNO = "+91 8000768730"/>
        <Coordinators name = "Sarthak Kapoor" PhoneNO = "+91 9571485158"/>
      </View>
      <Gallery
        g1 = {require('../../assets/Tech Clubs/E Cell/1.JPG')}
        g2 = {require('../../assets/Tech Clubs/DebSoc/2.jpg')}
        g3 = {require('../../assets/Tech Clubs/DebSoc/3.jpg')}
        g4 = {require('../../assets/Tech Clubs/DebSoc/4.jpg')}
      />
      {/* <Footer name = {navigation.navigate('Gym')}/> */}
    </View>
  )
}

export default Ecell

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

