import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import estilos from '../../Estilos/estilos';
const TelaLogin = () => {
  const navigation = useNavigation();
  const [conta, setConta] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (conta === '20222018036' && password === 'heloisa') {
        
        const loginData = { conta, password };
        navigation.navigate('Home', { loginData });
      } else {

        alert('Erro. Verifique e tente novamente!');
      }
  };

  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (

    <View style={estilos.Container}> 
    <Text style={estilos.TextBr}> Heloisa 20222018036 e Maria Eduarda 20222017861 </Text>
    <Image style={estilos.Image} source={require('./Logo/lo.png')}/>
    <Text style={estilos.Texto}> Seu dinheiro em boas mãos!</Text>
    
    <TextInput
        style={estilos.input}
        placeholder="Digite o numero da conta"
        value={conta}
        onChangeText={setConta}
      />
      <TextInput
        style={estilos.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button 
      title = "Acessar conta"
       onPress={handleLogin} color="#9542f5" />
        
    
  </View>


  )

}
export default TelaLogin;
