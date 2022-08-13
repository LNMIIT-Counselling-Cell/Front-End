import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopContent from '../PageComponents/TopContent'
import Gallery from '../PageComponents/Gallery'
import Coordinators from '../PageComponents/Coordinators'
import Footer from '../Footer'

const MediaCell = ({navigation}) => {

  
  return (
    <View style = {styles.container}>
        
      <TopContent  name = "Media Cell"  image = {require('../../assets/clubs/mediacell.png')}/>
      <View style = {styles.CoContainer}>
        <Text style = {styles.positionHeading}>Coordinators</Text>
        <Coordinators name = "Akshat Upadhyay" PhoneNO = "+91 9876543212"/>
        <Coordinators name = "Ananya Nautiyal" PhoneNO = "+91 9876543212"/>
        <Coordinators name = "Anuj Mantri" PhoneNO = "+91 9876543212"/>
        <Coordinators name = "Himanshi Rangnani" PhoneNO = "+91 9876543212"/>
      </View>
      <Gallery />
      {/* <Footer name = {navigation.navigate('Gym')}/> */}
    </View>
  )
}

export default MediaCell

const styles = StyleSheet.create({
    container: { 
        position : 'absolute',
        width: 360,
        height: '100%',
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

