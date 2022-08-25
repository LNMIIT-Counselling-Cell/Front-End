import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import TopContent from '../PageComponents/TopContent'
import Gallery from '../PageComponents/Gallery'
import Coordinators from '../PageComponents/Coordinators'
import Footer from '../Footer'

const Vignette = ({navigation}) => {

  const content = "Vignette - The LNMIIT Art & Craft Club is responsible for creating an extravagant environment. Creativity is what the Art Club nurtures. It intensifies the beauty of normality into something appreciable. One of the most active clubs of the Cultural Council, Art Club organizes art events throughout the session to bring out the talent in every possible way. From displaying artistic talent to decorating the college for the fests and events to bring the set aura, there isn't a moment when the art club fails to showcase its talent. The club also organizes intra-college events like Art Attack, T-shirt Painting, Face Painting, and more. These events are in the form of competitions where you can showcase your talent and artistic skills on paper, canvas, t-shirt, or even on your face. There are no limitations while being creative; the club flaunts its artwork in various fields like 3-D art, Sketching, Painting, and many more. The club welcomes everyone who aspires to be an artist, where your creative mind can put ideas into reality."
  return (
    <View style = {styles.container}>
        <Image style = {styles.back} source = {require('../../assets/back.png')} onClick ={()=>navigation.goBack()}></Image>
      <TopContent  name = "Vignette"  image = {require('../../assets/Logos/vignette.png')} text = {content}/>
      <View style = {styles.CoContainer}>
        <Text style = {styles.positionHeading}>Coordinators</Text>
        <Coordinators name = "Aashi Bansal" PhoneNO = "+91 8302053097"/>
        <Coordinators name = "Bhavya Gupta" PhoneNO = "+91 7073335504"/>

      </View>   

      <Gallery
        g1 = {require('../../assets/Cult Clubs/Vignette/1.png')}
        g2 = {require('../../assets/Cult Clubs/Vignette/2.png')}
        g3 = {require('../../assets/Cult Clubs/Vignette/3.png')}
        g4 = {require('../../assets/Cult Clubs/Vignette/4.png')}
      />
      {/* <Footer name = {navigation.navigate('Gym')}/> */}
    </View>
  )
}

export default Vignette

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

