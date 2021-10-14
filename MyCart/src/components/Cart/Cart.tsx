import React, {useState} from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {View, StyleSheet, TouchableHighlight, Text} from 'react-native';

const Cart = () => {
    return (
        <>
            <View style={styles.titleContainer}>
                <Text style={styles.cartTitle}>Resumen de tu cesta</Text>
                <TouchableHighlight>
                <Text>Seguir comprando</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Precio unidad</Text>
                <Text style={styles.subtitle}>Cantidad</Text>
                <Text style={styles.subtitle}>SUBTOTAL</Text>
            </View>
            <View>
                <Text>Aqui iran los items</Text>   
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    cartTitle: {
        marginRight: wp('15%')
    },
    subtitleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        borderBottomWidth: 1,
        marginTop: hp('3%')
    },
    subtitle: {
        marginRight: wp('3%')
    }
})

export default Cart;