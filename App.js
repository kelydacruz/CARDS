import { use, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native';


export default function App() {
 const[numero, setNumero] = useState(0)


 const contador = (x) => {
   if(numero == x-1){
     setNumero(x)
     if(numero == 7){
       alert('Você venceu!')
       setNumero(0)
     }
   }else{
     setNumero(0)
     alert('Número errado, tente novamente!')
   }
 }




 return (
  <ImageBackground
   resizeMode='stretch'
   source={require('./assets/a.jpg')}
   style={styles.container}
   >
     <TouchableOpacity style={styles.box1} onPress={() =>contador(1)}>
       <Text style={styles.texto}>Box 2</Text>
     </TouchableOpacity>


     <TouchableOpacity style={styles.box2} onPress={() => contador(2)}>
       <Text style={styles.texto}>Box 2</Text>
     </TouchableOpacity>


     <TouchableOpacity style={styles.box3} onPress={() => contador(3)}>
       <Text style={styles.texto}>Box 3</Text>
     </TouchableOpacity>


     <TouchableOpacity style={styles.box1} onPress={() => contador(4)}>
       <Text style={styles.texto}>Box 4</Text>
     </TouchableOpacity>


     <TouchableOpacity style={styles.box2} onPress={() => contador(5)}>
       <Text style={styles.texto}>Box 5</Text>
     </TouchableOpacity>


     <TouchableOpacity style={styles.box3} onPress={() => contador(6)}>
       <Text style={styles.texto}>Box 6</Text>
     </TouchableOpacity>


     <TouchableOpacity style={styles.box1} onPress={() => contador(7)}>
       <Text style={styles.texto}>Box 7</Text>
     </TouchableOpacity>


     <TouchableOpacity style={styles.box2} onPress={() => contador(8)}>
       <Text style={styles.texto}>Box 8</Text>
     </TouchableOpacity>
   </ImageBackground>
 );
}


const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#4fa0e2ff',
   alignItems: 'center', //horizontal
   justifyContent: 'center', //vertical
   flexDirection: 'column',
   flexWrap: 'wrap', //quebra em
   alignContent: 'space-evenly',
   rowGap: 50,
   //columnGap: 30
 },
 box1: {
   //flex: 2,
   backgroundColor: '#155e88ff',
   width: 150,
   height:150,
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: 30
 },
 box2: {
   //flex: 1,
   backgroundColor: '#d8e1e2ff',
   width: 150,
   height:150,
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: 30
 },
 box3: {
   //flex: 2,
   backgroundColor: '#202424ff',
   width: 150,
   height: 150,
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: 30
 },
 texto: {
   color: '#ffffff',
 }
});

