import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { View, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Colors } from 'signature-app-v2/app/styles';
import PropTypes from 'prop-types';
import styles from './TouchableIconStyle';
import { LinearGradient } from 'expo-linear-gradient';

export default function TouchableIcon (props) {
	const gradientColors = [ Colors.blueIntra, Colors.cyanIntra];
	return (
		<TouchableOpacity
			style={styles.iconButton}
			activeOpacity={0.8}
			onPress={props.onPress}
		>
			<LinearGradient colors={gradientColors} start={[0,0]} end={[1,0]} style={styles.gradient}>
				<View style={{borderRadius: 15}}>
					<Feather name={props.iconName} size={24} color={Colors.white}/>
				</View>
			</LinearGradient>
		</TouchableOpacity>
	);
}


TouchableIcon.propTypes = {
	iconName: PropTypes.string,
	onPress: PropTypes.func,
}

TouchableIcon.defaultProps = {
	onPress: () => {},
	iconName: 'x',
}







