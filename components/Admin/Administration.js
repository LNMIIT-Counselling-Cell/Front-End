import {Dimensions,Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AdminComponent from './AdminComponent'

const height = Dimensions.get("window").height;

const Administration = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.heading}>College Administration</Text>
      <AdminComponent n1 = 'Holiday' t1 = 'Calendar' n2 = 'Mess' t2 = 'Menu' n3 = 'Bus Time' t3 = 'Table' n4 = 'SOPs' t4='' heading = 'Important Documents'></AdminComponent>
        
          <View style = {styles.box}>
            <Text style = {styles.BoxHeading}>Faculties</Text>
            <ScrollView horizontal = {true} style = {styles.scroll} showsHorizontalScrollIndicator ={false} contentContainerStyle = {styles.optionBox}>
              <View style = {[styles.option,{backgroundColor : '#FFCBA6'}]}>
                <Text style = {[styles.optionText,{color : '#FF6A00'}]}>Important</Text>
                <Text style = {[styles.optionText,{color : '#FF6A00'}]}>Contacts</Text>
              </View>
              <View style = {[styles.option,{backgroundColor : '#C3B0FF'}]}>
                <Text style = {[styles.optionText,{color : '#551FFF'}]}>CSE</Text>
                <Text style = {[styles.optionText,{color : '#551FFF'}]}>Department</Text>
              </View>
              <View style = {[styles.option,{backgroundColor : '#A6E6FF'}]}>
                <Text style = {[styles.optionText,{color : '#00B7FE'}]}>ECE</Text>
                <Text style = {[styles.optionText,{color : '#00B7FE'}]}>Department</Text>
              </View>
              <View style = {[styles.option,{backgroundColor : '#FEB2C3'}]}>
                <Text style = {[styles.optionText,{color : '#FD2254'}]}>Mechanical</Text>
                <Text style = {[styles.optionText,{color : '#FD2254'}]}>Department</Text>
              </View>
              <View style = {[styles.option,{backgroundColor : '#FFCBA6'}]}>
                <Text style = {[styles.optionText,{color : '#FF6A00'}]}>Physics</Text>
                <Text style = {[styles.optionText,{color : '#FF6A00'}]}>Department</Text>
              </View>
              <View style = {[styles.option,{backgroundColor : '#C3B0FF'}]}>
                <Text style = {[styles.optionText,{color : '#551FFF'}]}>HSS</Text>
                <Text style = {[styles.optionText,{color : '#551FFF'}]}>Department</Text>
              </View>
              <View style = {[styles.option,{backgroundColor : '#A6E6FF'}]}>
                <Text style = {[styles.optionText,{color : '#00B7FE'}]}>Maths</Text>
                <Text style = {[styles.optionText,{color : '#00B7FE'}]}>Department</Text>
              </View>
            </ScrollView>
          </View>
        
      <AdminComponent n1 = 'Campus' t1 = 'Map' n2 = 'Academic' t2 = 'Area Map' n3 = 'Curriculum' t3 = '' n4 = 'Important' t4='Links' heading = 'Miscellanous'></AdminComponent>
      <View style = {styles.directorContainer}>
        <View style = {styles.MsgContainer}>
          <Text style = {styles.Msgheading}>Director's Message</Text>
          <Text style = {styles.msg}>Welcome to The LNM Institute of Information Technology LNMIIT, Jaipur! The LNMIIT is an institution of higher learning focused in select areas of Computing, Communication, ICT, Electronics and carefully chosen traditional engineering and sciences with an innovative blend of interdisciplinary flavor and contemporary relevance.</Text>
        </View>
        <View style = {styles.director}>
          <Image source={require('../../assets/Rahul sir.png')} style = {styles.photo}></Image>
          <Text  style = {styles.DirName} >Prof. Rahul Banerjee</Text>
        </View>
      </View>
      <View style = {styles.ExtraMessage}>
        <Text style = {styles.msg}>The Institute, in spite of being young (founded in 2002, jointly by the Government of Rajasthan and the Lakshmi & Usha Mittal Foundation in the public-private partnership mode) is considered as one of the best institutions in its chosen areas of higher learning, both in the state and the country. In addition to having been accredited by the National Assessment & Accreditation Council (NAAC) as an ‘A’ grade institution, the LNMIIT has been ranked fairly high by many different agencies in the recent past as may be noticed elsewhere on this web-portal.The Institute takes pride in its eco-system that aims to groom incoming students into academically strong yet well-rounded personality based professionals who could adapt themselves to the challenges posed by the ever-changing world and working environments.If you are an aspiring student, we welcome you to take a good look at our website to know more about what the Institute has to offer and preferably consider visiting the campus for getting to know it even better by getting the first hand feel of its ambience and interacting with faculty and students so that you could take a well-informed decision.If you have already applied to the LNMIIT, have been offered an admission and accepted the offer, Congratulations and Welcome to this new home of yours for next few years!</Text>
      </View>
    </View>
  )
}

export default Administration

const styles = StyleSheet.create({
    container: { 
        position : 'absolute',
        width: 360,
        // height: height,
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

      scroll : {
        display : 'flex',
        flexDirection : 'row',
        // justifyContent : 'space-evenly',
        flexGrow : 0
      },

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
      padding : 5
    },

    option : {
        height : 56,
        width : 77,
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 8,
        justifyContent : 'center',
        margin : 5
    },

    optionText : {
        fontSize :12,
        lineHeight : 14,
        fontWeight : 500,
        textAlign : 'center'
    },

    directorContainer : {
      display : 'flex',
      flexDirection : 'row',
      alignItems : 'center',
      justifyContent : 'space-between',
      marginTop : 20,
      paddingHorizontal : 15
    },

    MsgContainer : {
      width : 210
    },

    Msgheading : {
      fontSize : 20,
      lineHeight : 14,
      textAlign : 'justify',
      color : "#FFFFFF",
      fontWeight : 700
    },

    msg : {
      fontSize : 10,
      lineHeight : 12.1,
      textAlign : 'justify',
      color : "#FFFFFF",
      fontWeight : 400,
      marginTop : 11
    },

    director : {
      width : 103,
      height : 120,
      marginLeft : 20
    },

    photo : {
      height : 99,
      width : 99
    },
    
    DirName : {
      fontSize : 10,
      lineHeight : 12.1,
      textAlign : 'center',
      color : "#FFFFFF",
      fontWeight : 700
    },

    ExtraMessage : {
      width : 330,
      marginLeft : 15,
      marginBottom : 20
    }

})