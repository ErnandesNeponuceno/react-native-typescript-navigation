import {NavigationContainer} from '@react-navigation/native'
import {StackRoutes} from './stack.routes'
import {BottomTabsRoutes} from './bottom.routes'

export function Routes(){
    return(
    <NavigationContainer>
        <BottomTabsRoutes/>
    </NavigationContainer>

    )
}