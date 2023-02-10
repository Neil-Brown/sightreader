import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {useState, useEffect} from "react"

import RadioButton from "./components/radiobutton"
import TrebleClef from "./components/trebleclef"
import Button from "./components/button"

export default function App() {
  const [option, setOption] = useState("Foo")
  const [yPos, setYPos] = useState(43)

  const data = [
            {value: 'Treble' },
            {value:"Bass"},
            {value:"Grand"}
          ];

  useEffect(()=>{
    console.log(option)
}, [option])

function openSettings(){
  console.log("pressed")
}

function foo(){
  console.log("Submit")
  setYPos(yPos+10)
}
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.settings}>
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => openSettings()}>
          <Image source={require("./img/settings.png")} style={styles.settingsIcon}/>
        </TouchableOpacity>
      <View style={styles.scoreScreen}>
        <Text style={styles.score}>Score</Text>
        <Text style={styles.count}>0 / 0</Text>
      </View>
      </View>
      <RadioButton  data={data} option={option} setOption={setOption} onSelect={(value) => setOption(value)}/>
      <TrebleClef yPos={yPos}/>
      <View style={styles.controls}>
        <View style={styles.type}>
        <RadioButton  data={[{source:require("./img/sharp.png")}, {source:require("./img/flat.png")}]} option={option} setOption={setOption} onSelect={(value) => setOption(value)}/>
          <View style={styles.noteButtons}>
            <Button title={"C"}/>
            <Button title={"D"}/>
            <Button title={"E"}/>
            <Button title={"F"}/>
            <Button title={"G"}/>
          </View>
        </View>
        <Button title={"Submit"} onPress={foo}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding:10,
  },
  noteButtons:{
    flexDirection:"row",
    justifyContent:"space-around",
    width:"100%"
  },
  settings:{
    alignItems:"flex-end",
    width:"100%",
    padding:20
  },
  settingsButton:{
    padding:5,
    borderColor:"black",
    borderWidth:1,
    borderRadius:10
  },
  settingsIcon:{
    height:30,
    width:30,
  },
  scoreScreen:{
    width:"100%",
    alignItems:"center"
  },
  score:{
    fontSize:20
  }
});
