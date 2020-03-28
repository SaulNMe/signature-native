import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './SecondaryBtnStyle';
import BodyText from 'signature-app-v2/app/components/BodyText';
import { Colors } from 'signature-app-v2/app/styles';

export default function SecondaryBtn (props) {
	return (
		<TouchableOpacity
				onPress={props.onPress}
				disabled={props.disabled}
				activeOpacity={0.8}
			>
				<View
					style={[styles.fullWidth, styles.defaultStyles, styles.centerObjects, {borderColor: Colors[props.color]}]}
				>	
					<BodyText 
						text={props.text}
						color={props.color}
						weight="medium"
					/>
				</View>
			</TouchableOpacity>
	);
}


SecondaryBtn.propTypes = {
	onPress: PropTypes.func,
	text: PropTypes.string,
	color: PropTypes.string,
	disabled: PropTypes.bool
}

SecondaryBtn.defaultProps = {
	onPress: ()=>{},
	text: "Click me!",
	color: "green",
	disabled: false
}







