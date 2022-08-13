import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AdminComponent from './AdminComponent'

const Administration = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.heading}>College Administration</Text>
      <AdminComponent n1 = 'Holiday' t1 = 'Calendar' n2 = 'Mess' t2 = 'Menu' n3 = 'Bus Time' t3 = 'Table' n4 = 'SOPs' t4='' heading = 'Important Documents'></AdminComponent>
      <AdminComponent n1 = 'Important' t1 = 'Contacts' n2 = 'CSE' t2 = 'Department' n3 = 'ECE' t3 = 'Department' n4 = 'HSS' t4='Department' heading = 'Faculties'></AdminComponent>
      <AdminComponent n1 = 'Campus' t1 = 'Map' n2 = 'Academic' t2 = 'Area Map' n3 = 'Curriculum' t3 = '' n4 = 'Important' t4='Links' heading = 'Miscellanous'></AdminComponent>
    </View>
  )
}

export default Administration

const styles = StyleSheet.create({
    container: { 
        position : 'absolute',
        width: 360,
        height: 778,
        backgroundColor: '#3E3A66', 
      },

      heading : {
        marginTop : 41,
        fontSize : 21,
        lineHeight : 26,
        fontWeight : 400,
        color : "#FFFFFF",
        textAlign : 'center',
        marginBottom : 46
      },


})