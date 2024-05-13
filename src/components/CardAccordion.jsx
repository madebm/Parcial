import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CardAccordion = ({ title, abreviation, price, variation, image, isSell }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <>
      <TouchableOpacity activeOpacity={0.7} style={styles.container} onPress={() => setIsOpen((prev) => !prev)}>
        <View style={{ width: '20%', justifyContent: 'center' }}>
          <Image
            style={{ width: 40, height: 40 }}
            source={{
              uri: image,
            }}
          />
        </View>
        <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ width: '60%' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{title}</Text>
            <Text style={{ marginTop: 5 }}>{abreviation}</Text>
          </View>
          <View style={{ width: '25%' }}>
            <Text style={{ fontWeight: 'bold', color: variation >= 0 ? 'green' : 'red' }}>{variation}%</Text>
            <Text style={{ marginTop: 5 }}>${price} </Text>
          </View>
          <View style={{ width: '15%', justifyContent: 'center', alignItems: 'flex-end' }}>
            <Ionicons name={isOpen ? 'chevron-up-outline' : 'chevron-down-outline'} size={17} color='black' />
          </View>
        </View>
      </TouchableOpacity>
      {isOpen && (
        <View style={{ padding: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setCount(count - 1)}
              style={{
                backgroundColor: '#FF3352',
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Ionicons name='remove-sharp' size={17} color='white' />
            </TouchableOpacity>
            <View
              style={{
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#FF3352',
                borderWidth: 1,
              }}
            >
              <Text>{count}</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setCount(count + 1)}
              style={{
                backgroundColor: '#FF3352',
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Ionicons name='add' size={17} color='white' />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              backgroundColor: '#FF3352',
              height: 40,
              width: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 7,
            }}
          >
            <Text style={{ color: 'white' }}>{isSell ? 'Vender' : 'Comprar'}</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default CardAccordion;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },
});