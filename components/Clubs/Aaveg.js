import { Image,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopContent from '../PageComponents/TopContent'
import Gallery from '../PageComponents/Gallery'
import Coordinators from '../PageComponents/Coordinators'
import Footer from '../Footer'

const content = "Nukkad Natak or Street theater is a form of theatrical performance in outdoor public spaces without a specific paying audience. It is one of the oldest forms of theater used to spread awareness on societal issues. Our club AAVEG - Nukkad Mandli brings you the real side of what nukkad natak exactly is; everything from loud monologues, moving slogans, powerful expressions and captivating music. It is a beautiful way of connecting with people and enlightening them about the issues that we are facing as a society. Our club has raised awareness on topics like body shaming, male/female sexual abuse, rights of LGBTQ community, menstruation, reservation and many more among common people. Over the years, our club has contributed to the society by performing at various locations like World Trade Park, Jaipur (WTP). We have also participated and even won in inter-college competitions of IIT Roorkee, Manipal University Jaipur and many more. Not just that, Aaveg is not only a club, it's a family! Hours and hours of relentless practice, tons of laughter, excitement and a little bit of nervousness have given us the bond that we will cherish for life."  
const Aaveg = ({navigation}) => {

  return (
    <View style = {styles.container}>
      <Image style = {styles.back} source = {require('../../assets/back.png')} onClick ={()=>navigation.goBack()}></Image>  
      <TopContent  name = "Aaveg"  image = {require('../../assets/Logos/aaveg.png')} text = {content}/>
      <View style = {styles.CoContainer}>
        <Text style = {styles.positionHeading}>Coordinators</Text>
        <Coordinators name = "Chintan S Makhijani" PhoneNO = "+91 8866941609"/>
        <Coordinators name = "Mayank Vyas" PhoneNO = "+91 9111607272"/>
        <Coordinators name = "Muskan Maheshwari" PhoneNO = "+91 7023125605"/>
        <Coordinators name = "Pratyush Chahar" PhoneNO = "+91 7078827666"/>
      </View>
      <Gallery
        g1 = {require('../../assets/Cult Clubs/Aaveg/1.jpg')}
        g2 = {require('../../assets/Cult Clubs/Aaveg/2.jpg')}
        g3 = {require('../../assets/Cult Clubs/Aaveg/3.jpeg')}
        g4 = {require('../../assets/Cult Clubs/Aaveg/4.jpg')}
      />
      {/* <Footer name = {navigation.navigate('Gym')}/> */}
    </View>
  )
}

export default Aaveg

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

