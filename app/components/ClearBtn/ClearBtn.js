import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './ClearBtnStyle';
import Feather from 'react-native-vector-icons/Feather';
import { Colors } from 'signature-app-v2/app/styles';

export default function ClearBtn (props) {
	return (
		<TouchableOpacity
			disabled={props.disabled}
			onPress={props.onPress}
		>
			<Feather name='x' size={24} color={Colors.dark}/>
		</TouchableOpacity>
	);
}


ClearBtn.propTypes = {
	onPress: PropTypes.func,
	disabled: PropTypes.bool,
	// data: PropTypes.array
}

ClearBtn.defaultProps = {
	onPress: () => {},
	disabled: true
	// data: []
}







