import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import axios from "axios";

class BooksList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }
  componentWillMount() {
    // call to the server
    const url = "https://abolkog.com/api/books";

    axios.get(url).then(response => {
      const books = response.data.books;
      this.setState({ books });
    });
  }

  renderBookItem = ({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
      </View>
    );
  };

  keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <View style={{flex:1}}>
        <FlatList
          data={this.state.books}
          renderItem={this.renderBookItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

export default BooksList;
