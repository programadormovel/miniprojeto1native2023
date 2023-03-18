import React, {useState} from 'react';
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps';
import { StyleSheet, View, Alert, Text } from 'react-native';
import pin from '../../assets/favicon.png'

export default function Mapa() {

  const [marker] = useState(37.78825, -122.4324);

  const MyCustomMarkerView = () => {
    return (
      <Marker 
            coordinate={marker}
            // image={pin}
            
            /> 
    )
  }

  const MyCustomCalloutView = () => {
    return (
      <Marker 
            coordinate={marker}
            // image={pin}
            
            /> 
    )
  }

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        title={'exemplo mapa'}
        description={'mapa detalhe'}
        zoom= {10}
        style={styles.map} >
           <Marker coordinate={{latitude: 37.78825, longitude: -122.4324}} >
              <Callout          >
                <Text>AULA TESTE</Text>
              </Callout>
          </Marker>
        </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});