import { Image,StyleSheet,View, Text } from 'react-native'
import React from 'react'

const TopContent = (props) => {

    const {name,image} = props;
  return (
    <View style = {{alignItems : 'center'}}>
      <Text style = {styles.heading}>{name}</Text>
      <Image source={image} style = {styles.logo} ></Image>
      <View style = {styles.textContainer}>
        <Text style = {styles.text}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour).
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
        width : 60,
        height : 60,
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