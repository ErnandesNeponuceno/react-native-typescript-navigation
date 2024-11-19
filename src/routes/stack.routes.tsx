import {createStackNavigator} from '@react-navigation/stack'

const {Screen, Navigator} = createStackNavigator()

import GalleryScreen from '../screens/GalleryScreen'
import HomeScreen from '../screens/HomeScreen';

export function StackRoutes(){
    return(
        <Navigator>
            <Screen name='Home'component={HomeScreen} options={{headerShown: true}}/>
            <Screen name='Gallery'component={GalleryScreen} />
        </Navigator>
    )
}



