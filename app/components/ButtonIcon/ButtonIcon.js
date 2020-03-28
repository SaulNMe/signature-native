import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';

import styles from './ButtonIconStyle';
import SubtitleText from "signature-app-v2/app/components/SubtitleText";
import { Colors } from 'signature-app-v2/app/styles';
export default function ButtonIcon (props) {
	return (
		<TouchableOpacity
			onPress={props.onPress}
			style={styles.row}
			activeOpacity={0.8}
			disabled={props.disabled}
		>
			<View style={styles.smallHorizontalMargin}>
				<Feather name={props.iconName} size={24} color={props.disabled ? Colors.disabled : Colors.white}/>
			</View>
			<SubtitleText 
				text={props.text}
				color={props.disabled ? 'disabled' : 'white'}
				wight='medium'
			/>
		</TouchableOpacity>
	);
}


ButtonIcon.propTypes = {
	iconName: PropTypes.string,
	onPress: PropTypes.func,
	text: PropTypes.string,
}

ButtonIcon.defaultProps = {
	iconName: 'x',
	onPress: () => {},
	text: ''
}







