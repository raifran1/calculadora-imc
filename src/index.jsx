import { StatusBar } from 'expo-status-bar';
import {Button, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";



export default function IndexAPP() {
  const [peso, setPeso] = useState(null);
  const [altura, setAltura] = useState(null);
  const [imcResultado, setImcResultado] = useState(null);

  const calculaIMC = () => {
    // IMC = Peso ÷ (Altura × Altura)
    let imc;
    imc = peso / (altura * altura);
    console.log(imc);
    setImcResultado(imc);
  };

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>Calculadora de IMC</Text>
        </View>
        <View style={styles.container_view}>
            <TextInput
              style={styles.text_input}
              placeholder='Informe seu peso (KG)'
              value={peso}
              onChangeText={peso => {
                setPeso(parseFloat(peso));
              }}
            />

            <TextInput
              style={styles.text_input}
              placeholder='Informe sua altura (M e CM)'
              value={altura}
              onChangeText={altura => {
                setAltura(parseFloat(altura.replace(',', '.')))
              }}
            />

          <Button style={styles.button_calc} title='Calcular IMC' onPress={() => calculaIMC()} />

          <Text>{imcResultado}</Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  header: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 25,
  },
  title: {
    fontSize: 20,
  },

  container_view: {
    flex: 3,
    padding: 15,
    justifyContent: 'flex-start',
  },

  text_input: {
    borderWidth: 1,
    padding: 2,
    marginTop: 10,
  },

  button_calc: {
    marginTop: 150,
  },
});
