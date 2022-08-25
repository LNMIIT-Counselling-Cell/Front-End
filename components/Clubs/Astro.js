import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import TopContent from '../PageComponents/TopContent'
import Gallery from '../PageComponents/Gallery'
import Coordinators from '../PageComponents/Coordinators'
import Footer from '../Footer'

const content = "The Astronomy Club promotes the interest of students towards the awe-inspiring field of Astronomy and space exploration while striving to increase the craze about the various fields enclosed within. It is one of the most active clubs in LNMIIT. With creative and enthusiastic minds in the club, we try to come up with highly entertaining events for everyone, time to time. With our wide-ranging events throughout the year, we try to keep folks entertained. Afterall that's what college life is, a bit of entertainment, going in hand with academics."
const Astro = ({navigation}) => {

  return (
    <View style = {styles.container}>
       <Image style = {styles.back} source = {require('../../assets/back.png')} onClick ={()=>navigation.goBack()}></Image> 
      <TopContent  name = "Astronomy Club"  image = {require('../../assets/Logos/astro.png')} text = {content}/>
      <View style = {styles.CoContainer}>
        <Text style = {styles.positionHeading}>Coordinators</Text>
        <Coordinators name = "Abhishek Suman" PhoneNO = "+91 8114589602"/>
        <Coordinators name = "Mudit Choudhary" PhoneNO = "+91 7840054325"/>
        <Coordinators name = "Radhika Agarwal" PhoneNO = "+91 7451847047"/>
        <Coordinators name = "Shubhankar Bhatt" PhoneNO = "+91 9997078807"/>
      </View>
      <Gallery
        g1 = {require('../../assets/Tech Clubs/Astronomy/4.png')}
        g2 = {require('../../assets/Tech Clubs/Astronomy/3.png')}
        g3 = {require('../../assets/Tech Clubs/Astronomy/5.png')}
        g4 = {require('../../assets/Tech Clubs/Astronomy/1.png')}
      />
      {/* <Footer name = {navigation.navigate('Gym')}/> */}
    </View>
  )
}

export default Astro

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

