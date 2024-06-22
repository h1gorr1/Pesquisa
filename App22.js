import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,image, } from 'react-native'; //stylesheet = estilização
import { TouchableOpacity } from 'react-native-web';

export default function App() {
  return (
    <View style ={styles.padreRosalvino}>
      <Image source={require('./imgs/icon.png')} style={styles.img}/>
      <Text>texto do meu app!</Text>

      <Text style={styles.textLogin}>Login</Text>

      <TextInput placeholder='Digite seu email' style={styles.input}/>

      <TouchableOpacity>
<Text>ENTRAR</Text>
      </TouchableOpacity>

      <TextInput placeholder='Digite sua senha' style={styles.img}/>
      <StatusBar style="auto" /> //barra de status superior do celular,retira=lo não tera peso nemhum

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Entrar</Text>

      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.padreRosalvino.create({
  padreRosalvino: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textTitulo: {
    color: 'white',
  },

  img: {
width: '150',
height: '150',

  },

input: {
width: '90%',
padding: 10,
backgroundColor: 'd3d3d3',
borderRadius: 10,
margin: 2,
  },

  btn{
    width: '50%',
backgroundColor: 'blue',
padding: 7,
borderRadius:5,
margin: 10,
alignItems: center,
justifyContent:center,
  },
}),
