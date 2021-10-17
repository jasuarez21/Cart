import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {View, StyleSheet, Image, TouchableHighlight, Text} from 'react-native';

const Header = () => {
    return (
        <>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: "https://s3-eu-west-1.amazonaws.com/tpd/logos/55ae5cd70000ff0005813d4e/0x0.png",
                    }}
                />
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableHighlight style={styles.button}>
                    <Text>Inicio</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                    <Text>Contacto</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                    <Text>Nuestro Blog</Text>
                </TouchableHighlight>      
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    logoContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center'
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginBottom: hp('5%'),
        padding: hp('1%')
    },
    logo: {
        height: hp('10%'),
        width: wp('18%'),
        marginLeft: - wp('35%')
    },
    button: {
        marginRight: wp('5%')
    }
})

export default Header;