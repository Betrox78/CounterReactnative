 import React, {useState} from 'react';
 import {View,Text, ImageBackground,Image,StyleSheet } from 'react-native';
import Fab from '../components/buttonfab'

 const image = { require: "../images/circulofondo.svg" }
 const Counter = () => {
   const [count, setcount] = useState(0);
   return (
    <View style={styles.container}>
        <View style={styles.container2}>
          <ImageBackground source={require('../images/circulofondo.png')} resizeMode="contain" style={styles.image}>
            <View style={styles.containertext}>
                <View style={styles.containertext2}>
                  <Text style={styles.Title}>Contador</Text>
                  <Text style={styles.contador}>{count}</Text>
                </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.separador}></View>
        <View style={{
            width: '100%',
            alignItems: 'center',
            top: -50
        }}>
          <Text style={{
            fontSize: 33,
            fontWeight: 'bold'
          }}>Acciones</Text>
        </View>
        <Fab 
          title="-1"
          onPress={ () => setcount(count  - 1) }
          position= 'lf'
        ></Fab>
          <Fab 
          title="+1"
          onPress={ () => setcount(count  + 1) }
          position= 'rg'
        ></Fab>
  </View>
   );
 };

 const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    backgroundColor: '#151B4E'
  },
  image: {
    justifyContent: "center",
    height: 500
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    // backgroundColor: "#151B4E"
  },
  containertext:{
    display: 'flex',
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containertext2:{
    display: 'flex',
    backgroundColor: '#ffffff85',
    width: 150,
    height: 150,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
   
  },
  separador:{
    width: '100%',
    backgroundColor: '#fff',
    top: -50, 
    borderTopStartRadius: 100,
    height: 50
  },
  Title:{
    fontWeight: 'bold',
    fontSize: 25
  },
  contador:{
    top: 10,
    fontWeight: 'bold',
    fontSize: 22
  }
});

 export default Counter;
