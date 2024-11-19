import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

import GalleryScreen from '../screens/GalleryScreen';
import HomeScreen from '../screens/HomeScreen';

export function BottomTabsRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{tabBarIcon:({color, size})=>(
          <MaterialCommunityIcons
            name='home'
            color='#000'
            size={size}
          />
        )}}

      />
      <Tab.Screen 
        name="Gallery" 
        component={GalleryScreen}
        options={{tabBarIcon:({color, size})=>(
          <MaterialCommunityIcons
            name='view-gallery'
            color='#000'
            size={size}
          />
        )}}
      /> 
    </Tab.Navigator>
  );
}