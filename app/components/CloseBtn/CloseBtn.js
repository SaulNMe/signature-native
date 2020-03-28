import React, { 
	// useEffect, 
	// useState 
} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './CloseBtnStyle';

export default function CloseBtn (props) {
	return (
		<TouchableOpacity
			onPress={props.onPress}
			activeOpacity={0.8}
			style={styles.closeBtn}
		>
			<Feather  name='x' style={styles.feather}/>
		</TouchableOpacity>
	);
}


CloseBtn.propTypes = {
	// data: PropTypes.array
}

CloseBtn.defaultProps = {
	// data: []
}







