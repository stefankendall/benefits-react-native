'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    StyleSheet,
    Text,
    View,
} = ReactNative;

const styles = StyleSheet.create({
    container: {
        borderRadius: 3,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        backgroundColor: '#ffffff',
        margin: 10,
        marginVertical: 5,
        overflow: 'hidden',
        alignSelf: "stretch"
    },
    titleContainer: {
        borderBottomWidth: 0.5,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 2.5,
        borderBottomColor: '#d6d7da',
        backgroundColor: '#f6f7f8',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    titleText: {
        fontSize: 14,
        fontWeight: '500',
    },
    descriptionText: {
        fontSize: 14,
    },
    children: {
        margin: 10,
    }
});

export default class TitledContainer extends React.Component {
    props: {
        title?: string,
        description?: string,
    };

    static propTypes = {
        title: React.PropTypes.string,
        description: React.PropTypes.string,
    };

    state = {description: (null: ?string)};

render() {
    var description;
    if (this.props.description) {
        description =
            <Text style={styles.descriptionText}>
                {this.props.description}
            </Text>;
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>
                    {this.props.title}
                </Text>
                {description}
            </View>
            <View style={styles.children}>
                {
                    // $FlowFixMe found when converting React.createClass to ES6
                    this.props.children}
            </View>
        </View>
    );
}
}