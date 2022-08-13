import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-web'

const PreviousOutpass = () => {
  return (
    <View style = {styles.container}>
      <View style = {styles.heading}>
        <Text style = {styles.headText}>Outpass</Text>
      </View>
      <View style = {styles.tag}>
        <Text style = {styles.tagText}>Previous OutPass</Text>
      </View>
      <View style = {styles.OutContainer}>
        <View style = {styles.prevContainer}>
            <Text style = {styles.prevData}>21-07-2002</Text>
            <Text style = {styles.prevData}>123456123456</Text>
        </View>
        <View style = {styles.prevContainer}>
            <Text style = {styles.prevData}>21-07-2002</Text>
            <Text style = {styles.prevData}>123456123456</Text>
        </View>
      </View>
    </View>
  )
}

export default PreviousOutpass

const styles = StyleSheet.create({

    container: { 
        position : 'absolute',
        width: 360,
        height: 778,
        backgroundColor: '#3E3A66', 
        // justifyContent : 'center',
        alignItems : 'center'
      },

      heading: {
        position : 'absolute',
        width: 80,
        height: 26,
        
        top: 45,
        textAlign : 'center'
      },
    
      headText : {
        color : '#FFFFFF',
        fontWeight : '600',
        fontSize : 21,
        fontFamily : 'Outfit',
        fontStyle : 'normal',
        lineHeight : 26,
    
      },

      tag : {
        position: 'absolute',
        width: 125,
        height: 24,
        // marginBottom : 22,
        top: 92,
        textAlign : 'center',
      },
    
      tagText : {
        color : '#FFFFFF',
        fontWeight : '300',
        fontSize : 16,
        fontFamily : 'Poppins',
        fontStyle : 'normal',
        lineHeight : 24,
      },
    
      prevContainer : {
        display : 'flex',
        flexDirection : 'row',
        padding : 11,
        justifyContent : 'space-between',
        alignItems : 'center',
        width : 288,
        height : 39,
        backgroundColor : '#5D5986',
        borderRadius : 5,
        // position : 'absolute',
        marginBottom : 10
      },

      prevData : {
        color : '#FFFFFF',
        fontSize : 14,
        lineHeight : 16,
        fontWeight : 300
      },

      OutContainer : {
        width : 288,
        top : 136
      }
    
})