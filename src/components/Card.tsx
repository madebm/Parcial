import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Card = ({ title, abreviation, price, variation, image }) => {
  return (
    <View style={styles.container}>
      <View style={{ width: '20%', justifyContent: 'center' }}>
        <Image
          style={{ width: 40, height: 40 }}
          source={{
            uri: image,
          }}
        />
      </View>
      <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{title}</Text>
          <Text style={{ marginTop: 5 }}>{abreviation}</Text>
        </View>
        <View style={{ width: '20%' }}>
          <Text style={{ fontWeight: 'bold', color: variation >= 0 ? 'green' : 'red' }}>{variation}%</Text>
          <Text style={{ marginTop: 5 }}>${price} </Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },
});
