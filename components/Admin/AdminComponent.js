import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AdminComponent = (props) => {

    const {n1,t1,n2,t2,n3,t3,n4,t4,heading} = props;
  return (
    <View style = {styles.box}>
      <Text style = {styles.BoxHeading}>{heading}</Text>
      <View style = {styles.optionBox}>
        <View style = {[styles.option,{backgroundColor : '#FFCBA6'}]}>
            <Text style = {[styles.optionText,{color : '#FF6A00'}]}>{n1}</Text>
            <Text style = {[styles.optionText,{color : '#FF6A00'}]}>{t1}</Text>
        </View>
        <View style = {[styles.option,{backgroundColor : '#C3B0FF'}]}>
            <Text style = {[styles.optionText,{color : '#551FFF'}]}>{n2}</Text>
            <Text style = {[styles.optionText,{color : '#551FFF'}]}>{t2}</Text>
        </View>
        <View style = {[styles.option,{backgroundColor : '#A6E6FF'}]}>
            <Text style = {[styles.optionText,{color : '#00B7FE'}]}>{n3}</Text>
            <Text style = {[styles.optionText,{color : '#00B7FE'}]}>{t3}</Text>
        </View>
        <View style = {[styles.option,{backgroundColor : '#FEB2C3'}]}>
            <Text style = {[styles.optionText,{color : '#FD2254'}]}>{n4}</Text>
            <Text style = {[styles.optionText,{color : '#FD2254'}]}>{t4}</Text>
        </View>
        
      </View>
    </View>
  )
}

export default AdminComponent

const styles = StyleSheet.create({
    BoxHeading : {
        
        fontSize : 19,
        lineHeight : 26,
        fontWeight : 400,
        color : "#FFFFFF",
        padding : 10
      },

    box : {
      // paddingHorizontal : 10,
        marginBottom : 28
    },

    optionBox : {
        marginTop : 4,
        display : 'flex',
        flexDirection : 'row',
        justifyContent : "space-evenly",
        alignItems : 'center',
        
    },

    option : {
        height : 56,
        width : 77,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 8,
        justifyContent : 'center'
    },

    optionText : {
        fontSize :12,
        lineHeight : 14,
        fontWeight : 500,
        textAlign : 'center'
    }

})