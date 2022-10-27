import React from 'react';
import {TextInput } from "react-native";
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

import { SafeAreaView } from 'react-navigation';

const Dots = ({selected})=> {
let backgroundColor;

backgroundColor = selected ? '#A0CE4E': 'rgba(0, 0, 0, 0.3)';

return(
  
  <View
    style={{
  width:5,
  height:5,
  marginHorizontal: 3,
  borderRadius: 5,

    }}
  />
);
}

const Done = ({...props}) => {
  return(
  <TouchableOpacity style={{margin: 15}}
  {...props}
  >
  <Text style={{
  marginHorizontal: 3,
  color:'#FFFFFF',
  borderRadius: 5,

    }}>Done</Text></TouchableOpacity>
)}

const OnboardingScreen = ({setFirstLaunch}) =>{
    return(
      // <SafeAreaView style={{ backgroundColor:'blue'}}>

        <Onboarding style={styles.container}
       DoneButtonComponent={Done}
      DotComponent={Dots}
        onSkip={()=> setFirstLaunch(false)}
        onDone={()=> setFirstLaunch(false)}
        pages={[
            {
              backgroundColor: '#7b83eb',
              image: <Image   style={{height: '60%', width: '90%', resizeMode:'contain', marginBottom:-200,}} source={require('../image/testing.png')} />,
              title: <Text style={{fontWeight:'bold', textAlign:'center', color:'#A0CE4E', fontSize:19, margin:12,  marginTop: -70}}></Text>,
              // subtitle: (
              //   <View>
              //     <Text style={{fontWeight:'bold', textAlign:'center', color:'#A0CE4E', fontSize:19, margin:12,  marginTop: -70}}>Your Privacy is safe with us!
              //     Please enter your phone number.</Text>
              //     <TextInput placeholder='Phone number' style={{fontWeight:'bold', 
              //     textAlign:'center', 
              //     color:'#5059c9',
              //     height: 40,
              //     margin: 12,
              //     borderWidth: 2,
              //     borderRadius: 5,
              //     }
              //     }></TextInput>
              //   </View>
                
                

              // ),
              //'STEDI Balance will now send a text with a code',
            },
            {
                backgroundColor: '#ffbd4f',
                image: <Image style={{height: '60%', width: '80%', resizeMode:'contain', marginBottom:-100}} source={require('../image/yeah.png')} />,
                title: <Text style={{fontWeight:'bold', fontSize: 19, margin:15, textAlign:'center', color:'#A0CE4E', marginTop: -130 }}>Congratulations!</Text>,
                subtitle: 'You have created a profile with STEDI Balance',
              },
              {
                backgroundColor: '#242582',
                image: <Image style={{height: '70%', width:'90%',  resizeMode:'contain', marginTop:-100}} source={require('../image/refer.png')} />,
                title: <Text style={{fontWeight:'bold', textAlign:'center', fontSize: 19, margin:15, color:'#A0CE4E', marginTop:-160}}>Share STEDI Balance with you friends</Text>,
                subtitle: 'Share and invite your family and friends your progress with us',

              }

        ]}
        />
    );
};









export default OnboardingScreen;
const styles = StyleSheet.create({
    container:{
        flex:1, 
        alignItems:'center',
        justifyContent: 'center'
    },

    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    }
  
})