import { StyleSheet, View, Text, TouchableOpacity, Image, ImageBackground, Button, Linking } from 'react-native';


export default function App() {
  
  return (
    
    <ImageBackground
      resizeMode="stretch"
      source={require('./assets/a.jpg')}
      style={styles.container}
    >
      <Image source={require('./assets/t.png')} style={styles.imagemT} />
      <Text style={styles.subtitulo}>Clique nos planetas para saber uma curiosidade!</Text>

      <View style={styles.viewcontainer}>
      
      <TouchableOpacity style={styles.box} 
        onPress={() => alert("Mercúrio\nO menor planeta e o mais próximo do Sol.")}>
        <Image source={require('./assets/mercurio.png')} style={styles.imagem} />
        <Text style={styles.texto}>Mercúrio</Text>
        <TouchableOpacity
           style={styles.link}
           onPress={() => Linking.openURL("https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)")}
         >
           <Text style={styles.linkText}>Saber mais</Text>
         </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box} 
        onPress={() => alert("Vênus\nPlaneta mais quente, com atmosfera densa.")}>
        <Image source={require('./assets/venus.png')} style={styles.imagem} />
        <Text style={styles.texto}>Vênus</Text>
       <TouchableOpacity
           style={styles.link}
           onPress={() => Linking.openURL("https://pt.wikipedia.org/wiki/V%C3%A9nus_(planeta)")}
         >
           <Text style={styles.linkText}>Saber mais</Text>
         </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box} 
        onPress={() => alert("Terra\nNosso planeta, único com vida conhecida.")}>
        <Image source={require('./assets/terra.png')} style={styles.imagem} />
        <Text style={styles.texto}>Terra</Text>
        <TouchableOpacity
           style={styles.link}
           onPress={() => Linking.openURL("https://pt.wikipedia.org/wiki/Terra")}
         >
           <Text style={styles.linkText}>Saber mais</Text>
         </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box} 
        onPress={() => alert("Marte\nConhecido como planeta vermelho.")}>
        <Image source={require('./assets/marte.png')} style={styles.imagem} />
        <Text style={styles.texto}>Marte</Text>
       <TouchableOpacity
           style={styles.link}
           onPress={() => Linking.openURL("https://pt.wikipedia.org/wiki/Marte_(planeta)")}
         >
           <Text style={styles.linkText}>Saber mais</Text>
         </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box} 
        onPress={() => alert("Júpiter\nO maior planeta do sistema solar.")}>
        <Image source={require('./assets/jupiter.png')} style={styles.imagem} />
        <Text style={styles.texto}>Júpiter</Text>
         <TouchableOpacity
           style={styles.link}
           onPress={() => Linking.openURL("https://pt.wikipedia.org/wiki/J%C3%BApiter_(planeta)")}
         >
           <Text style={styles.linkText}>Saber mais</Text>
         </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box} 
        onPress={() => alert("Saturno\nFamoso por seus anéis brilhantes.")}>
        <Image source={require('./assets/saturno.png')} style={styles.imagem} />
        <Text style={styles.texto}>Saturno</Text>
          <TouchableOpacity
           style={styles.link}
           onPress={() => Linking.openURL("https://pt.wikipedia.org/wiki/Saturno_(planeta)")}
         >
           <Text style={styles.linkText}>Saber mais</Text>
         </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box} 
        onPress={() => alert("Urano\nGigante de gelo que gira de lado.")}>
        <Image source={require('./assets/urano.png')} style={styles.imagem} />
        <Text style={styles.texto}>Urano</Text>
        <TouchableOpacity
           style={styles.link}
           onPress={() => Linking.openURL("https://pt.wikipedia.org/wiki/Urano_(planeta)")}
         >
           <Text style={styles.linkText}>Saber mais</Text>
         </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box} 
        onPress={() => alert("Netuno\nO planeta mais distante do Sol.")}>
        <Image source={require('./assets/netuno.png')} style={styles.imagem} />
        <Text style={styles.texto}>Netuno</Text>
         <TouchableOpacity
           style={styles.link}
           onPress={() => Linking.openURL("https://pt.wikipedia.org/wiki/Netuno_(planeta)")}
         >
           <Text style={styles.linkText}>Saber mais</Text>
         </TouchableOpacity>
      </TouchableOpacity>

    </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'space-evenly',
    paddingTop: 50,
    color: '#8ff1f6ff'
  },
  viewcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignContent: 'space-evenly',
    rowGap: 30,
    width: "100%",

  },
  subtitulo: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold'
  },
  box: {
    backgroundColor: '#4b4e5284',
    width: 120,
    height: 120,
    alignItems: 'center',    
    justifyContent: 'center',
    borderRadius: 20,
  },
  link:{
   marginTop: 10,
   backgroundColor: '#38bdff68',
   paddingVertical: 3,
   paddingHorizontal: 8,
   borderRadius: 10,
  },
  linkText:{
    color: '#ede8e8ff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  texto: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
  },
  imagem: {
    width: 50,
    height: 50,
    marginBottom: 5,
    resizeMode: 'contain'
  },
  imagemT: {
    width: 190,
    height: 160,
  },
});
