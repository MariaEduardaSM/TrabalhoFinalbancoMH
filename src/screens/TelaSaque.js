import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import estilos from '../../Estilos/estilos';

const TelaSaque = ({ navigation }) => {
  const [valorSaque, setValorSaque] = useState('');
  const [mensagem, setMensagem] = useState('');
  const saldoDisponivel = 2500.75; 

  const handleSaque = () => {
    
    if (!valorSaque || isNaN(Number(valorSaque)) || Number(valorSaque) <= 0) {
      setMensagem('Digite um valor de saque válido.');
      return;
    }

    const valorSaqueFloat = parseFloat(valorSaque);
    
    if (valorSaqueFloat > saldoDisponivel) {
      setMensagem('Saldo insuficiente para o saque.');
      return;
    }


    setMensagem(`Saque de R$ ${valorSaqueFloat.toFixed(2)} realizado com sucesso.`);
    setValorSaque('');
  };
 return(
  <View style={estilos.Container}>
  <Text style={estilos.welcomeText}>Retire seus fundos com facilidade e tranquilidade:</Text>
  <TextInput
    style={[estilos.input, { backgroundColor: 'white' }]}
    keyboardType="numeric"
    value={valorSaque} placeholder='Insira o valor que deseja sacar'
    onChangeText={setValorSaque}
  />
  <View style={estilos.buttonContainer}>
  <Text style={[estilos.TextBr, estilos.messageText]}>{mensagem}</Text>
    <Button title="Sacar" onPress={handleSaque} color="#9542f5" />
  </View>
  
  <View style={estilos.buttonContainer}>
    <Button title="Voltar para o menu" onPress={() => navigation.goBack()} color="#9542f5" />
  </View>
</View>
);
};

export default TelaSaque;