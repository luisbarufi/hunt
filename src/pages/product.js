import React from 'react';
import { View } from 'react-native';
//import { WebView } from 'react-native-webview';

const Product = () => {
  
  return(
    <View 
      source = {{ uri: 'https://github.com/facebook/react-native'}}
    />
  );  
};

Product.navigationOptions = ({ navigation }) => ({
  title: navigation.state.params.product.title
});

export default Product;
