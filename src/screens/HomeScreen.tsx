import { StatusBar } from 'expo-status-bar'
import {View, Text, StyleSheet, Button} from 'react-native'

export default function HomeScreen({navigation}: any){

    function navToGallery() {
        navigation.navigate('Gallery')
    }

    return (
        <View style={styles.container}>
            <Button
                title='Ir para Galeria'
                onPress={navToGallery}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center'
    }
})