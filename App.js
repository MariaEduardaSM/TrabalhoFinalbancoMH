import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './src/screens/HomeScreen';
import TelaSaque from './src/screens/TelaSaque'
import TelaDeposito from './src/screens/Deposito';
import TelaTransferencia from './src/screens/Transferencia';
import TelaSaldo from './src/screens/Saldo';
import TelaDesconectar from './src/screens/Desconectar';

import TelaLogin from './src/screens/LoginScreen';


const Stack = createNativeStackNavigator();

function App() {
  
  return (

    <NavigationContainer>
  
      <Stack.Navigator>
      <Stack.Screen name="TelaLogin" component={TelaLogin} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TelaSaque" component={TelaSaque} />
        <Stack.Screen name="TelaSaldo" component={TelaSaldo} />
        <Stack.Screen name="TelaDeposito" component={TelaDeposito} />
        <Stack.Screen name="TelaTransferencia" component={TelaTransferencia} />
        <Stack.Screen name="TelaDesconectar" component={TelaDesconectar} />

        
      
      
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;