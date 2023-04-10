// Formik x React Native example
import React, {useState, useEffect} from 'react';
import { Button, TextInput, View } from 'react-native';
import { Formik } from 'formik';

export const CadastroFormik = props => {
  const [dados, setDados] = useState([]);
 const [dadosRetornados, setDadosRetornados] = useState([]);

 const buscar = () => {
 	//axios.post()
 }
  
 useEffect(()=>{
   buscar();
}, [dados]);


 return (
  <Formik
    initialValues={{ email: '' }}
    onSubmit={values => setDados(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
        <TextInput
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
        />
        <Button onPress={handleSubmit} title="Submit" />
      </View>
    )}
  </Formik>
);

}