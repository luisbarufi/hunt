import { createStackNavigator } from 'react-navigation';
import Main from './pages/main';

export default createStackNavigator({
  Main
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
