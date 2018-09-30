import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ListItem = () => {
  const imgUrl =
    "https://images-na.ssl-images-amazon.com/images/I/51Gsycdh-TL._SX430_BO1,204,203,200_.jpg";
  return (
    <View style={styles.listItem}>
      <Image style={styles.bookImage} source={{ uri: imgUrl }} />
      <View style={styles.infoContainer}>
        <View style={styles.bookInfo}>
          <Text>Book title</Text>
          <Text>Book price</Text>
          <Text>Book ISBN</Text>
        </View>
      </View>

      <Text> Button Here </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 20,
    flex: 1,
    borderColor: "#ddd",
    borderBottomWidth: 1,
    flexDirection: "column"
  },
  infoContainer: {
    flexDirection: "row"
  },
  bookInfo: {
    flexDirection: "column",
    padding: 10,
    justifyContent: "space-between"
  },
  bookImage: {
    width: 100,
    height: 100
  }
});

export default ListItem;
