import React, {useState} from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {View, StyleSheet, Image, TouchableHighlight, Text} from 'react-native';

const Cart = () => {
    let [userSearch, setUserSearch] = useState('');
    return (
        <>
            <View>
                <Text>Resumen de tu cesta</Text>
                <TouchableHighlight>
                    <Text>Seguir comprando</Text>
                </TouchableHighlight>
                <Text>Precio unidad</Text>
                <Text>Cantidad</Text>
                <Text>SUBTOTAL</Text>
            </View>
            <View>
                <Text>Aqui iran los items</Text>   
            </View>
        </>
    )
}

export default Cart;