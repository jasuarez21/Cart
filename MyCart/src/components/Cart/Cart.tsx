import React, {useEffect, useState} from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {View, StyleSheet, TouchableHighlight, Text, Image} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart, loadCart } from '../../redux/actions/actionCreators';

const Cart = () => {
    const items = useSelector((store: any) => store.cart);
    const dispatch = useDispatch();
    let totalPrice: number = 0;
    let totalPriceWithoutTax: number = 0;
    useEffect(() => {
      dispatch(loadCart());
    }, []);
    return (
        <View>
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
            {
                    items.data?.stores.data[0].relationships.items.map((item: any) => 
                    {
                        totalPrice = totalPrice + (item.attributes.current_unit_price*item.attributes.quantity)
                        totalPriceWithoutTax = (totalPrice - item.attributes.price_without_tax)
                        console.log(totalPrice)
                        return ( <View style={styles.itemContainer}>
                            <Image
                             source={{
                                uri: item.attributes.image_url,
                            }}/>
                             <Text style={styles.attribute}>{item.attributes.brand}</Text>
                             <Text style={styles.attribute}>{item.attributes.current_unit_price}€</Text>
                             <Text style={styles.attribute}>{item.attributes.quantity}</Text>
                             <Text style={styles.attribute}>{item.attributes.current_unit_price*item.attributes.quantity}€</Text>
                             <TouchableHighlight style={styles.buttonDelete}
                               onPress={() =>
                                dispatch(deleteFromCart(item.attributes.brand))
                              }>
                                <Text>Eliminar</Text>
                            </TouchableHighlight>
                         </View>
                       )
                    }
                    )
            }
            <View style={styles.resumePriceContainer}>
                <Text style={styles.titlePrice}>Resumen del pedido</Text>
                <Text>Total de los productos(IVA INCLUIDO) {totalPrice.toFixed(2)} €</Text>
                <Text>Total de envío (imp. excl.) {items.data?.attributes.estimated_shipping_costs} €</Text>
                <Text>Total sin IVA {totalPriceWithoutTax} €</Text>
                <Text>Total de impuestos {(totalPrice - totalPriceWithoutTax).toFixed(2)} €</Text>
                <Text>Total a pagar {totalPrice.toFixed(2)} €</Text>
            </View>
        </View>
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
        marginRight: wp('13%'),
        textTransform: 'uppercase',
        fontSize: hp('3%')
    },
    subtitleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 1,
        marginTop: hp('3%')
    },
    subtitle: {
        marginLeft: wp('4%')
    },
    itemContainer: {
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        height: hp('10%'),
        width: wp('80%'),
        alignSelf: 'center',
        justifyContent: 'flex-end',
        marginTop: hp('2%'),
        borderRadius: 15
    },
    attribute: {
        marginLeft: hp('5%'),
        marginTop: hp('3%')
    },
    buttonDelete: {
        marginTop: hp('-0.1%'),
        marginLeft: hp('1%'),
        marginRight: hp('-2%'),
        width: wp('16%'),
        height: hp('5%')
    },
    resumePriceContainer:{
        borderWidth: 1,
        marginTop: hp('3%'),
        width: wp('70%'),
        height: hp('20%'),
        alignSelf: 'center',
        borderRadius: 15,
        padding: wp('3%')
    },
    titlePrice: {
        marginBottom: hp('3%'),
        fontSize: hp('1.8%')
    }
})

export default Cart;