import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { 
	Text, 
	View,
	TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './SegmentedControlDocsTabStyle';
import LabelText from 'signature-app-v2/app/components/LabelText';

export default function SegmentedControlDocsTab (props) {
	return (
		<View style={[styles.row, styles.tabsContainer]}>
			<TouchableOpacity 
				style={[styles.buttonLeft, styles.alignItemsCenter, props.current === props.leftName ? styles.blueButton : styles.whiteButton]}
				onPress={props.leftAction}
			>
				<LabelText
					text={props.leftText}
					color={props.current === props.leftName ? 'white' : 'blue'}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={[styles.buttonRight, styles.alignItemsCenter, props.current === props.rightName ? styles.blueButton : styles.whiteButton]}
				onPress={props.rightAction}
			>
				<LabelText
					text={props.rightText}
					color={props.current === props.rightName ? 'white' : 'blue'}
				/>
			</TouchableOpacity>
		</View>
	);
}


// SegmentedControlDocsTab.propTypes = {
// 	leftText: PropTypes.string,
// 	leftName: PropTypes.string,
// 	rightText: PropTypes.string,
// 	rightName: propTypes.string,
// 	leftAction: PropTypes.func,
// 	rightAction: PropTypes.func,
// 	current: PropTypes.string,
// }

// SegmentedControlDocsTab.defaultProps = {
// 	leftText: '',
// 	leftName: '',
// 	rightText: '',
// 	rightName: '',
// 	leftAction: () => {},
// 	rightAction: () => {},
// 	current: '',
// }







