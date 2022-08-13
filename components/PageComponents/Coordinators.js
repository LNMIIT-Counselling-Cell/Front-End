import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Coordinators = (props) => {
    const {name,PhoneNO} = props;
  return (
    <View style = {styles.nameContainer}>
      <Text style = {styles.name}>{name}</Text>
      <Text style = {styles.name}>{PhoneNO}</Text>
    </View>
  )
}

export default Coordinators

const styles = StyleSheet.create({

    nameContainer : {
        
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },

    name : {
        fontSize : 11,
        lineHeight : 13,
        color : "#FFFFFF",
        fontWeight : 400
    }
})