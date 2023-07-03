import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import estilos from '../../Estilos/estilos';

const TelaDeposito = ({ navigation }) => {
  const [valorDeposito, setValorDeposito] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleDeposito = () => {
   
    if (!valorDeposito || isNaN(Number(valorDeposito)) || Number(valorDeposito) <= 0) {
      setMensagem('Digite um valor de depósito válido.');
      return;
    }

    const valorDepositoFloat = parseFloat(valorDeposito);
    

    setMensagem(`Depósito de R$ ${valorDepositoFloat.toFixed(2)} realizado com sucesso.`);
    setValorDeposito('');
  };

  return (
    <View style ={estilos.Container}>
      <Text style = {estilos.welcomeText}>Deposite com segurança e confiança:</Text>
      <TextInput
        style={[estilos.input, { backgroundColor: 'white' }]}
        keyboardType="numeric"
        value={valorDeposito} placeholder='Insira o valor do deposito'
        onChangeText={setValorDeposito}
      />
      <View style={estilos.buttonContainer}>
  <Text style={[estilos.TextBr, estilos.messageText]}>{mensagem}</Text>
    <Button title="Depositar" onPress={handleDeposito} color="#9542f5" />
  </View>
  
  <View style={estilos.buttonContainer}>
    <Button title="Voltar para o menu" onPress={() => navigation.goBack()} color="#9542f5" />
  </View>
</View>
  );
};

export default TelaDeposito;