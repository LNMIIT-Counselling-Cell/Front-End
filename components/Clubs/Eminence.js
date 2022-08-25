import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import TopContent from '../PageComponents/TopContent'
import Gallery from '../PageComponents/Gallery'
import Coordinators from '../PageComponents/Coordinators'
import Footer from '../Footer'

const Eminence = ({navigation}) => {

  const content = "‘Fashion is about dressing according to what’s fashionable. Style is more about being yourself.’ \n —Oscar de la RentaEminence \n Fashion club of The LNMIIT believes in this excerpt from a saying by the legendary Oscar de la Renta and although being a fashion club, style, personality, liveliness and creativity are the club’s four central pillars.You can opt your heart’s desire from ramp walking, make-up, fashion designing and demonstrate your outstanding abilities through talent and self-confidence amalgamation. The vibrant Vogue Fashion Week in Vivacity, and events like gusto pivot more around your confidence and attitude, than what you wear. Organising Rubaroo, the fresher's night, gives you power to avail your aesthetic minds and compose one of your most memorable of days. The club rejoices in portraying vehemence for showing off your best while giving credence to the flaws which never lets its fire and fierceness to cease."
  return (
    <View style = {styles.container}>
       <Image style = {styles.back} source = {require('../../assets/back.png')} onClick ={()=>navigation.goBack()}></Image> 
      <TopContent  name = "Eminence"  image = {require('../../assets/Logos/eminence.png')} text = {content}/>
      <View style = {styles.CoContainer}>
        <Text style = {styles.positionHeading}>Coordinators</Text>
        <Coordinators name = "Prabhav Jain" PhoneNO = "+91 7088772441"/>
        <Coordinators name = "Khushi Tiwari" PhoneNO = "+91 6376492639"/>
        
      </View>
      <Gallery 
        g1 = {require('../../assets/Cult Clubs/Eminence/1.JPG')}
        g2 = {require('../../assets/Cult Clubs/Eminence/2.JPG')}
        g3 = {require('../../assets/Cult Clubs/Eminence/3.jpg')}
        g4 = {require('../../assets/Cult Clubs/Eminence/4.JPG')}
      />
      {/* <Footer name = {navigation.navigate('Gym')}/> */}
    </View>
  )
}

export default Eminence

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

