import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import TopContent from '../PageComponents/TopContent'
import Gallery from '../PageComponents/Gallery'
import Coordinators from '../PageComponents/Coordinators'
import Footer from '../Footer'

const Imagination = ({navigation}) => {

  const content = "IMAGINATION is the photography and cinematography club of The LNM Institute of Information Technology,The club primarily covers any event by capturing them in photo and video formats. It consists of skillful and talented individuals who are extremely passionate in the domains of photography and cinematography. These members are selected after a thorough assessment of their skills.\n Imagination has four domains:\n*    Photography and Photo-editing\n*    Cinematography and Video-editing\n*    Graphics Designing\n*    Content Writing\nThe club conducts various events and competitions such as Through the lens, Click Start, Photowalk, workshops, Kalakriti, FMC, etc to upskill its members and also other students can exercise their creativity through these.The club also conducts various workshops like photo editing, video editing, and graphic designing. Anyone who wishes to showcase their talents can participate in the events and workshops."
  // const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
  return (
    <View style = {styles.container}>
       <Image style = {styles.back} source = {require('../../assets/back.png')} onClick ={()=>navigation.goBack()}></Image> 
      <TopContent  name = "Imagination"  image = {require('../../assets/Logos/imagination.png')} text = {content}/>
      <View style = {styles.CoContainer}>
        <Text style = {styles.positionHeading}>Coordinators</Text>
        <Coordinators name = "Harshini Aggarwal" PhoneNO = "+91 9664328160"/>
        <Coordinators name = "Harshita Ghatiya" PhoneNO = "+91 9993227261"/>
        <Coordinators name = "Jatin Sharma" PhoneNO = "+91 8278637830"/>
        <Coordinators name = "Prit Suvagiya" PhoneNO = "+91 7016534092"/>
      </View>   

      <Gallery 
        g1 = {require('../../assets/Cult Clubs/Imagination/1.jpeg')}
        g2 = {require('../../assets/Cult Clubs/Imagination/2.jpg')}
        g3 = {require('../../assets/Cult Clubs/Imagination/3.jpg')}
        g4 = {require('../../assets/Cult Clubs/Imagination/5.jpg')}
      />
      {/* <Footer name = {navigation.navigate('Gym')}/> */}
    </View>
  )
}

export default Imagination

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

