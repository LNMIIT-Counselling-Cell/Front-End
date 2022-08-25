import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import TopContent from '../PageComponents/TopContent'
import Gallery from '../PageComponents/Gallery'
import Coordinators from '../PageComponents/Coordinators'
import Footer from '../Footer'

const content = "With the aim of the betterment of the college community, the motive of this club is to bring awareness about the ongoing threats in the Cyber Security world and prevention methods against adversaries and how Blockchain Technology can be used for securing it to the next level.The club’s motive is to create a healthy and knowledgeable environment and achieve various goals listed below that would enhance your performance:\n- To cultivate CyberSecurity and Blockchain culture amongst the students.\n- Introducing the concepts of Smart contracts, Blockchain Technology & Web3.\n- Introducing students to Ethical and Competitive Hacking.\nCYBER SECURITY AND BLOCKCHAIN are upcoming fields with varied and exciting opportunities. CIPHER will help you dive in and grab the opportunities. It will also create a platform where you can solve problems and have discussions about the same."
const Cipher = ({navigation}) => {

  return (
    <View style = {styles.container}>
        <Image style = {styles.back} source = {require('../../assets/back.png')} onClick ={()=>navigation.goBack()}></Image>
      <TopContent  name = "Cipher"  image = {require('../../assets/Logos/cipher.png')} text = {content}/>
      <View style = {styles.CoContainer}>
        <Text style = {styles.positionHeading}>Coordinators</Text>
        <Coordinators name = "Ketan Jakhar" PhoneNO = "+91 9461721651"/>
        <Coordinators name = "Vinay Sharma" PhoneNO = "+91 9549178651"/>
        <Coordinators name = "Viren Saroha" PhoneNO = "+91 9306555214"/>
        <Coordinators name = "Meet Patel" PhoneNO = "+91 7041813479"/>

      </View>
      <Gallery
        g1 = {require('../../assets/Tech Clubs/Cybros/1.png')}
        g2 = {require('../../assets/Tech Clubs/Cybros/2.png')}
        g3 = {require('../../assets/Tech Clubs/Cybros/3.png')}
        g4 = {require('../../assets/Tech Clubs/Cybros/4.png')}
      />
      {/* <Footer name = {navigation.navigate('Gym')}/> */}
    </View>
  )
}

export default Cipher

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

