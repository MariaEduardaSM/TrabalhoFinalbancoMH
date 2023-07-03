import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import estilos from '../../Estilos/estilos';
import { useRoute,  useNavigation, StackActions } from '@react-navigation/native';
const TelaSaldo = ({ navigation }) => {
  
  const [saldo, setSaldo] = useState(2500.75);
  const route = useRoute();
  const loginData = route.params?.loginData;
  

  return (
    <View style={estilos.Container}>
      <Text style ={estilos.welcomeText}>Saldo</Text>
     {loginData && <Text  style={estilos.userDataText}> Olá Heloisa, você esta logado na conta : {loginData.conta} </Text>}
     <Text style={estilos.TextBr}>  E seu saldo é de: R$ {saldo.toFixed(2)}</Text>
      <Text />


      <Button style ={estilos.button} 
      title="Voltar"
       onPress={() => navigation.goBack()}  color={'#9542f5'}/>
    </View>
  );
};

export default TelaSaldo;