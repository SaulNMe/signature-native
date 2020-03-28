import { StyleSheet } from 'react-native';
import { ApplicationStyles } from 'signature-app-v2/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	...ApplicationStyles.screen,
	above: {
		zIndex: 2
	},
	flex01: {
		flex: 0.1
	},
	flex04: {
		flex: 0.8
	}
});
