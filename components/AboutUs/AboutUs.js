import { Image,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CordiCard from './CordiCard';

const AboutUs = () => {
    const heading = "The LNMIIT\nCounselling & Guidance Cell";
    const content = "LNMIIT Counselling & Guidance Cell (C-Cell) is a body that functions with the objective of facilitating the fresh batch make a smooth and healthy transition from 'new students' to LNMIITians, sensitize them with the LNMIIT ethos, help provide answers to their queries ranging from academic to personal and social ones. It works towards helping them adjust to the new campus as a home away from home. It undertakes a variety of roles and responsibilities ranging from organizing the Orientation Programme for the new batch, providing support in the admission process, document verification & reporting, conducting the Student-Faculty Mentorship Programme and related activities during the academic year."
  return (
    <View style = {styles.container}>
      <Text style = {styles.heading}>About Us</Text>
      <Image style = {styles.image} source={require('../../assets/AboutUs.png')}></Image>
      <Text style = {styles.headingText} >{heading}</Text>
      <Image style = {styles.logo} source={require('../../assets/Logos/c-cell.png')}></Image>
      <View style = {styles.content}>
        <Text style = {styles.text}>{content}</Text>
      </View>
      <Text style = {styles.CoordinatorHeading}>Coordinators</Text>
      <View style = {styles.cardBox}>        
        <CordiCard bg = "#FFCBA6" color = "#FF6A00" name = "Neev Nagvani" image = {require('../../assets/Logos/aaveg.png')}/>
        <CordiCard bg = "#C3B0FF" color = "#551FFF" name = "Prerna Sharma" image = {require('../../assets/Logos/aaveg.png')}/>
        <CordiCard bg = "#FEB2C3" color = "#FD2254" name = "Vansh Mahajan" image = {require('../../assets/Logos/aaveg.png')}/>
      </View>
      <View style = {styles.directorContainer}>
        <View style = {styles.MsgContainer}>
          <Text style = {styles.Msgheading}>Convener's Message</Text>
          <Text style = {styles.msg}>Welcome to a meaningful and rewarding experience at the LNM Institute of Information Technology, Jaipur. As you embark on your journey as an LNMIITian, you and your family are full of excitement and hope, as well as a range of queries and concerns in your mind. The C-Cell application has been designed by the LNMIIT Counselling and Guidance Cell to</Text>
        </View>
        <View style = {styles.director}>
          <Image source={require('../../assets/USHA KANOONGO.png')} style = {styles.photo}></Image>
          <Text  style = {styles.DirName} >Dr.Usha Kannongo</Text>
        </View>
      </View>
      <View style = {styles.ExtraMessage}>
        <Text style = {[styles.msg,{marginTop : 0}]}>help you navigate your college campus and uncover the answers to possibly all the questions you might have regarding your day-to-day life on campus. The app provides a complete set of information about Institute resources, academic programs, campus life, rules of behavior and the plethora of co-curricular activities that are an integral part of your identity as an LNMIIT student.I hope this user-friendly app proves to be a one-stop solution for your information needs.Best wishes!</Text>
      </View>
    </View>
  )
}

export default AboutUs

const styles = StyleSheet.create({
    container: { 
        position : 'absolute',
        width: 360,
        backgroundColor: '#3E3A66',
        alignItems : 'center',
        alignSelf : 'stretch'
      },

      
      heading : {
        marginTop : 21,
        fontSize : 21,
        lineHeight : 26,
        fontWeight : 400,
        color : "#FFFFFF"
      },

      image : {
        marginTop : 26,
        width : 338,
        height : 86,
        borderRadius : 5,
        shadowOffset: {width: -2, height: 4},  
        shadowColor: '#171717',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,
      },

      headingText : {
        color : "#FFFFFF",
        fontSize : 15,
        lineHeight : 16,
        // marginTop : 2,
        marginLeft : 20,
        fontWeight : 500
      },

      logo : {
        position : 'absolute',
        top : 118.21,
        left: 23.33,
        height : 67.79,
        width : 67.79,
        backgroundColor : "#FFFFFF",
        borderRadius : 100
      },

      content : {
        marginTop : 25,
        width : 327
      },

      text : {
        color : "#FFFFFF",
        fontSize : 10,
        lineHeight : 12,
        textAlign : 'justify',
        fontWeight : 400
      },

      CoordinatorHeading : {
        fontSize : 15,
        lineHeight : 18.15,
        color : "#FFFFFF",
        textAlign : 'center',
        fontWeight : 700,
        marginTop : 20
      },

      cardBox : {
        width : 330,
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-evenly',
        alignItems : 'center',
        marginTop : 15
      },

      directorContainer : {
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        marginTop : 40,
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
        width : 99,
        borderRadius : 100
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
        // marginLeft : 15,
        marginBottom : 20
      }
  
})