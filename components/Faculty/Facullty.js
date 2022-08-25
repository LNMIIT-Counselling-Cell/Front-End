import { ScrollView,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FacultyComponent from './FacultyComponent'

const Facullty = () => {
  return (
    <View style = {styles.container}>
        <Text style = {styles.heading}>Important Contacts</Text>
        <ScrollView showsVerticalScrollIndicator = {false} contentContainerStyle = {styles.FaculltyContainer}>
            <FacultyComponent name = "Preety Singh" position = "HOD CSE" number = "7021833803" mail = "preety@lnmiit.ac.in" />
            <FacultyComponent name = "Preety Singh" position = "HOD CSE" number = "7021833803" mail = "preety@lnmiit.ac.in" />
            <FacultyComponent name = "Preety Singh" position = "HOD CSE" number = "7021833803" mail = "preety@lnmiit.ac.in" />
            <FacultyComponent name = "Preety Singh" position = "HOD CSE" number = "7021833803" mail = "preety@lnmiit.ac.in" />
            <FacultyComponent name = "Preety Singh" position = "HOD CSE" number = "7021833803" mail = "preety@lnmiit.ac.in" />
            <FacultyComponent name = "Preety Singh" position = "HOD CSE" number = "7021833803" mail = "preety@lnmiit.ac.in" />
            <FacultyComponent name = "Preety Singh" position = "HOD CSE" number = "7021833803" mail = "preety@lnmiit.ac.in" />
            <FacultyComponent name = "Preety Singh" position = "HOD CSE" number = "7021833803" mail = "preety@lnmiit.ac.in" />
            <FacultyComponent name = "Preety Singh" position = "HOD CSE" number = "7021833803" mail = "preety@lnmiit.ac.in" />
            <FacultyComponent name = "Preety Singh" position = "HOD CSE" number = "7021833803" mail = "preety@lnmiit.ac.in" />
        </ScrollView>
    </View>
  )
}

export default Facullty

const styles = StyleSheet.create({
    container: { 
        position : 'absolute',
        width: 360,
        height : '100%',
        backgroundColor: '#3E3A66',
        alignItems : 'center',
        alignSelf : 'stretch'
    },

    
    heading : {
        marginTop : 21,
        fontSize : 21,
        lineHeight : 26,
        fontWeight : 400,
        color : "#FFFFFF",
        marginBottom : 17
      },

    FaculltyContainer : {
        marginBottom : 20,
        
    }
    
})