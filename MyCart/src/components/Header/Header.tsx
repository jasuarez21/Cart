import React, {useState} from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {View, StyleSheet, Image, TouchableHighlight, Text} from 'react-native';

const Header = () => {
    let [userSearch, setUserSearch] = useState('');
    return (
        <>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: "https://i.postimg.cc/W4pH9FN9/icons8-github-50.png",
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
        alignSelf: 'center',
        marginTop: hp('1%'),
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginBottom: hp('5%'),
        padding: hp('1%')
    },
    logo: {
        height: hp('5.4%'),
        width: wp('9%'),
        marginTop: hp('1.5%'),
        marginLeft: - wp('35%')
    },
    button: {
        marginRight: wp('5%')
    }
})

export default Header;