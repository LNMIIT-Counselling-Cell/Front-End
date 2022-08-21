import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopContent from '../PageComponents/TopContent'
import Gallery from '../PageComponents/Gallery'
import Coordinators from '../PageComponents/Coordinators'
import Footer from '../Footer'

const Sankalp = ({navigation}) => {

  const content = "Sankalp, The Social club of LNMIIT Jaipur, laid its foundation on the stiff rocks of helping and giving our valuables and necessities despite being a person who expects to get something in return. Here we work on social causes associated with the college mess workers, problems faced by people in the village near campus, and organizing self-growth and learning sessions for club dignitaries. Events such as 'Sahyog' , 'Make A Meal' and 'Janmashtami Celebration' are some campus events celebrated and organized with full enthusiasm and excitement. At last, be a person with a strong will for contribution."
  return (
    <View style = {styles.container}>
        
      <TopContent  name = "Sankalp"  image = {require('../../assets/Logos/sankalp.png')} text = {content}/>
      <View style = {styles.CoContainer}>
        <Text style = {styles.positionHeading}>Coordinators</Text>
        <Coordinators name = "Dhruv Sharma" PhoneNO = "+91 91731 76850"/>
        <Coordinators name = "Lakshya Gupta" PhoneNO = "+91 78782 09385"/>
        <Coordinators name = "Manan Badaya" PhoneNO = "+91 6377 774 832"/>
        <Coordinators name = "Muskan Singla" PhoneNO = "+91 8377089610"/>
        <Coordinators name = "Saurabh Sharma" PhoneNO = "+91 87696 43607"/>
        <Coordinators name = "Shubham Bansal" PhoneNO = "+91 77372 78724"/>
      </View>   

      <Gallery />
      {/* <Footer name = {navigation.navigate('Gym')}/> */}
    </View>
    
  )
}

export default Sankalp

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
    }
    
})

