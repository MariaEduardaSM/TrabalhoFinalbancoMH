import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import estilos from '../../Estilos/estilos';

const TelaTransferencia = ({ navigation }) => {
  const [contaDestino, setContaDestino] = useState('');
  const [valorTransferencia, setValorTransferencia] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleTransferencia = () => {
    
    if (contaDestino !== '20222017861') {
      setMensagem('Conta de destino inválida. Verifique e tente novamente.');
      return;
    }

  
    if (contaDestino === 'numero_da_conta_logada') {
      setMensagem('Não é possível transferir para a própria conta.');
      return;
    }

   
    if (!valorTransferencia || isNaN(Number(valorTransferencia)) || Number(valorTransferencia) <= 0) {
      setMensagem('Digite um valor de transferência válido.');
      return;
    }

    const saldoDisponivel = 2500.75; 
    const valorTransferenciaFloat = parseFloat(valorTransferencia);
    if (valorTransferenciaFloat > saldoDisponivel) {
      setMensagem('Saldo insuficiente para realizar a transferência.');
      return;
    }

  

   
    setMensagem(`Transferência de R$ ${valorTransferenciaFloat.toFixed(2)} para a conta ${contaDestino} realizada com sucesso.`);
    setContaDestino('');
    setValorTransferencia('');
  };

  return (
    <View style={estilos.Container}>
      <Text style = {estilos.welcomeText}>Transfira com rapidez e segurança:</Text>
      <Text style={[estilos.TextBr, estilos.messageText]}>{mensagem}</Text>
      <TextInput
         style={[estilos.input, { backgroundColor: 'white' }]}
        keyboardType="numeric"
        value={contaDestino} placeholder='Insira o numero da conta'
        onChangeText={setContaDestino}
      />
     
      <TextInput
         style={[estilos.input, { backgroundColor: 'white' }]}
        keyboardType="numeric"
        value={valorTransferencia} placeholder='Insira o valor'
        onChangeText={setValorTransferencia}
      />
      <View style={estilos.buttonContainer}>
    <Button title="Transferir" onPress={handleTransferencia} color="#9542f5" />
  </View>
  
  <View style={estilos.buttonContainer}>
    <Button title="Voltar para o menu" onPress={() => navigation.goBack()} color="#9542f5" />
  </View>
</View>
  );
};

export default TelaTransferencia;