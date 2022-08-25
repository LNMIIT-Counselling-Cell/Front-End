import {TouchableOpacity ,Image,StyleSheet,View, Text } from 'react-native'
import React from 'react'
import NameTags from '../NameTags/NameTags'
import Card from '../Cards/Card'
// import { TouchableOpacity } from 'react-native-web'

const Cultural = ({navigation}) => {
  return (
    <View style = {styles.container}>
      <Image style = {styles.back} source = {require('../../assets/back.png')} onClick ={()=>navigation.goBack()}></Image>
      <Text style = {styles.heading}>Cultural Council</Text>
      <Image source={require('../../assets/cultural council.png')} style = {styles.logo} ></Image>
      <View style = {styles.textContainer}>
        <Text style = {styles.text}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour).
        </Text>
      </View>
        <NameTags name = "Sarthak Goyal" position = "General Secretary"/>
        <NameTags name = "Diya Rajwanshi" position = "Associate General Secretary"/>
        <TouchableOpacity style = {styles.Event} onPress = {() => navigation.navigate('Viva')}>
            <Text style = {styles.eventText}> Vivacity</Text>
        </TouchableOpacity>
        
        <View style = {styles.cardBox}>
          <TouchableOpacity onPress={() => navigation.navigate('Aaveg')}>
            <Card name = 'Aaveg' tag = 'The Nukkad Mandali' image = {require('../../assets/Logos/aaveg.png')} backgroundColor = "#FFCBA6" color = "#FF6A00"/>
          </TouchableOpacity>    
          <TouchableOpacity onPress={() => navigation.navigate('Capriccio')}>
            <Card name = 'Capriccio' tag = 'The Music Club' image = {require('../../assets/Logos/capriccio.png')} backgroundColor = "#C3B0FF" color = "#551FFF"/>
          </TouchableOpacity>    
          <TouchableOpacity onPress={() => navigation.navigate('Eminence')}>
            <Card name = 'Eminence' tag = 'The Fashion Club' image = {require('../../assets/Logos/eminence.png')} backgroundColor = "#A6E6FF" color = "#00B7FE"/>
          </TouchableOpacity>    
          <TouchableOpacity onPress={() => navigation.navigate('Fundoo')}>
            <Card name = 'Fundoo' tag = 'Club' image = {require('../../assets/Logos/fundoo.png')} backgroundColor = "#FEB2C3" color = "#FD2254"/>
          </TouchableOpacity>    
          <TouchableOpacity onPress={() => navigation.navigate('Imagi')}>
            <Card name = 'Imagination' tag = '' image = {require('../../assets/Logos/imagination.png')} backgroundColor = "#FFCBA6" color = "#FF6A00"/>
          </TouchableOpacity>    
          <TouchableOpacity onPress={() => navigation.navigate('Insignia')}>
            <Card name = 'Insignia' tag = 'The Dance Club' image = {require('../../assets/Logos/insignia.png')} backgroundColor = "#C3B0FF" color = "#551FFF"/>
          </TouchableOpacity>    
          <TouchableOpacity onPress={() => navigation.navigate('LC')}>
            <Card name = 'Literary' tag = 'Committe' image = {require('../../assets/Logos/LC.png')} backgroundColor = "#A6E6FF" color = "#00B7FE"/>
          </TouchableOpacity>    
          <TouchableOpacity onPress={() => navigation.navigate('MC')}>
            <Card name = 'Media Cell' tag = '' image = {require('../../assets/Logos/media cell.png')} backgroundColor = "#FEB2C3" color = "#FD2254"/>
          </TouchableOpacity>    
          <TouchableOpacity onPress={() => navigation.navigate('Rendition')}>
            <Card name = 'Rendition' tag = 'The Dramatics Club' image = {require('../../assets/Logos/rendition.png')} backgroundColor = "#FFCBA6" color = "#FF6A00"/>
          </TouchableOpacity>    
          <TouchableOpacity onPress={() => navigation.navigate('Sankalp')}>
            <Card name = 'Sankalp' tag = 'Club' image = {require('../../assets/Logos/sankalp.png')} backgroundColor = "#C3B0FF" color = "#551FFF"/>
          </TouchableOpacity>    
          <TouchableOpacity onPress={() => navigation.navigate('Vignette')}>
            <Card name = 'Vignette' tag = 'The art club' image = {require('../../assets/Logos/vignette.png')} backgroundColor = "#A6E6FF" color = "#00B7FE"/>
          </TouchableOpacity>    
            
            
            
        </View>
    </View>
  )
}

export default Cultural


const styles = StyleSheet.create({

    container: { 
        position : 'absolute',
        width: 360,
        // height: 1700,
        backgroundColor: '#3E3A66',
        alignItems : 'center',
        // alignSelf : 'stretch'
      },

      heading : {
        marginTop : 21,
        fontSize : 21,
        lineHeight : 26,
        fontWeight : 400,
        color : "#FFFFFF"
      },

      logo : {
        marginTop : 13,
        width : 60,
        height : 60,
        backgroundColor: '#FFFF',
        borderRadius : '100%'
      },

      textContainer : {
        marginTop : 7.32,
        width : 291
      },

      text : {
        color : "#FFFFFF",
        fontSize : 10,
        lineHeight : 12,
        fontWeight : 400,
        textAlign : 'justify'
      },

      Event : {
        width : 292,
        height : 38,
        backgroundColor : "#47F4BC",
        marginTop : 20,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 8
      },

      eventText : {
        color : '#3A8A38',
        fontSize : 16,
        lineHeight : 14,
        fontWeight : 500
      },

      cardBox : {
        width : 330,
        display : 'flex',
        flexDirection : "row",
        justifyContent : 'space-evenly',
        flexWrap : 'wrap',
        flexShrink : 1,
        flexBasis : 'auto',
        flexGrow : 0,
        marginBottom : 20
        
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