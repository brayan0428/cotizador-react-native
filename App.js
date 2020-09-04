import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, View, StyleSheet, StatusBar, LogBox, Button } from 'react-native'
import colors from  './src/utils/colors'
import Form from './src/components/Form'
import Footer from './src/components/Footer'
import Resultado from './src/components/Resultado'

LogBox.ignoreLogs(["Picker has been"])

export default function App(){
  const [capital, setCapital] = useState(null)
  const [interes, setInteres] = useState(null)
  const [meses, setMeses] = useState(null)
  const [total, setTotal] = useState(null)
  const [error, setError] = useState("")

  useEffect(() => {
    if(capital && interes && meses){
      calculate()
    }
  }, [interes, capital, meses])

  const calculate = () => {
    setError("")
    setTotal(null)

    if(!capital){
      setError("Ingrese la cantidad que quiere solicitar")
      return
    }
    if(!interes){
      setError("Ingrese el interes del prestamo")
      return
    }
    if(!meses){
      setError("Seleccione los meses a pagar")
      return
    }

    const i = parseFloat(interes) / 100
    const cuota = ((parseFloat(capital) + (parseFloat(capital) * i))) / parseInt(meses)
    setTotal({
      cuotaPorMes: cuota.toFixed(0).replace(".",","),
      totalAPagar: cuota * parseInt(meses)
    })
  }

  return (
    <>
      <StatusBar barStyle="light-content"/>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background}/>
        <Text style={styles.titleApp}>Cotizador de Prestamos</Text>
        <Form setCapital={setCapital} setInteres={setInteres} setMeses={setMeses}/>
      </SafeAreaView>
      <Resultado 
        mensajeError={error}
        total={total}
        capital={capital}
        interes={interes}
        meses={meses}
      />
      <Footer calculate={calculate}/>
    </>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: 'center'
  },
  background: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    width: "100%",
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    position:"absolute",
    zIndex: -1
  },
  titleApp: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 30
  }
})