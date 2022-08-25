import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import TopContent from '../PageComponents/TopContent'
import Gallery from '../PageComponents/Gallery'
import Coordinators from '../PageComponents/Coordinators'
import Footer from '../Footer'

const content = 'Lord Byron once said, "Those who will not reason are bigots, those who cannot are fools, and those who dare not, are slaves."  We believe you come as a learner to the world and live as a person in society. The person in you should be robust to reason and realize the arguments.To inculcate reasoning and unleash the master within, The LNMIIT has a sigma debating club, The Debate Society. DebSoc has always been the charm for debaters with the best in professional suites and orators. The society strives to develop a rational personality among the students by harmoniously promoting debates and discussions in the form of MUNs, Group Discussions, Parliamentary Debates, and Extempores. Acknowledging the value of exposure and dialogue, the DebSoc is one of its kind to mold you as a conclusive lawyer of words.'
const Debsoc = ({navigation}) => {

  return (
    <View style = {styles.container}>
       <Image style = {styles.back} source = {require('../../assets/back.png')} onClick ={()=>navigation.goBack()}></Image> 
      <TopContent  name = "The Debate Society"  image = {require('../../assets/Logos/debsoc.png')} text = {content}/>
      <View style = {styles.CoContainer}>
      <Text style = {styles.positionHeading}>Coordinators</Text>
        <Coordinators name = "Divyanshi Gautam" PhoneNO = "+91 9462421299"/>
        <Coordinators name = "Arjun Saxena" PhoneNO = "+91 9571485158"/>
        <Coordinators name = "Saumya Kalra" PhoneNO = "+91 6375548121"/>
      </View>
      <Gallery
        g1 = {require('../../assets/Tech Clubs/DebSoc/2.jpg')}
        g2 = {require('../../assets/Tech Clubs/DebSoc/2.jpg')}
        g3 = {require('../../assets/Tech Clubs/DebSoc/3.jpg')}
        g4 = {require('../../assets/Tech Clubs/DebSoc/4.jpg')}
      />
      {/* <Footer name = {navigation.navigate('Gym')}/> */}
    </View>
  )
}

export default Debsoc

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

