/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import TitledContainer from './js/TitledContainer';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F6',
        padding: 12
    },
    text: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 12
    },
    header: {
        fontSize: 36,
        lineHeight: 36,
        fontWeight: '200',
        textAlign: 'center'
    }
    ,
    subheader: {
        fontSize: 24,
        fontWeight: '300',
        marginTop: 24,
        marginBottom: 24
    },
    button: {
        alignSelf: 'flex-end',
        flex: 1
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
});

export default class Benefits extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.header}>
                        A job is more than salary
                    </Text>
                    <Text style={[styles.text, styles.subheader]}>
                        Don't be fooled.
                    </Text>
                    <Text style={[styles.text]}>
                        Compare pay, benefits, and opportunity cost to get a true picture of total
                        compensation
                    </Text>
                </View>
                <TitledContainer title="Let's get started" style={styles.button}>
                    <Button
                        onPress={() => {
                        }}
                        title="Add a Job"
                    />
                </TitledContainer>
            </View>
        );
    }
}

AppRegistry.registerComponent('Benefits', () => Benefits);
