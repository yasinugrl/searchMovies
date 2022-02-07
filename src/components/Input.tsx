import React from 'react';
import {
    View, TextInput, Text, TextStyle, StyleSheetProperties,
    ViewStyle, StyleSheet, Image
} from 'react-native';

interface InputProps {
    isErrorValid: boolean | any,
    value?: string,
    placeholder?: string,
    textInputStyle?: StyleSheetProperties,
    onChangeText?: () => string;
    secureTextEntry?: boolean,
    title?: string,
    containerStyle?: ViewStyle,
    titleStyle?: TextStyle,
    inputRef?: React.RefObject<HTMLInputElement>,
    mask?: boolean
    iconType?: string
    disable?: boolean
    isTransparent?: boolean,
    onFocus?: () => boolean
}

export default class Input extends React.Component<InputProps> {

    renderIcon = () => {
        const iconSize = (40 / 2) || 18
        switch (this.props.iconType) {
            case 'search': return <Image source={require('../assets/icons/search.png')} style={{ width: 20 }} resizeMode='contain' />
            default: return null
        }
    }

    render() {
        let {
            placeholder, onChangeText, value, secureTextEntry,
            title, isErrorValid, containerStyle, textInputStyle, titleStyle,
            mask, isTransparent, onFocus
        } = this.props;

        return (
            <View style={styles.inputContainer}>
                {this.props.iconType && this.renderIcon()}
                <TextInput
                    {...this.props}
                    style={{ ...styles.textInput, }}
                    ref={this.props.inputRef}
                    autoCorrect={false}
                    autoCapitalize="none"
                    secureTextEntry={secureTextEntry}
                    value={value}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    editable={!this.props.disable}
                    onFocus={onFocus}
                />
            </View>
        )
    }
}



const styles = StyleSheet.create({
    textInput: {
        borderRadius: 20,
        borderColor: 'gray',
        padding: 10,
        flex: 1,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        backgroundColor: 'white',
        height: 50,
        borderRadius: 5,
        width: '90%',
        alignSelf: 'center'
    }
});
