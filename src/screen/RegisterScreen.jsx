import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 20,
      }}
    >
      <Text style={styles.title}>Crear cuenta</Text>
      <Text style={styles.subtitle}>Crear nueva cuenta</Text>

      <View style={{ marginTop: 40, width: '100%' }}>
        <View style={styles.textInputContainer}>
          <TextInput placeholder='Nombre' />
        </View>

        <View style={styles.textInputContainer}>
          <TextInput placeholder='Email' />
        </View>

        <View style={styles.textInputContainer}>
          <TextInput placeholder='País' />
        </View>

        <View style={styles.textInputContainer}>
          <TextInput placeholder='Contraseña' />
        </View>

        <View style={styles.textInputContainer}>
          <TextInput placeholder='Confirmar contraseña' />
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Crear cuenta</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 18 }}>
        <Text>
          ¿Ya tienes una cuenta?
          <Text style={{ color: '#FF3352', fontWeight: 'bold' }} onPress={() => navigation.navigate('LoginScreen')}>
            {' '}
            Iniciar sesión
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: 'gray',
    textAlign: 'center',
  },
  textInputContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 7,
    padding: 14,
    width: '100%',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#FF3352',
    padding: 12,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginTop: 12,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
