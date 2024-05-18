import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import CardAccordion from "../../components/CardAccordion";

const BuyScreen = () => {
  const stock = [
    {
      abreviation: "BTC",
      price: 20000,
      title: "Bitcoin",
      variation: -7.5,
      image:
        "https://static.vecteezy.com/system/resources/previews/008/505/801/original/bitcoin-logo-color-illustration-png.png",
    },
    {
      abreviation: "BNB",
      price: 1000,
      title: "BNB",
      variation: 10.9,
      image: "https://cryptologos.cc/logos/bnb-bnb-logo.png",
    },
    {
      abreviation: "Ethereum",
      price: 1765.2,
      title: "ETH",
      variation: -1.57,
      image:
        "https://static.vecteezy.com/system/resources/previews/002/463/890/original/ethereum-logo-color-crypto-currency-symbol-isolated-vector.jpg",
    },
  ];

  return (
    <FlatList
      style={{ backgroundColor: "white" }}
      contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 15 }}
      data={stock}
      ListHeaderComponent={() => (
        <Text style={{ fontWeight: "bold", fontSize: 17 }}>Comprar</Text>
      )}
      renderItem={({ item, index }) => (
        <View style={{ marginVertical: 15 }} key={index}>
          <CardAccordion
            abreviation={item.abreviation}
            price={item.price}
            title={item.title}
            variation={item.variation}
            image={item.image}
            isSell={false}
          />
        </View>
      )}
    />
  );
};

export default BuyScreen;

const styles = StyleSheet.create({});
