import { Image,StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
// import { TouchableOpacity } from 'react-native-web'

const TimeTable = ({navigation}) => {
  return (
    <View style = {styles.container}>
      <Image style = {styles.back} source = {require('../../assets/back.png')} onClick ={()=>navigation.goBack()}></Image>
      <Text style = {styles.heading}>TimeTable</Text>
        <TouchableOpacity style = {[styles.BTT,{backgroundColor : '#47F4BC'}]}>
            <Text style = {[styles.text,{color : '#3A8A38'}]}>Bus Time Table</Text>
        </TouchableOpacity>
      <View style = {styles.semContainer}>
        <TouchableOpacity style = {[styles.TT,{backgroundColor : '#FFCBA6'}]}>
            <Text style = {[styles.text,{color : '#FF6A00'}]}>1st Semester</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[styles.TT,{backgroundColor : '#C3B0FF'}]}>
            <Text style = {[styles.text,{color : '#551FFF'}]}>2nd Semester</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[styles.TT,{backgroundColor : '#A6E6FF'}]}>
            <Text style = {[styles.text,{color : '#00B7FE'}]}>3rd Semester</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[styles.TT,{backgroundColor : '#FEB2C3'}]}>
            <Text style = {[styles.text,{color : '#FD2254'}]}>4th Semester</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style = {[styles.TT,{backgroundColor : '#FFCBA6'}]}>
            <Text style = {[styles.text,{color : '#FF6A00'}]}>5th Semester</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[styles.TT,{backgroundColor : '#C3B0FF'}]}>
            <Text style = {[styles.text,{color : '#551FFF'}]}>6th Semester</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[styles.TT,{backgroundColor : '#A6E6FF'}]}>
            <Text style = {[styles.text,{color : '#00B7FE'}]}>7st Semester</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {[styles.TT,{backgroundColor : '#FEB2C3'}]}>
            <Text style = {[styles.text,{color : '#FD2254'}]}>8th Semester</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  )
}

export default TimeTable

const styles = StyleSheet.create({
    container: { 
        position : 'absolute',
        width: 360,
        height : '100%',
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

      BTT : {
        height : 38,
        width : 310,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : '#47F4BC',
        borderRadius : 8,
        marginTop : 21
      },

      text : {
        fontSize : 18,
        lineHeight : 14,
        fontWeight : 500,
        textAlign : 'center'
      },

      semContainer : {
        width : 330,
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        alignItems : 'center',
        flexWrap : 'wrap',
        marginTop : 22
      },

      TT : {
        width : 147,
        height : 65.6,
        borderRadius : 15,
        justifyContent : 'center',
        alignItems : 'center',
        marginBottom : 16
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