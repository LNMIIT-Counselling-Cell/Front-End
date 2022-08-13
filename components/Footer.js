import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native'
import React from 'react'

const Footer = ({props,navigation}) => {
    const name = props;
  return (
    <View style = {styles.Footer}>
      <TouchableOpacity style = {styles.logo} onPress = {() => console.log('')}>
        <Image source={require('../assets/footer/institute.png')} style = {styles.image}></Image>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.logo} onPress = {() => {name}}>
        <Image source={require('../assets/footer/council.png')} style = {styles.image}></Image>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.logo} onPress = {() => console.log('')}>
        <Image source={require('../assets/footer/home.png') } style = {styles.image}></Image>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.logo} onPress = {() => console.log('')}>
        <Image source={require('../assets/footer/outpass.png')} style = {styles.image}></Image>
      </TouchableOpacity>
      <TouchableOpacity style = {styles.logo} onPress = {() => console.log('')}>
        <Image source={require('../assets/footer/user.png') } style = {styles.image}></Image>
      </TouchableOpacity>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    Footer : {
        marginTop : 10,
        bottom : 0,
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        alignItems : 'center',
        backgroundColor : '#2F2B54',
        width : 360,
        height : 62,
        borderTopRightRadius : 10,
        borderTopLeftRadius : 10
    },

    logo : {
        width : 38,
        height : 38,
        alignItems : 'center',
        justifyContent : 'center'
    },

    image : {
        width : 30,
        height : 30
    }
})