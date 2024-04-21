import { View, StyleSheet, TextInput, Pressable, Text } from 'react-native'
import React from 'react';
import { AsyncStorage } from 'react-native';
import {IP} from "@env"

export default function Signin({navigation}) { 

    const [text, onChangeText] = React.useState('Useless Text');

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('')

    async function setData(key, value) {
        try {

            await AsyncStorage.setItem(key, value)
        } catch {
            console.log("error");
        }
    }

    function login() {
        console.log("sending request");
        fetch(`${IP}/sign_in`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email': email,
                'password': password
            })
        }
        ).then((response) => {
            console.log(response.status)
            setData('signed_in', "1");
            navigation.navigate("home");

        })
          

    }

    return (
        <View style={styles.container}>

            <Text style={styles.heading}>SIGN IN</Text>
            <TextInput style={styles.UserNameInput} id='email' onChangeText={(value) => {
                console.log(value);
                setEmail(value)
            }} />
            <TextInput style={styles.UserNameInput} id='password' onChangeText={(value) => setPassword(value)} />
            <Pressable style={styles.button} onPress={login}><Text style={styles.buttonText}>SIGN IN</Text></Pressable>

        </View>
    )
}

const styles = StyleSheet.create({

    heading: {
        color: '#588dff',
        fontSize: 20
    },

    container: {

        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'

    },

    UserNameInput: {

        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgb(88, 104, 255)',
        width: '60%',
        margin: 10,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 5,
        fontSize: 26


    },
    button: {
        backgroundColor: '#588dff',
        width: "40%",
        height: 40,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10

    },
    buttonText: {
        color: 'white',

    }
})
