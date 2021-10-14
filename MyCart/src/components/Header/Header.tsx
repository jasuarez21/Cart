import React, {useState} from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {View, StyleSheet, Image, TouchableHighlight, Text} from 'react-native';

const Header = () => {
    let [userSearch, setUserSearch] = useState('');
    return (
        <>
            <View style={styles.headerContainer}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: "https://i.postimg.cc/W4pH9FN9/icons8-github-50.png",
                    }}
                />
            </View>
            <View>
                <TouchableHighlight>
                    <Text>Inicio</Text>
                </TouchableHighlight>
                <TouchableHighlight>
                    <Text>Contacto</Text>
                </TouchableHighlight>
                <TouchableHighlight>
                    <Text>Nuestro Blog</Text>
                </TouchableHighlight>      
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: hp('5%')
    },
    logo: {
        height: hp('5.4%'),
        width: wp('9%'),
        marginTop: hp('1.5%'),
        marginLeft: - wp('10%')
    }
})

export default Header;