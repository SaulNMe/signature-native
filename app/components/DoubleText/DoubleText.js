import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './DoubleTextStyle';
import BodyText from 'signature-app-v2/app/components/BodyText';
export default function DoubleText (props) {
	return (
		<View>
			<BodyText 
				text={props.title}
				color='darkest'
				weight='bold'
			/>
			<BodyText 
				text={props.subtitle}
				color='gray'
			/>
		</View>
	);
}


DoubleText.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
}

DoubleText.defaultProps = {
	title: '',
	subtitle: '',
}







