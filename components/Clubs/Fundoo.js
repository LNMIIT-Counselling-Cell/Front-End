import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import TopContent from '../PageComponents/TopContent'
import Gallery from '../PageComponents/Gallery'
import Coordinators from '../PageComponents/Coordinators'
import Footer from '../Footer'

const Fundoo = ({navigation}) => {

  
  return (
    <View style = {styles.container}>
       <Image style = {styles.back} source = {require('../../assets/back.png')} onClick ={()=>navigation.goBack()}></Image> 
      <TopContent  name = "Fundoo"  image = {require('../../assets/Logos/fundoo.png')}/>
      <View style = {styles.CoContainer}>
        <Text style = {styles.positionHeading}>Coordinators</Text>
        <Coordinators name = "Harshini Aggarwal" PhoneNO = "+91 9664328160"/>
        <Coordinators name = "Harshita Ghatiya" PhoneNO = "+91 9993227261"/>
        <Coordinators name = "Jatin Sharma" PhoneNO = "+91 8278637830"/>
        <Coordinators name = "Prit Suvagiya" PhoneNO = "+91 7016534092"/>
      </View>   

      <Gallery />
      {/* <Footer name = {navigation.navigate('Gym')}/> */}
    </View>
  )
}

export default Fundoo

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

