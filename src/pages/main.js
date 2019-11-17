import React, { Component } from 'react';
import api from '../services/api';

import { View, Text } from 'react-native';

export default class Main extends Component {
  // método inicial disparado automáticamente 
  componentDidMount() {
    this.loadProducts();
  }

  
  loadProducts = async () => {
    const response = await api.get('/products')

    const { docs } = response.data

    console.log(docs);
  };

  render() {
    return (
      <View>
        <Text>Página Main</Text>
      </View>
    );
  }
}