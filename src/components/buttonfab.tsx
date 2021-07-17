import React, {useState} from 'react';
import {View,Text, ImageBackground,Image,StyleSheet, TouchableNativeFeedback } from 'react-native';


interface Props {
    title: string,
    onPress: () => void,
    position: 'lf' | 'rg'
    
}


const Fab = ( {title, onPress, position = 'lf'}: Props) => {
  const [count, setcount] = useState(0);

  return (
      <View 
      style={
       
        ( position === 'lf') ? styles.containerfablf : styles.containerfabrg 
     
 }
      >
   <TouchableNativeFeedback 
   background={ TouchableNativeFeedback.Ripple('black', true, 50)}
        onPress={ onPress }
   >
        <View>
            <Text style={styles.title}>{title}</Text>
        </View>
 </TouchableNativeFeedback>
 </View>
  );
};

const styles = StyleSheet.create({
    containerfablf: {
        position: 'absolute',
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        left: 20,
        bottom: 70
    },
    containerfabrg: {
        position: 'absolute',
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        right: 20,
        bottom: 70
    },
        title: {
            fontSize: 30,
            top: 10,
            textAlign: 'center',
            fontWeight: 'bold'        
        }
});

export default Fab;
