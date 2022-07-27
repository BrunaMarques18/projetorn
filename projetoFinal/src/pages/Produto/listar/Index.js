import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ScrollView } from 'react-native';

import service from '../../../services/produto';
import CustomImage from '../../../components/Imagem/Index';
import styles from './Styles';

const Index = ({ navigation }) => {

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        service
            .listarTodos()
            .then((response) => {
                console.log("AQUI" + response);
                setProdutos(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        
            <View style={styles.container}>
                    
                        <ScrollView
                            contentContainerStyle={{ flexGrow: 1 }}
                            style={{flex:1, backgroundColor:'white'}}>
                            {produtos.map((p, i) => (
                                <View key={i} style={styles.boxCapa}>  
                                        <View style={{flex:1,justifyContent:'center'}}>
                                            <CustomImage imageuri={p.image} />
                                            <Text style={styles.destaqueCapas}>{p.title}</Text>
                                            <Text style={styles.textoCapas}> Descricao: {p.description}</Text>
                                            <Text style={styles.textoCapas}> Categoria: {p.category}</Text>
                                        </View>
                                </View>
                            ))}
                        </ScrollView>
                    
            </View>
        
    );
};

export default Index