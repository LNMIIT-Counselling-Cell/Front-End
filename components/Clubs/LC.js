import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import TopContent from '../PageComponents/TopContent'
import Gallery from '../PageComponents/Gallery'
import Coordinators from '../PageComponents/Coordinators'
import Footer from '../Footer'

const LC = ({navigation}) => {

  const content = "A club that provides literary enthusiasts with a platform to explore, expand, and exhilarate their psyches with literature and thoughts from the old worlds to the new. A club that draws out the orator, writer, and philosopher in you. A club that brings out the various sides and looks of a writer listener or a person who is sound in terms of knowledge acquainted with literature. Through our various activities and events, we tend to make a creative person a more creative and ingenious one, thus enhancing the on-stage prowess of the person. A club that offers opportunities to appreciate different types of literature and increase their own literary skills. This Literary Club aims at not only refining the literary skills of the students but also developing their logic and curiosity to know more and instil in them the confidence to speak well." 
  return (
    <View style = {styles.container}>
        <Image style = {styles.back} source = {require('../../assets/back.png')} onClick ={()=>navigation.goBack()}></Image>
      <TopContent  name = "Literary Commitee"  image = {require('../../assets/Logos/LC.png')} text = {content}/>
      <View style = {styles.CoContainer}>
        <Text style = {styles.positionHeading}>Coordinators</Text>
        <Coordinators name = "Ayush Verma" PhoneNO = "+91 9993859792"/>
        <Coordinators name = "Chiroshree Tiwari" PhoneNO = "+91 7014694294"/>
        <Coordinators name = "Sparsh Kumar" PhoneNO = "+91 9457790878"/>
      </View>
      <Gallery 
        g1 = {require('../../assets/Cult Clubs/Literary Committee/1.jpeg')}
        g2 = {require('../../assets/Cult Clubs/Literary Committee/2.jpg')}
        g3 = {require('../../assets/Cult Clubs/Literary Committee/3.JPG')}
        g4 = {require('../../assets/Cult Clubs/Literary Committee/4.png')}
      />
      {/* <Footer name = {navigation.navigate('Gym')}/> */}
    </View>
  )
}

export default LC

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

