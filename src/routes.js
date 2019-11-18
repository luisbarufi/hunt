import { createStackNavigator } from 'react-navigation';
import Main from './pages/main';
import Product from './pages/product';

export default createStackNavigator({
  Main,
  Product
}, {
  navigationOptions: {
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
