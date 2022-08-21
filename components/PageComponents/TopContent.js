import { Image,StyleSheet,View, Text } from 'react-native'
import React from 'react'

const TopContent = (props) => {

    const {name,image,text} = props;
  return (
    <View style = {{alignItems : 'center'}}>
      <Text style = {styles.heading}>{name}</Text>
      <Image source={image} style = {styles.logo} ></Image>
      <View style = {styles.textContainer}>
        <Text style = {styles.text}>
            {text}
        </Text>
      </View>
    </View>
  )
}

export default TopContent

const styles = StyleSheet.create({

      heading : {
        marginTop : 21,
        fontSize : 21,
        lineHeight : 26,
        fontWeight : 400,
        color : "#FFFFFF"
      },

      logo : {
        marginTop : 13,
        width : 100,
        height : 100,
        // backgroundColor: '#FFFF',
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
    })