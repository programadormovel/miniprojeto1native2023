import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import axios from 'axios';
import {Controller, useForm} from 'react-hook-form';

export default Login2 = () => {

    const [dados, setDados] = useState([]);
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    useEffect(()=>{
        if(dados.data != null){
            setLogin(dados.data.email_Usuarios)
            setSenha(dados.data.senha_Usuarios)
        }     
    }, [dados])

    useEffect(()=>{
        buscarDados()
    }, [])

    const buscarDados = async () => {
        // axios.get()
        // .then((response)=>{
        //     })
        // .catch((error)=>{
        //     Alert.alert(error.message())
        // })

        setDados({"data":{"email_Usuarios":"admin@admin.com","senha_Usuarios":"$2b$10$/th2sRcrtUKmmNdJCVhkeuKL8gSbXzAyYptapppadVxr556Opw8s2"},"erroStatus":false,"mensagemStatus":"USÚARIO LISTADO POR EMAIL."})
        
    }

    return (
        <View style={{display: 'flex', flex:1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>LOGIN</Text>
            <Text>{login}</Text>
            <Text>{senha}</Text>
        </View>
    )
}