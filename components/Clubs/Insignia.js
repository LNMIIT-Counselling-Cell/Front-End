import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopContent from '../PageComponents/TopContent'
import Gallery from '../PageComponents/Gallery'
import Coordinators from '../PageComponents/Coordinators'
import Footer from '../Footer'

const Insignia = ({navigation}) => {

  const content = "INSIGNIA, was founded by our seniors of the y11 batch to provide an opportunity to better the dancer in students through constant engagement and to encourage participation in dance events irrespective of the student's degree of talent. We hereby focus on building team coordination, discipline, and individual confidence to bring out the best in our members because winning is not important, shining is!The dance club is one of the most happening clubs of lnmiit and it helps students stay fit, socialize and learn creative skills through dance. Time management, team management, and mind-body relationship are just to name a few. We adhere and persevere until we conquer!The students who have participated in other colleges have brought glory to our college in various performances, be it solo, group, duo, or dance battles and we continue to strive for more. Our motto? Practice like you never won and perform like you never lost.This is why everyone comprising our team wears an insignia of hard work, dedication, and pure love for dance!"
  return (
    <View style = {styles.container}>
        
      <TopContent  name = "Insignia"  image = {require('../../assets/Logos/insignia.png')} text = {content}/>
      <View style = {styles.CoContainer}>
        <Text style = {styles.positionHeading}>Coordinators</Text>
        <Coordinators name = "Anit Mehta" PhoneNO = "+91 9829664944"/>
        <Coordinators name = "Nikita Saboo" PhoneNO = "+91 9521128477"/>

      </View>
      <Gallery />
      {/* <Footer name = {navigation.navigate('Gym')}/> */}
    </View>
  )
}

export default Insignia

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

