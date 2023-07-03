import React from 'react';
import { View, Button, Text, StyleSheet, Image } from 'react-native';
import { useRoute, useNavigation, StackActions } from '@react-navigation/native';
import estilos from '../../Estilos/estilos';
function HomeScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const handleLogout = () => {
    navigation.dispatch(StackActions.replace('Login'));
  };

  const loginData = route.params?.loginData;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={estilos.Container}>
      {loginData && <Text style={estilos.userDataText}>Olá Heloisa, você está utilizando a conta: {loginData.conta}</Text>}
      <Image style={estilos.Image} source={require('./Logo/lo.png')}/>
   
      <Text style={estilos.welcomeText}>Bem-vindo ao Banco MH!</Text>

      
      

      <View style={estilos.buttonContainer}>
        <Button
          style={estilos.button}
          title="Ver Saldo"
          onPress={() => navigation.navigate('TelaSaldo', { loginData })}
          color="#9542f5"
        />

        <Button
          style={estilos.button}
          title="Realizar Saque"
          onPress={() => navigation.navigate('TelaSaque')}
          color="#9542f5"
        />

        <Button
          style={estilos.button}
          title="Realizar Depósito"
          onPress={() => navigation.navigate('TelaDeposito')}
          color="#9542f5"
        />

        <Button
          style={estilos.button}
          title="Realizar Transferência"
          onPress={() => navigation.navigate('TelaTransferencia')}
          color="#9542f5"
        />

        <Button
          style={estilos.button}
          title="Desconectar"
          onPress={() => navigation.navigate('TelaDesconectar')}
          color="#9542f5"
        />
         
        
      </View>
    </View>
  );
}


export default HomeScreen;