import { StatusBar } from 'expo-status-bar'
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native'

export default function GalleryScreen({navigation}: any){
    function navToHome() {
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <Button
                title='Voltar para a Home'
                onPress={navToHome}
            /> 
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
})