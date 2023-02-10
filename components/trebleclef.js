import React from 'react';
import { useState, useEffect } from "react";
import { Image, View, Pressable, StyleSheet, Text } from 'react-native';

export default function RadioButton(props) {
  console.log(props)
    return (
    <View style={styles.container}>
      <View style={styles.line }></View>
      <View style={styles.line }></View>
      <View style={styles.line }></View>
      <View style={styles.line }></View>
      <View style={styles.line }></View>
      <Image
        source={require("../img/clef.png" )}
        style={styles.clef}
      />
      <Image
        source={require("../img/note.png" )}
        style={[styles.note, styles.noteVar(props.yPos)]}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container:{
    margin:25,
    width:"100%"
  },
  stave:{
    height:100,
    width:100,
    backgroundColor:"red"
  },
  line:{
    borderBottomColor: 'black',
   borderBottomWidth: StyleSheet.hairlineWidth,
   width:"90%",
   margin:10
 },
 clef:{
   height:144,
   width:51,
   position:"absolute",
   bottom:-20,
   left:10
 },
 note:{
   width:18,
   height:15,
   left:"50%",
   position: "absolute",

 },
 noteVar:yPos => ({
    bottom: yPos,
})
});
