import { Image,StyleSheet,View, Text } from 'react-native'
import React from 'react'


const Home = () => {
  return (
    <View style = {styles.container}>
        <View style = {styles.header}>
            <Image style = {styles.logoContainer} source={require('../assets/Ccell logo.png')}></Image>
            <Text style = {styles.heading}>C-Cell</Text>
        </View>
        <View style = {styles.optionHolder}>
            <View style = {styles.option}>
                <Image style = {styles.optionImage} source={require('../assets/todays events logo.png')}></Image>
                <Text style = {styles.optionText}>Today's Events</Text>
            </View>
            <View style = {[styles.option , {backgroundColor : '#C3B0FF'}]}>
                <Image style = {[styles.optionImage, {width : 26,height:38.55}]} source={require('../assets/menu logo.png')}></Image>
                <Text style = {[styles.optionText, {color : '#551FFF'}]}>Menu</Text>
            </View>
            <View style = {[styles.option , {backgroundColor : '#A6E6FF'}]}>
                <Image style = {styles.optionImage} source={require('../assets/cp logo.png')}></Image>
                <Text style = {[styles.optionText, {color : '#00B7FE'}]}>Counselling Process</Text>
            </View>
            <View style = {[styles.option , {backgroundColor : '#FEB2C3'}]}>
                <Image style = {styles.optionImage} source={require('../assets/timetable logo.png')}></Image>
                <Text style = {[styles.optionText, {color : '#FD2254'}]}>Time Table</Text>
            </View>
        </View>   
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: { 
        position : 'absolute',
        width: 360,
        height: 778,
        backgroundColor: '#3E3A66', 
      },

      logoContainer : {
        width : 47,
        height : 47,
      },

      header : {
        position : 'absolute',
        marginHorizontal : 20,
        marginTop : 45,
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',    
      },

      heading : {
        color : '#FFFFFF',
        textAlign : 'center',
        marginLeft : 79,
        fontSize : 21,
        lineHeight : 32,
        fontWeight : 400,
        
      },

      optionHolder : {
        display : 'flex',
        flexDirection : 'row',
        marginHorizontal : 13,
        top : 123,
        justifyContent : 'space-evenly'
        
      }, 

      option : {
        width : 76.85,
        height : 100,
        backgroundColor : '#FFCBA6',
        borderRadius : 8,
        alignItems : 'center',
        justifyContent : 'center'
      },

      optionImage : {
        width : 30.48,
        height : 30.94,
        },

    optionText : {
        fontWeight : 500,
        fontSize : 12,
        lineHeight : 14,
        textAlign : 'center',
        color : '#FF6A00',
        marginTop : 11
    }
})