import React, { Component } from "react";
import { View } from "react-native";

import Header from "./Header";
import BooksList from "./BooksList";

class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Header />
        <BooksList />
      </View>
    );
  }
}

export default App;
