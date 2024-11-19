import {NavigationContainer} from '@react-navigation/native'
import {StackRoutes} from './stack.routes'
import {BottomTabsRoutes} from './bottom.routes'
import {DrawerRoutes} from './drawer.routes'

export function Routes(){
    return(
    <NavigationContainer>
        {/* <DrawerRoutes/> */}
        <StackRoutes/>
        {/* <BottomTabsRoutes/> */}
    </NavigationContainer>

    )
}