import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './DocItemStyle';
import PropTypes from 'prop-types';

import DoubleText from 'signature-app-v2/app/components/DoubleText';

export default function DocItem (props) {
	return (
		<TouchableOpacity 
			style={[styles.card, styles.smallHorizontalMargin]}
			onPress={props.onPress}
			activeOpacity={0.8}
		>
			<DoubleText
				title={props.title}
				subtitle={props.subtitle}
			/>
		</TouchableOpacity>
	);
}


DocItem.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	onPress: PropTypes.func,
}

DocItem.defaultProps = {
	title: '',
	subtitle: '',
	onPress: () => {}
}







