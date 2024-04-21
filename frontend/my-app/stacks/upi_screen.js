// import { BottomSheetAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets'
import { View, StyleSheet, Pressable , Text ,Image , TextInput} from 'react-native'
import React from 'react'

import UpiImage from "../res/images/upi_image.png"
import Tick from "../res/images/tick.png"
import BackSpace from "../res/images/backspace.png"
// import { TextInput } from 'react-native-gesture-handler'

export default function Upi_screen() {

    const [ pin , setPin] = React.useState("");

    function DeleteChar(){
        console.log("here");
        // setPin("1")
        if(pin.length > 0){
            setPin(pin.substring(0 , pin.length -1));
            // setPin("1")
        }
    }

    function submitData(){

    }

    return (
        <View style={styles.container}>


            <View style = {styles.top}>

                <Text style = {styles.headingTop}  >SBI BANK</Text>

                <Image style = {styles.upiImage} source={UpiImage} />

            </View>


            <View style = {styles.pinArea}>

                <TextInput style={styles.input} value = {pin} maxLength={6} editable={false} />

                <View style = {styles.inputBottomBorder}>

                    <View style= {styles.inputBottomBorderCell}></View>
                    <View style= {styles.inputBottomBorderCell}></View>
                    <View style= {styles.inputBottomBorderCell}></View>
                    <View style= {styles.inputBottomBorderCell}></View>
                    <View style= {styles.inputBottomBorderCell}></View>
                    <View style= {styles.inputBottomBorderCell}></View>

                </View>



            </View>


            <View style={styles.keypad}>

                <View style={styles.row}>

                    <Pressable onPress={()=>{setPin(pin+"1")}} style= {styles.button} ><Text style = {styles.buttonText}>1</Text></Pressable>
                    <Pressable onPress={()=>{setPin(pin+"2")}} style= {styles.button} ><Text style = {styles.buttonText}>2</Text></Pressable>
                    <Pressable onPress={()=>{setPin(pin+"3")}} style= {styles.button} ><Text style = {styles.buttonText}>3</Text></Pressable>

                </View>

                <View style={styles.row}>
                    <Pressable onPress={()=>{setPin(pin+"4")}} style= {styles.button} ><Text style = {styles.buttonText}>4</Text></Pressable>
                    <Pressable onPress={()=>{setPin(pin+"5")}} style= {styles.button} ><Text style = {styles.buttonText}>5</Text></Pressable>
                    <Pressable onPress={()=>{setPin(pin+"6")}} style= {styles.button} ><Text style = {styles.buttonText}>6</Text></Pressable>
                </View>

                <View style={styles.row}>
                    <Pressable onPress={()=>{setPin(pin+"7")}} style= {styles.button} ><Text style = {styles.buttonText}>7</Text></Pressable>
                    <Pressable onPress={()=>{setPin(pin+"8")}} style= {styles.button} ><Text style = {styles.buttonText}>8</Text></Pressable>
                    <Pressable onPress={()=>{setPin(pin+"9")}} style= {styles.button} ><Text style = {styles.buttonText}>9</Text></Pressable>
                </View>

                <View style={styles.row}>
                    <Pressable  onPress = {()=>{DeleteChar()}}><Image source={BackSpace} style = {styles.sideButton} /></Pressable>
                    <Pressable onPress={()=>{setPin(pin+"0")}} style= {styles.button} ><Text style = {styles.buttonText}>0</Text></Pressable>
                    <Pressable onPress={()=>{submitData()}}><Image source = {Tick} style = {styles.sideButton}/></Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        height: "100%",
        // justifyContent: 'space-around'

    },
    keypad:{

    },
    row:{
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#e4e4e4',
        justifyContent : 'space-around',
        alignItems:'center'
        // position :'absolute',
        // bottom: 0,
        // left: 0
    },
    button: {

        width : '30%',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent :'center',
        height: 70,
       

    },
    buttonText: {
        fontSize: 24,
        color : '#00084b'
    },

    upiImage:{
        height: "30%",
        width: "30%",
        marginRight: 20

        // aspectRatio:  "2/3"
    }
    ,

    top: {
        height: "18%",
        flexDirection: 'row',
        paddingTop: 30,
        backgroundColor: 'rgb(235, 235, 235)',
        alignItems: 'center',
        justifyContent: 'space-between',
        
    }
    ,
    headingTop:{
        color: "black",
        fontSize: 27,
        fontWeight: 'bold',
        marginLeft: 10
    }

    ,pinArea:{
        height: "47%",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent :'center'
    },
    input: {
        // backgroundColor :'red',
        
        // textAlign: 'center',
        fontSize: 25,
        height: 55,
        width: 200,
        letterSpacing: 20,
        color: "black"

    }   ,
    inputBottomBorder:{
        // backgroundColor : "blue",
        width: 200,
        // width: 20,
        height: 10,
        flexDirection : "row",
        justifyContent: "space-around",
        alignItems:"center"

    },

    inputBottomBorderCell: {

        borderColor: "black",
        borderStyle : "solid",
        borderTopWidth : 1,
        height: 10,
        width: 20,
        margin: 10
        // backgroundColor :'gree'

    },

    sideButton: {

        width: 38,
        height: 38,
        // backgroundColor: 'red'
    }
    


})
