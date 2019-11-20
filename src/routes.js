import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/main';
import Product from './pages/product';

const AppNavigator = createStackNavigator({
  Main,
  Product
},{
  navigationOptions:{
    title: 'JShunt',
    headerStyle: {
      backgroundColor: "#DA552F"
    },
    headerTintColor: "#FFF",
    headerTitleStyle: {     
      flex: 1,
      textAlign: 'center',
    },
  },
});

export default createAppContainer(AppNavigator);
