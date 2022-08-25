import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import TopContent from '../PageComponents/TopContent'
import Gallery from '../PageComponents/Gallery'
import Coordinators from '../PageComponents/Coordinators'
import Footer from '../Footer'

const content = "Phoenix is the club where practicality comes most into reality. Manifesting 2-D designs into 3-D working machinery of various types. The collective knowledge of the latest technology is vast, with in-depth information about various aspects. The Hardware division conducts spectacular events like RC planes, Drone Building, Torque, LFR, and ROBOWAR. It gives you a chance to play with circuits and motors with a child's curiosity. The Software division ventures into domains like AI, ML, Web, Android Development, and more. One should never miss the workshops and events conducted by this division. The Quarks division is the most diverse and inclusive having Content Writing, Graphic Designing, Video Editing and management under its name. Get ready to manage colossal events and make visually depicting posters and videos. Above all, Phoenix plays a significant role in organizing the events in Plinth."
const Phoenix = ({navigation}) => {

  return (
    <View style = {styles.container}>
       <Image style = {styles.back} source = {require('../../assets/back.png')} onClick ={()=>navigation.goBack()}></Image> 
      <TopContent  name = "Phoenix"  image = {require('../../assets/Logos/pheonix.png')} text = {content}/>
      <View style = {styles.CoContainer}>
        <Text style = {styles.positionHeading}>Coordinators</Text>
        <Coordinators name = "Lakshay Setia" PhoneNO = "+91 8968442211"/>
        <Coordinators name = "Prajwal Chittora" PhoneNO = "+91 6367981595"/>

      </View>
      <Gallery
        g1 = {require('../../assets/Tech Clubs/Phoenix/1.JPG')}
        g2 = {require('../../assets/Tech Clubs/Phoenix/2.JPG')}
        g3 = {require('../../assets/Tech Clubs/Phoenix/3.JPG')}
        g4 = {require('../../assets/Tech Clubs/Phoenix/4.JPG')}
      />
      {/* <Footer name = {navigation.navigate('Gym')}/> */}
    </View>
  )
}

export default Phoenix

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

