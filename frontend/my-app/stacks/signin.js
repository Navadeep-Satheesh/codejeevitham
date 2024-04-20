import {View , StyleSheet, TextInput, Pressable , Text} from 'react-native'
import React  from 'react';

export default function Signin() {

    const [text, onChangeText] = React.useState('Useless Text');

  return (
    <View style= {styles.container}>

        <Text style = {styles.heading}>SIGN IN</Text>
        <TextInput style= {styles.UserNameInput} />
        <TextInput style={styles.UserNameInput}/>
        <Pressable style={styles.button}><Text style={styles.buttonText}>SIGN IN</Text></Pressable>
      
    </View>
  )
}

const styles = StyleSheet.create({

    heading:{
        color: '#588dff',
        fontSize:20
    },

    container:{

        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'

    },

    UserNameInput:{

        borderWidth:1,
        borderStyle: 'solid',
        borderColor: 'rgb(88, 104, 255)',
        width: '60%',
        margin: 10,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius:5,
        fontSize: 26
        

    },
    button:{
        backgroundColor: '#588dff',
        width: "40%",
        height: 40,
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
      
    },
    buttonText: {
        color: 'white',
        
    }
})
