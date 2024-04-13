import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';

const HomeScreen = () => {
  const stock = [
    {
      abreviation: 'BTC',
      price: 20000,
      title: 'Bitcoin',
      variation: -7.5,
      image:
        'https://static.vecteezy.com/system/resources/previews/008/505/801/original/bitcoin-logo-color-illustration-png.png',
    },
    {
      abreviation: 'BNB',
      price: 1000,
      title: 'BNB',
      variation: 10.9,
      image: 'https://cryptologos.cc/logos/bnb-bnb-logo.png',
    },
    {
      abreviation: 'Ethereum',
      price: 1765.2,
      title: 'ETH',
      variation: -1.57,
      image:
        'https://static.vecteezy.com/system/resources/previews/002/463/890/original/ethereum-logo-color-crypto-currency-symbol-isolated-vector.jpg',
    },
  ];
  return (
    <ScrollView style={{ backgroundColor: 'white' }} contentContainerStyle={{ padding: 20 }}>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginBottom: 50 }}>
        <Text>Saldo: $XXXXXXX</Text>
        <Text>Usuario</Text>
      </View>

      <View style={{ marginVertical: 20 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Acciones</Text>
      </View>

      {stock.map((item, index) => (
        <View style={{ marginVertical: 15 }} key={index}>
          <Card
            abreviation={item.abreviation}
            price={item.price}
            title={item.title}
            variation={item.variation}
            image={item.image}
          />
        </View>
      ))}

      <Text></Text>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
