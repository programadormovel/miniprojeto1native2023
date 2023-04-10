import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList, Alert} from 'react-native';
import axios from 'axios';
import estilo from '../styles/style';

// http://localhost:8085/nomes

const ListaNomesAxios = () => {

    const [dados, setDados] = useState([]);

    const buscarDados = () => {
        axios.get('http://10.0.1.92:8085/nomes')
        .then((response)=>{
            // armazenar a respostar
            setDados(response.data)
        })
        .catch((error)=>{
            Alert.alert(error.message())
        })
    }

    useEffect(()=>{
        buscarDados()
    }, [])

    return (
        <View>
            <Text>Listar Nomes Axios</Text>
            <FlatList
                data={dados}
                renderItem={({item})=><Text>{item.nome}</Text>}
                />
        </View>
    )
}

export default ListaNomesAxios;