import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'


const OutpassHeader = () => {
  return (
    <View>  
      <View style ={styles.heading}>
        <Text style = {styles.headtext}>OutPass</Text>
      </View>
      <View style = {styles.date}>
        <Text style = {styles.dateText}>21-07-2002</Text>
      </View>
      <View style = {styles.day}>
        <Text style = {styles.dateText}>Thursday</Text>
      </View>
    </View>
  )
}

export default OutpassHeader

const styles = StyleSheet.create({



    heading: {
      position : 'absolute',
      width: 80,
      height: 26,
      left: 140,
      top: 45,
      textAlign : 'center'
    },
  
    headtext : {
      color : '#FFFFFF',
      fontWeight : '600',
      fontSize : 21,
      fontFamily : 'Outfit',
      fontStyle : 'normal',
      lineHeight : 26,
  
    },
  
    date : {
      position: 'absolute',
      width: 87,
      height: 24,
      left: 137,
      top: 92,
      textAlign : 'center',
    },
  
    dateText: {
      color : '#FFFFFF',
      fontWeight : '300',
      fontSize : 16,
      fontFamily : 'Poppins',
      fontStyle : 'normal',
      lineHeight : 24,
    },
  
    day : {
      position: 'absolute',
      width: 73,
      height: 24,
      left: 144,
      top: 110,
      textAlign : 'center',
    }
  })