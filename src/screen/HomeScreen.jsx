import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Card from '../components/Card';

const HomeScreen = ({ navigation }) => {
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
    <FlatList
      style={{ backgroundColor: 'white' }}
      contentContainerStyle={{ padding: 20 }}
      data={stock}
      ListHeaderComponent={() => (
        <>
          <View style={{ marginBottom: 30 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 19 }}>Hola María 👋🏻</Text>
            <Text style={{ marginTop: 20, fontSize: 17, color: 'gray' }}>Tu saldo</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 27 }}>$40.500</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('BuyScreen')}
              activeOpacity={0.7}
              style={{
                backgroundColor: '#FF3352',
                padding: 7,
                borderRadius: 7,
                width: 80,
                height: 80,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Ionicons name='add' size={27} color='white' />
              <Text style={{ color: 'white' }}>Comprar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('SellScreen')}
              activeOpacity={0.7}
              style={{
                backgroundColor: '#FF3352',
                padding: 7,
                borderRadius: 7,
                width: 80,
                height: 80,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Ionicons name='remove-sharp' size={27} color='white' />
              <Text style={{ color: 'white' }}>Vender</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginVertical: 25 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Mis acciones</Text>
          </View>
        </>
      )}
      renderItem={({ item, index }) => (
        <View style={{ marginVertical: 15 }} key={index}>
          <Card
            abreviation={item.abreviation}
            price={item.price}
            title={item.title}
            variation={item.variation}
            image={item.image}
          />
        </View>
      )}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
