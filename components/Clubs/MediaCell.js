import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopContent from '../PageComponents/TopContent'
import Gallery from '../PageComponents/Gallery'
import Coordinators from '../PageComponents/Coordinators'
import Footer from '../Footer'

const MediaCell = ({navigation}) => {

  const content = "The Media Cell is the media body of LNMIIT who have their eyes and ears everywhere, looking to grasp the most important information; even from the most obscure events. Along with the singularly given responsibility of training anchors and hosts for all the events around the college, the Media Cell calls upon external guidance and internal sessions that train students in general communication and soft skills.\nHosting a plethora of flagship events every year has become a part and parcel of the Media Cell. With storytellers, creators, artists, speakers, they are one of the most vibrant body on the campus with the ability to really do EVERYTHING."
  
  return (
    <View style = {styles.container}>
        
      <TopContent  name = "Media Cell"  image = {require('../../assets/clubs/mediacell.png')} text = {content}/>
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

