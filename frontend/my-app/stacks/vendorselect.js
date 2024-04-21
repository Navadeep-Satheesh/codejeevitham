import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Dimensions, Vibration } from 'react-native';
// import SoundPlayer from 'react-native-sound-player'


const data = [
  'manga kada by aaswin',
  'thenga kada by renjith',
  'poo kada by adithyan',
  'thakali kada by navadeep',
  'pooti poe'
];

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const MARGIN = 20; // Margin width in pixels

export default function VendorSelection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onChange = (event) => {
    const slideWidth = event.nativeEvent.layoutMeasurement.width;
    const offset = event.nativeEvent.contentOffset.x;
    const index = Math.floor(offset / slideWidth);
    setActiveIndex(index);
    // Vibrate when scrolled
    Vibration.vibrate();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onChange}
        style={styles.scrollView}>
        {data.map((item, index) => (
          <View key={index} style={[styles.slide, { width: WIDTH - 2 * MARGIN }]}>
            <Text style={styles.text}>{item.split(" by ")[0]}</Text>
            <Text style={styles.text2}>{"by " +item.split(" by ")[1] }</Text>
          </View>
        ))}
      </ScrollView>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:'25%',
    backgroundColor:'white'
  },
  scrollView: {
    width: WIDTH,
    height: HEIGHT * 0.8,
    
  },
  slide: {
    marginHorizontal: MARGIN,
    height: HEIGHT * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:20,
   
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor:'#588dff'
  },
  text: {
   
    fontSize: 30,
    color:'#ffffff'
  },
  text2:{
    fontSize: 20,
    color:'#ffffff'
  },
  currentIndex: {
    textAlign: 'center',
    fontSize: 25,
    padding: 20,
    backgroundColor:'blue',
  }
});