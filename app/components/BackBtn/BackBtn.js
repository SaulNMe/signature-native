import React, { 
	// useEffect, 
	// useState 
} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { 
	View,
	Platform,
	TouchableOpacity
 } from 'react-native';

import PropTypes from 'prop-types';
import styles from './BackBtnStyle';
import { Colors } from 'signature-app-v2/app/styles';
export default function BackBtn (props) {
	return (
		<View style={styles.row}>
			<TouchableOpacity
				activeOpacity={0.6}
				onPress={props.onPress}
				style={[styles.row, styles.alignItemsCenter]}
			>
				<Feather 
					name={Platform.OS === 'ios' ? 'chevron-left':'arrow-left'}
					size={Platform.OS === 'ios' ? 35:24}
					color={Colors.white}
				/>
			</TouchableOpacity>
		</View>
	);
}


BackBtn.propTypes = {
	onPress: PropTypes.func,
	// data: PropTypes.array
}

BackBtn.defaultProps = {
	onPress: () => {},
	// data: []
}







