import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TextInputCustom from '../components/TextInputCustom';

const LoginScreen = ({ navigation }) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 20,
      }}
    >
      <View>
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.subtitle}>Inicia sesión para continuar</Text>
      </View>

      <View style={{ marginTop: 40, width: '100%' }}>
        <TextInputCustom placeholder={'Email'} />
        <TextInputCustom placeholder={'Contraseña'} />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TabNavigation')}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 18 }}>
        <Text>
          ¿No tienes una cuenta?
          <Text style={{ color: '#FF3352', fontWeight: 'bold' }} onPress={() => navigation.navigate('RegisterScreen')}>
            {' '}
            Crear cuenta
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: 'gray',
    textAlign: 'center',
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
