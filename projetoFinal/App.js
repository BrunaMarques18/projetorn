import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home/Home';
import Cadastrar from './src/pages/Produto/cadastrar/Index';
import Listar from './src/pages/Produto/listar/Index';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
        <Stack.Screen name="Listar" component={Listar} />
        </Stack.Navigator>
    </NavigationContainer>
);
}


export default App;
