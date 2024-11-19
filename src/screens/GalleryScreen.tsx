import { StatusBar } from 'expo-status-bar'
import {View, Text, StyleSheet, Button} from 'react-native'

export default function GalleryScreen({navigation}: any){
    function navToHome() {
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <Text>
                Gallery Works!
            </Text>
            <Button
                title='Ir para Home'
                onPress={navToHome}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'red',
    },
})