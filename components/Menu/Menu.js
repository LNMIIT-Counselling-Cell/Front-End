import { Image,TouchableOpacity,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MenuCards from './MenuCards'

const Menu = ({navigation}) => {
  return (
    <View style = {styles.container}>
      <Image style = {styles.back} source = {require('../../assets/back.png')} onClick ={()=>navigation.goBack()}></Image>
      <Text style = {styles.heading}>Menus</Text>
      <View style = {styles.cardBox}>  
        <TouchableOpacity onPress={()=>{}}>
          <MenuCards name = "Mess" tag = "Menu" backgroundColor = "#FFCBA6" color = "#FF6A00" image = {require('../../assets/mess menu.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{}}>
          <MenuCards name = "Bazzinga" tag = "" backgroundColor = "#C3B0FF" color = "#551FFF" image = {require('../../assets/bazzinga.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{}}>
          <MenuCards name = "The Food" tag = "Barn" backgroundColor = "#A6E6FF" color = "#00B7FE" image = {require('../../assets/tfb.png')} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
    container : {
        position : 'absolute',
        width: 360,
        height : '100%',
        backgroundColor: '#3E3A66',
        alignItems : 'center',
        alignSelf : 'stretch'
    },

    heading : {
        marginTop : 21,
        fontSize : 21,
        lineHeight : 26,
        fontWeight : 400,
        color : "#FFFFFF",
        marginBottom : 17
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