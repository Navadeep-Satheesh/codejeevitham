import { View , Text , Button , StyleSheet, Pressable ,Image} from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
// import { ContinousBaseGesture } from "react-native-gesture-handler/lib/typescript/handlers/gestures/gesture";
// import MaterialIcons from '@react-native-vector-icons/material-icons';

import micLogo from "../res/icons/mic_logo1.png"

function Home({navigation}){
    return(
        <View style={styles.container}>
          

            <Pressable 
                onPress={()=>alert('clicked')}
                style={styles.voiceButton}>

                <Image style = {styles.micImage}
                    source={micLogo}
                />

                
            </Pressable>
            {/* <Button title = "go to payment" onPress={()=>{ navigation.navigate("payment") }} /> */}
            
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({

    container:{

        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'

    },

    micImage : {

        height: 70

    },

    voiceButton:{
        backgroundColor: '#588dff',

        height: "80%",
        width: "80%",
        borderRadius : 20,
        margin:10,
        alignItems: 'center',
        justifyContent : 'center'
    }
  });
  