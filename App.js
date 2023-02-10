import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useState, useEffect} from "react"

import RadioButton from "./components/radiobutton"
import TrebleClef from "./components/trebleclef"
import Button from "./components/button"

export default function App() {
  const [option, setOption] = useState("Foo")
  const data = [
            {value: 'Treble' },
            {value:"Bass"},
            {value:"Grand"}
          ];

  useEffect(()=>{
    console.log(option)
}, [option])
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <RadioButton  data={data} option={option} setOption={setOption} onSelect={(value) => setOption(value)}/>
      <TrebleClef/>
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
        <Button title={"Submit"}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10
  },
  noteButtons:{
    flexDirection:"row",
    justifyContent:"space-around",
    width:"100%"
  },
  type:{

  }
});
