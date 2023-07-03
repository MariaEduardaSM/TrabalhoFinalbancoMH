import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import estilos from '../../Estilos/estilos';

const TelaDesconectar = ({ navigation }) => {
  const handleDesconectar = () => {
    navigation.navigate('TelaLogin');
  };

  return (
    <View style={estilos.Container}>
       <Image style={estilos.Image} source={require('./Logo/lo.png')}/>
   
      <Text style={estilos.welcomeText}>Desconectar</Text>
      <Text style={estilos.TextBr}>Tem certeza de que deseja desconectar?</Text>

      <View style={estilos.buttonContainer}>
        <View style={estilos.buttonContainer}>
          <Button title="Sim" onPress={handleDesconectar} color="#9542f5" />
        </View>
        <View style={estilos.buttonContainer}>
          <Button title="Não" onPress={() => navigation.goBack()} color="#9542f5" />
        </View>
      </View>
    </View>
  );
};

export default TelaDesconectar;
