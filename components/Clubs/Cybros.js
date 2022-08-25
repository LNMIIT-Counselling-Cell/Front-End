import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import TopContent from '../PageComponents/TopContent'
import Gallery from '../PageComponents/Gallery'
import Coordinators from '../PageComponents/Coordinators'
import Footer from '../Footer'

const content = "Cybros is a core hub for programmers aiming to keep the booming “coding culture” of LNMIIT reigning. The official coding club, Cybros is composed of top prolific coders whose binding power has rendered many unfathomable achievements. Cybros nurtures and guides fresher batches by forming a spirit of Competitive Programming from the first semester itself. Furthermore, it organises CyTalks which behaves as a multifaceted offline event posing as a resource-packed programming workshop, a motivational chat, or a mentoring session.It is also notorious for holding many contests like CodeLNM: an intra-college contest enjoying mighty participation, and weekly contest series like Placement Series and Beginners Series aimed at senior batches and beginners respectively. In Addition, CyHub — Cybros’ Codeforces group is a one-stop destination for topic-specific resources and archives of the previous contests held. In a nutshell, Cybros acts like a web interlinking enthusiastic learners at LNMIIT and scooping them into the realm of programming."
const Cybros = ({navigation}) => {

  return (
    <View style = {styles.container}>
        <Image style = {styles.back} source = {require('../../assets/back.png')} onClick ={()=>navigation.goBack()}></Image>
      <TopContent  name = "Cybros"  image = {require('../../assets/Logos/cybros.png')} text = {content}/>
      <View style = {styles.CoContainer}>
        <Text style = {styles.positionHeading}>Coordinators</Text>
        <Coordinators name = "Harsh Dhingra" PhoneNO = "+91 8769359530"/>
        <Coordinators name = "Anshul Garg" PhoneNO = "+91 9205287611"/>
        
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

export default Cybros

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

