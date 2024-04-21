import React, { useEffect } from 'react'

import { View , StyleSheet , Pressable, Text } from 'react-native'

import * as LocalAuthentication from 'expo-local-authentication';


export default function AmountScreen({navigation}) {



    async function submitPayment(){

        const result = await LocalAuthentication.authenticateAsync();
        navigation.navigate("upiscreen");
        

    }

    const [ amount , setAmount ] =  React.useState(200);

  return (
    <View style = {styles.container} > 


        <Pressable style = {styles.button} onPress={submitPayment}><Text style= {styles.buttonText}>PAY</Text></Pressable>
      
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        height: "100%",
        width: "100%",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent :'center',
        // backgroundColor : 'red'
    },

    button: {
        backgroundColor : '#3560ff',
        color : 'white',
        width: 110,
        height: 50,
        flexDirection : 'column',
        alignItems :'center',
        justifyContent :'center',
        borderRadius : 10
        
    },

    buttonText:{
        color :"white"
    }


})
