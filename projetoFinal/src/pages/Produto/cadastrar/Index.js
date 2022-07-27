import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  TouchableHighlight,
  ScrollView,
  Text,
} from 'react-native';

import service from '../../../services/produto'

import Styles from './Styles';

const Cadastrar = ({navigation}) => {
  const [limpar, setLimpar] = useState(false);

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
      if(limpar){
        limparCampos();
      }
  }, [limpar])
  
  const handleCadastrar = () => {
    let produto = {
      title:title,
      price:price, 
      description:description, 
      image:image,
      category:category
    };

    console.log(produto);

    service
      .inserirProduto(produto)
      .then((response) => {
         if(response != ""){
          setLimpar(true);
          alert('Produto cadastrado com sucesso!');
        }
      })
      .catch((error) => {
        alert('Erro ao cadastrar!');
      });
  };

  const limparCampos = () => {
      setTitle('');
      setDescription('');
      setPrice('');
      setImage('');
      setCategory('');
  }

  return (
    <>
      <ScrollView>
        <View style={Styles.Container}>
          <View style={Styles.ContainerImage}>

          </View>
          <View style={Styles.ContainerButton}>
            <TouchableHighlight>
              <TextInput
                onChangeText={(value) => setTitle(value)}
                style={Styles.Input}
                placeholder="Nome do produto"
              />
            </TouchableHighlight>
          </View>
          <View style={Styles.ContainerButton}>
            <TouchableHighlight>
              <View>
                <TextInput
                  onChangeText={(value) => setDescription(value)}
                  style={Styles.Input}
                  placeholder="Descricao do produto"
                />
              </View>
            </TouchableHighlight>
          </View>
          <View style={Styles.ContainerButton}>
            <TouchableHighlight>
              <View>
                <TextInput
                  onChangeText={(value) => setPrice(value)}
                  style={Styles.Input}
                  placeholder="Preco"
                />
              </View>
            </TouchableHighlight>
          </View>
          <View style={Styles.ContainerButton}>
            <TextInput
                  onChangeText={(value) => setCategory(value)}
                  style={Styles.Input}
                  placeholder="Categoria"
                />
          </View>
          <View style={Styles.ContainerButton}>
            <TouchableHighlight>
              <View>
                <TextInput
                  onChangeText={(value) => setImage(value)}
                  style={Styles.Input}
                  placeholder="Imagem"
                />
              </View>
            </TouchableHighlight>
          </View>
          
          <View style={Styles.ContainerButtonCadastrar}>
            <TouchableHighlight style={Styles.Button} onPress={handleCadastrar}>
              <Text style={Styles.ButtonText}>Cadastrar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Cadastrar;