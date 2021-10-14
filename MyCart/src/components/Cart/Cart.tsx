import React, {useEffect, useState} from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {View, StyleSheet, TouchableHighlight, Text, Image} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadCart } from '../../redux/actions/actionCreators';

const Cart = () => {
    const items = useSelector((store: any) => store.cart);
    const dispatch = useDispatch();
    let precioTotal: number = 0;
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
                        precioTotal = precioTotal + (item.attributes.current_unit_price*item.attributes.quantity)
                        console.log(precioTotal)
                        return ( <View style={styles.itemContainer}>
                            {/* <Image
                             source={{
                                uri: item.attributes.image_url,
                            }}/> */}
                             <Text style={styles.attribute}>{item.attributes.brand}</Text>
                             <Text style={styles.attribute}>{item.attributes.current_unit_price}€</Text>
                             <Text style={styles.attribute}>{item.attributes.quantity}</Text>
                             <Text style={styles.attribute}>{item.attributes.current_unit_price*item.attributes.quantity}€</Text>
                             <TouchableHighlight style={styles.buttonDelete}>
                                <Text>Eliminar X</Text>
                            </TouchableHighlight>
                         </View>
                       )
                    }
                    )
            }
            <View>
                <Text>Resumen del pedido</Text>
                <Text>Total items {precioTotal} €</Text>
            </View>
                {
                    <>
                        <Text>Total de los productos(IVA INCLUIDO) {items.data.attributes.total_vat_taxes} €</Text>
                        <Text>Total de envío (imp. excl.) {items.data.attributes.estimated_shipping_costs_without_tax} €</Text>
                        <Text>Total sin IVA {items.data.attributes.total_vat_taxes} €</Text>
                        <Text>Total de impuestos {items.data.attributes.total_vat_taxes} €</Text>
                        <Text>Total a pagar {items.data.attributes.total_price} €</Text>
                    </>
                }
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
    },
    itemContainer: {
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        height: hp('10%'),
        width: wp('100%'),
        alignSelf: 'center',
        justifyContent: 'flex-end'
    },
    attribute: {
        marginLeft: hp('4%'),
        marginTop: hp('3%')
    },
    buttonDelete: {
        marginTop: hp('0%')
    }
})

export default Cart;