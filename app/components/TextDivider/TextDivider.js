import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './TextDividerStyle';

export default function TextDivider (props) {
	return (
		<View style={[styles.fullWidth, styles.row, styles.alignItemsCenter, styles.baseVerticalMargin]}>
			<View style={styles.divider}/>
				<View style={styles.baseHorizontalMargin}>
		 			{props.text}
				</View>
			<View style={styles.divider}/>
		</View>
	);
}


TextDivider.propTypes = {
	// data: PropTypes.array
}

TextDivider.defaultProps = {
	// data: []
}







