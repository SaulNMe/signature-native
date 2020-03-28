import React, { 
	// useEffect, 
	// useState 
} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';
import { Colors } from 'signature-app-v2/app/styles';
import { View, TextInput } from 'react-native';
import styles from './InputTextStyles';

const InputText = React.forwardRef((props, ref) => {
	return (
		<View style={[styles.row, styles.input, styles.alignItemsCenter, styles.fullWidth, styles.smallVerticalMargin]}>
			<View style={styles.smallHorizontalMargin}>
				<Feather name={props.iconName} size={24} color={Colors.white}/>
			</View>
			<TextInput
				ref={ref}
				value={props.value}
				selectionColor={Colors.blueIntra}
				textContentType={props.textContentType}
				secureTextEntry={props.secureTextEntry}
				returnKeyType={props.returnKeyType}
				style={styles.textInput}
				placeholder={props.placeholder}
				placeholderTextColor={Colors.white}
				onSubmitEditing={props.onSubmitEditing}
				onChangeText={(text) => props.onChangeText(text)}
			/>
		</View>

	);
})

export default InputText;

InputText.propTypes = {
	placeholder: PropTypes.string,
	iconName: PropTypes.string,
	textContentType: PropTypes.string,
	returnKeyType: PropTypes.string,
	secureTextEntry: PropTypes.bool,
	onSubmitEditing: PropTypes.func,
	value: PropTypes.string,
}

InputText.defaultProps = {
	placeholder: '',
	iconName: 'x',
	textContentType: 'none',
	returnKeyType: 'next',
	secureTextEntry: false,
	onSubmitEditing: () => {},
	value: '',
}







