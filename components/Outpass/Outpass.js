import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';
import React from 'react';
import OutpassHeader from './OutpassHeader';

const OutPass = ({navigation}) => {

    const[val,setVal] = React.useState('');
    const[val2,setVal2] = React.useState('');
    const[val3,setVal3] = React.useState('');
    const[val4,setVal4] = React.useState('');
    const[val5,setVal5] = React.useState('');
    const[val6,setVal6] = React.useState('');
    const[val7,setVal7] = React.useState('');

    
  return (
    <View>
      <View style={styles.container}>
      <OutpassHeader />
      <View style = {styles.userContainer}>
        <View style = {styles.row}>
          <Text style = {styles.userText}>Name :</Text>
          <View style = {styles.input}>
          <TextInput  value = {val} onChangeText = {setVal} style = {[styles.dateText , {textAlign : 'center' , backgroundColor : 
'#3E3A66', width : 150, borderRadius : 5}]} ></TextInput>
          </View>
        </View>
        <View style = {styles.row}>
          <Text style = {styles.userText}>Hostel :</Text>
          
          <View style = {styles.input}>
          <TextInput  value = {val5} onChangeText = {setVal5} style = {[styles.dateText , {textAlign : 'center' , backgroundColor : 
'#3E3A66', width : 150, borderRadius : 5}]} ></TextInput>
          </View>
          
        </View>
        <View style = {styles.row}>
          <Text style = {styles.userText}>Room no. :</Text>
          <View style = {styles.input}>
            <TextInput  value = {val2} onChangeText = {setVal2} style = {[styles.dateText , {textAlign : 'center' , backgroundColor : 
'#3E3A66', width : 150, borderRadius : 5}]} ></TextInput>
          </View>
        </View>
        <View style = {styles.row}>
          <Text style = {styles.userText}>Purpose :</Text>
          <View style = {styles.input}>
          <TextInput  value = {val3} onChangeText = {setVal3} style = {[styles.dateText , {textAlign : 'center' , backgroundColor : 
'#3E3A66', width : 150, borderRadius : 5}]} ></TextInput>
          </View>
        </View>
        <View style = {styles.row}>
          <Text style = {styles.userText}>Transport :</Text>
          <View style = {styles.input}>
          <TextInput  value = {val4} onChangeText = {setVal4} style = {[styles.dateText , {textAlign : 'center' , backgroundColor : 
'#3E3A66', width : 150, borderRadius : 5}]} ></TextInput>
          </View>
        </View>
        <View style = {styles.row}>
          <Text style = {styles.userText}>From :</Text>
          <View style = {styles.input}>
          <TextInput  value = {val6} onChangeText = {setVal6} style = {[styles.dateText , {textAlign : 'center' , backgroundColor : 
'#3E3A66', width : 150, borderRadius : 5}]} ></TextInput>
          </View>
        </View>
        <View style = {styles.row}>
          <Text style = {styles.userText}>To :</Text>
          <View style = {styles.input}>
          <TextInput  value = {val7} onChangeText = {setVal7} style = {[styles.dateText , {textAlign : 'center' , backgroundColor : 
'#3E3A66', width : 150, borderRadius : 5}]} ></TextInput>
          </View> 
        </View>
        <TouchableOpacity style = {styles.resetButton} onPress={()=> {setVal(''),setVal2(''),setVal3(''),setVal4(''),setVal5(''),setVal6(''),setVal7('')}}>
          <Text style = {styles.resetText}>Reset</Text>
        </TouchableOpacity>
      </View>
      
        <TouchableOpacity style = {styles.buttonContainer} onPress={() => navigation.navigate('Generated')}>
          <Text style = {styles.buttonText}>Create Outpass</Text>        
        </TouchableOpacity>
        <TouchableOpacity style = {[styles.buttonContainer, {marginTop : 13,backgroundColor : "#C3B0FF"}]} onPress={() => navigation.navigate('PO')}>
          <Text style = {[styles.buttonText,{color : '#551FFF'}]}>Previous Outpass</Text>        
        </TouchableOpacity>
      

    </View>
    </View>
  )
}

export default OutPass

const styles = StyleSheet.create({
    container: { 
      position : 'relative',
      width: 360,
      height: 778,
      backgroundColor: '#3E3A66', 
    },
  
    
    dateText: {
      color : '#FFFFFF',
      fontWeight : '300',
      fontSize : 16,
      fontFamily : 'Poppins',
      fontStyle : 'normal',
      lineHeight : 24,
    },
  
    
    userContainer : {
      position: 'absolute',
      width: 288,
      height: 427,
      left: 36,
      top: 138,
      backgroundColor : '#5D5986',
      borderRadius : 10,
    },
  
    row : {
      marginLeft : 19,
      marginTop : 29,
      display : 'flex',
      flexDirection : 'row',
    }, 
  
    userText : {
      
        color : '#FFFFFF',
        fontWeight : '500',
        fontSize : 16,
        fontFamily : 'Poppins',
        fontStyle : 'normal',
        lineHeight : 24,
      
    },
  
    input : {
      position : 'absolute',
      left : 100,
      justifyContent : 'center',
      textAlign : 'center',
    },
  
    buttonContainer : {
      backgroundColor : "#FFCBA6",
      alignContent : "center",
      width : 289,
      height : 39,
      top : 592,
      left : 35,
      borderRadius : 10,
      alignItems : 'center',
      justifyContent : "center"
    },
  
    buttonText : {
      color : '#FF6A00',
      fontSize : 16,
      lineHeight : 16,
      fontWeight : 500
    },
  
    resetButton : {
      top : 21,
      width : 57,
      height : 30,
      left : 223,
      backgroundColor : "#3E3A66",
      alignItems : "center",
      justifyContent : "center",
      borderRadius : 5,
    },
  
    resetText : {
      fontSize : 12,
      fontWeight : 400,
      color  : "#FFFFFF",
      lineHeight : 12,
    }
  
  });
  