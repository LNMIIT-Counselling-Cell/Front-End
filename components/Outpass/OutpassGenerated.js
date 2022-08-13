import { Image,StyleSheet, View, Text } from 'react-native'
import React from 'react'
import OutpassHeader from './OutpassHeader'



const OutpassGenerated = () => {
  return (
    <View>
      <View style={styles.container}>
        <OutpassHeader />
        <View style = {styles.userContainer}>   
            <Image style = {styles.photoContainer} source={require('../../assets/outpass.png')}  />
            <View style = {styles.OutpassGeneratedBox} >
                <Text style = {styles.OutpassGeneratedText}>OutPass Generated</Text>
            </View>
            <View style = {styles.tokenBox}>
                <Text style = {[styles.text , {textAlign : "center"}]} >Your Unique Token Number</Text>
                <Text style = {styles.tokenNo}>8473456324563</Text>
            </View>
            <View style = {styles.detailbox}>
                <View style = {styles.detail}>
                    <Text style = {styles.detailText}>Purpose : SHAADI</Text>
                    <Text style = {styles.detailText}>Transport : GAADI</Text>
                </View>
                <View style = {styles.detail}>
                    <Text style = {styles.detailText}>From : 7:30 AM</Text>
                    <Text style = {styles.detailText}>To : 8:30 PM</Text>
                </View>

            </View>
        </View>
        <View style = {styles.rules}>
            <Text style = {styles.rulesText}>Rules & Regulations</Text>
        </View>
        <View style = {styles.textBox} >
            <Text style = {styles.text}>It is a long established fact that a reader will be distracted by the readable content of a.
page when looking at its layout. The point of using Lorem Ipsum is that it has a
more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
Many desktop publishing packages and web page editors now use Lorem Ipsum</Text>
        </View>
      </View>
    </View>
  )
}

export default OutpassGenerated

const styles = StyleSheet.create({
    container: { 
      position : 'relative',
      width: 360,
      height: 778,
      backgroundColor: '#3E3A66', 
    },

    userContainer : {
        position: 'absolute',
        width: 288,
        height: 403,
        left: 36,
        top: 138,
        backgroundColor : '#5D5986',
        borderRadius : 10,
        alignItems : 'center'
      },

    rules : {
        position: 'absolute',
        width: 241,
        height: 22,
        left: 36,
        top: 583,
    },

    rulesText :{
        color : '#FFFFFF',
        fontSize : 14,
        lineHeight : 24,
        fontWeight : 300,
        
    },

    textBox : {
        position: 'absolute',
        width: 289,
        height: 81,
        left: 32,
        top: 605, 
    },

    text : {
        color : '#FFFFFF',
        fontSize : 8,
        lineHeight : 10,
        fontWeight : 400,
        
        
    },

    photoContainer : {
        position : 'absolute',
        width : 115,
        height : 115,
        left : 100,
        top : 58,
        
    },

    OutpassGeneratedBox : {
        position : "absolute",
        width : 241,
        height : 22,
        top : 189,
        
    },

    OutpassGeneratedText : {
        textAlign : "center",
        fontWeight : 400,
        fontSize : 21,
        lineHeight : 24,
        color : "#FFFFFF"
    },

    tokenBox : {
        position : "absolute",
        top : 242,

    },

    tokenNo : {
        color : "#FFFFFF",
        fontWeight : 275,
        fontSize : 27,
        textAlign : 'center'
    }, 

    detailbox : {
        width : 241,
        height : 24,
        top : 308,
        display : 'flex'
    },

    detail : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },

    detailText : {
        color : "#FFFFFF",
        fontWeight : 700,
        fontSize : 8,
        lineHeight : 24,
        textAlign : 'center'
    }


})