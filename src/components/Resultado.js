import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Resultado({
  mensajeError,
  capital,
  meses,
  interes,
  total,
}) {
  return (
    <View style={styles.container}>
      {total && (
        <View style={styles.containerResultado}>
          <Text style={styles.titulo}>RESUMEN</Text>
          <Data titulo="Cantidad solicitada: " valor={`$ ${capital}`} />
          <Data titulo="Interes: " valor={`${interes} %`} />
          <Data titulo="Cuota mensual: " valor={`$ ${total.cuotaPorMes}`} />
          <Data titulo="Total a pagar: " valor={`$ ${total.totalAPagar}`} />
        </View>
      )}
      <Text style={styles.error} t>
        {mensajeError}
      </Text>
    </View>
  );
}

function Data({titulo, valor}) {
  return (
    <View style={styles.containerData}>
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>{titulo}</Text>
      <Text style={{fontSize: 16}}>{valor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 30,
  },
  error: {
    textAlign: 'center',
    fontSize: 20,
    color: '#f00',
    fontWeight: "bold"
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  containerResultado: {
    paddingHorizontal: 40,
  },
  containerData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
