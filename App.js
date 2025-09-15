import { StyleSheet, Text, TouchableOpacity, Image, ImageBackground, Button, Alert, Linking, View } from 'react-native';

export default function App() {
  return (
    <ImageBackground 
      source={require('./assets/a.jpg')} 
      style={styles.container}
    >
      {/* Título */}
      <Text style={styles.titulo}>Sistema Solar</Text>

      {/* Grade com os planetas */}
      <View style={styles.grid}>
        {/* Mercúrio */}
        <View style={styles.card}>
          <TouchableOpacity style={styles.box} onPress={() => Alert.alert("Mercúrio", "O menor planeta e o mais próximo do Sol.")}>
            <Image source={require('./assets/mercurio.png')} style={styles.img}/>
            <Text style={styles.texto}>Mercúrio</Text>
          </TouchableOpacity>
          <Button title="Saber mais" onPress={() => Linking.openURL("https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)")} />
        </View>

        {/* Vênus */}
        <View style={styles.card}>
          <TouchableOpacity style={styles.box} onPress={() => Alert.alert("Vênus", "Planeta mais quente, com atmosfera densa.")}>
            <Image source={require('./assets/venus.png')} style={styles.img}/>
            <Text style={styles.texto}>Vênus</Text>
          </TouchableOpacity>
          <Button title="Saber mais" onPress={() => Linking.openURL("https://pt.wikipedia.org/wiki/V%C3%A9nus_(planeta)")} />
        </View>

        {/* Terra */}
        <View style={styles.card}>
          <TouchableOpacity style={styles.box} onPress={() => Alert.alert("Terra", "Nosso planeta, único com vida conhecida.")}>
            <Image source={require('./assets/terra.png')} style={styles.img}/>
            <Text style={styles.texto}>Terra</Text>
          </TouchableOpacity>
          <Button title="Saber mais" onPress={() => Linking.openURL("https://pt.wikipedia.org/wiki/Terra")} />
        </View>

        {/* Marte */}
        <View style={styles.card}>
          <TouchableOpacity style={styles.box} onPress={() => Alert.alert("Marte", "Conhecido como planeta vermelho.")}>
            <Image source={require('./assets/marte.png')} style={styles.img}/>
            <Text style={styles.texto}>Marte</Text>
          </TouchableOpacity>
          <Button title="Saber mais" onPress={() => Linking.openURL("https://pt.wikipedia.org/wiki/Marte_(planeta)")} />
        </View>

        {/* Júpiter */}
        <View style={styles.card}>
          <TouchableOpacity style={styles.box} onPress={() => Alert.alert("Júpiter", "O maior planeta do sistema solar.")}>
            <Image source={require('./assets/jupiter.png')} style={styles.img}/>
            <Text style={styles.texto}>Júpiter</Text>
          </TouchableOpacity>
          <Button title="Saber mais" onPress={() => Linking.openURL("https://pt.wikipedia.org/wiki/J%C3%BApiter_(planeta)")} />
        </View>

        {/* Saturno */}
        <View style={styles.card}>
          <TouchableOpacity style={styles.box} onPress={() => Alert.alert("Saturno", "Famoso por seus anéis brilhantes.")}>
            <Image source={require('./assets/saturno.png')} style={styles.img}/>
            <Text style={styles.texto}>Saturno</Text>
          </TouchableOpacity>
          <Button title="Saber mais" onPress={() => Linking.openURL("https://pt.wikipedia.org/wiki/Saturno_(planeta)")} />
        </View>

        {/* Urano */}
        <View style={styles.card}>
          <TouchableOpacity style={styles.box} onPress={() => Alert.alert("Urano", "Gigante de gelo que gira de lado.")}>
            <Image source={require('./assets/urano.png')} style={styles.img}/>
            <Text style={styles.texto}>Urano</Text>
          </TouchableOpacity>
          <Button title="Saber mais" onPress={() => Linking.openURL("https://pt.wikipedia.org/wiki/Urano_(planeta)")} />
        </View>

        {/* Netuno */}
        <View style={styles.card}>
          <TouchableOpacity style={styles.box} onPress={() => Alert.alert("Netuno", "O planeta mais distante do Sol.")}>
            <Image source={require('./assets/netuno.png')} style={styles.img}/>
            <Text style={styles.texto}>Netuno</Text>
          </TouchableOpacity>
          <Button title="Saber mais" onPress={() => Linking.openURL("https://pt.wikipedia.org/wiki/Netuno_(planeta)")} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001d3d',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',    // permite quebrar em linhas
    justifyContent: 'center',
  },
  card: {
    margin: 5,
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#57a0ff84',
    width: 100,   // menor largura
    height: 120,  // menor altura
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 12,
    padding: 6,
    marginBottom: 4,
  },
  img: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  texto: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
  },
});
