import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import TopContent from '../PageComponents/TopContent'
import Gallery from '../PageComponents/Gallery'
import Coordinators from '../PageComponents/Coordinators'
import Footer from '../Footer'

const content = 'Welcome to Capriccio, our small musical universe. Capriccio aims to take you on an emotional journey through beautiful melodies, harmonies, rhythms, and in short soulful pleasant music. Our club is made up of singers, instrumentalists, and producers who love music and have the potential to be great artists. It aims to provide you with comprehensive musical knowledge so that you can develop a deeper relationship with music. One thing is for sure, you will get to live the most memorable moments and will get to cherish the best memories of your college life. There are regular meetings among club members so that you can get to know each other and form bonds with others, interact with seniors, and learn about music because we believe Capriccio is a family, not a club.'

const Capriccio = ({navigation}) => {

  
  return (
    <View style = {styles.container}>
        <Image style = {styles.back} source = {require('../../assets/back.png')} onClick ={()=>navigation.goBack()}></Image>
      <TopContent  name = "Capriccio"  image = {require('../../assets/Logos/capriccio.png')} text = {content}/>
      <View style = {styles.CoContainer}>
        <Text style = {styles.positionHeading}>Coordinators</Text>
        <Coordinators name = "Manav Verma" PhoneNO = "+91 9911013871"/>
        <Coordinators name = "Satwik Jain" PhoneNO = "+91 7610027910"/>
        <Coordinators name = "Bhavya Srivastava" PhoneNO = "+91 8957063252"/>
        <Coordinators name = "Swatantra Jain" PhoneNO = "+91 9760314184"/>
      </View>
      <Gallery 
        g1 = {require('../../assets/Cult Clubs/Capriccio/1.jpg')}
        g2 = {require('../../assets/Cult Clubs/Capriccio/2.jpg')}
        g3 = {require('../../assets/Cult Clubs/Capriccio/5.jpg')}
        g4 = {require('../../assets/Cult Clubs/Capriccio/4.jpg')}
      />
      {/* <Footer name = {navigation.navigate('Gym')}/> */}
    </View>
  )
}

export default Capriccio

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

