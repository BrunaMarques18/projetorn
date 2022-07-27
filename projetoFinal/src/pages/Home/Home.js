import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'

import Styles from './Styles'
const Home = ({navigation}) => {
  return (
    <View>
       <TouchableHighlight
                        style={Styles.button}
                        underlayColor="transparent"
                        onPress={() => {
                            navigation.navigate('Cadastrar')
                        }}>
                        <View>
                            <Text style={Styles.link}>Cadastrar</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={Styles.button}
                        underlayColor="transparent"
                        onPress={() => {
                            navigation.navigate('Listar')
                        }}>
                        <View>
                            <Text style={Styles.link}>Listar</Text>
                        </View>
                    </TouchableHighlight>
    </View>
  )
}

export default Home;