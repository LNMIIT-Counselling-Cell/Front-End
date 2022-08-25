import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import TopContent from '../PageComponents/TopContent'
import Gallery from '../PageComponents/Gallery'
import Coordinators from '../PageComponents/Coordinators'
import Footer from '../Footer'

const Rendition = ({navigation}) => {

  
  return (
    <View style = {styles.container}>
        <Image style = {styles.back} source = {require('../../assets/back.png')} onClick ={()=>navigation.goBack()}></Image>
      <TopContent  name = "Rendition"  image = {require('../../assets/Logos/rendition.png')}/>
      <View style = {styles.CoContainer}>
        <Text style = {styles.positionHeading}>Coordinators</Text>
        <Coordinators name = "Chintan S Makhijani" PhoneNO = "+91 8866941609"/>
        <Coordinators name = "Mayank Vyas" PhoneNO = "+91 9111607272"/>
        <Coordinators name = "Muskan Maheshwari" PhoneNO = "+91 7023125605"/>
        <Coordinators name = "Pratyush Chahar" PhoneNO = "+91 7078827666"/>
      </View>
      <Gallery />
      {/* <Footer name = {navigation.navigate('Gym')}/> */}
    </View>
  )
}

export default Rendition

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

