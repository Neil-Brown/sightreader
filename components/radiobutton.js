import React from 'react';
import { useState, useEffect } from "react";
import { Image, View, Pressable, StyleSheet, Text } from 'react-native';


export default function RadioButton({ data, onSelect, option, fontSize=20, setOption }) {
	const selectHandler = (value) => {
		onSelect(value);
		setOption(value)
	}
	function renderImage({item}) {
    if (item.source) {
        return <Image source={item.source} style={styles.ImageIconStyle}/>;
    }
     return <Text key={item.id} style={{color:"#000000", fontSize:fontSize}}> {item.value}</Text>;
	 }

    return (
	  <View style={{flexDirection: "row"} }>
	    {data.map((item) => {
	      return (
	        <Pressable key={item.value}
                style={
                    item.value === option ? styles.selected : styles.unselected
                }
                onPress={() => selectHandler(item.value)}>
								{renderImage({item})}
	        </Pressable>
	      );
	    })}
	  </View>
  );
}

const styles = StyleSheet.create({
  unselected: {
    backgroundColor: "#42B2A6",
  	margin:5,
		borderRadius:10,
		flex:1,
		justifyContent:"center",
		alignItems:"center",
		minHeight:50,
		fontSize: 20
  },
  selected: {
    backgroundColor: '#009688',
    margin: 6,
    borderRadius: 10,
		flex:1,
		alignItems:"center",
		justifyContent:"center",
		padding:2,
		fontSize:70,
		minHeight:30,
		maxHeight:50


  },
	ImageIconStyle:{
		height:20,
		width:7
	}
});
