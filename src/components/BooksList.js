import React, { Component } from "react";
import { View, Text } from "react-native";
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

  render() {
    return (
      <View>
        {this.state.books.map(book => {
          return (
            <View>
              <Text>{book.name}</Text>
              <Text>{book.price}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

export default BooksList;
