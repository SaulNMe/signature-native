import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Metrics } from 'signature-app-v2/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	defaultStyles: {
		borderRadius: 10,
		padding: 15,
		width: '100%',
		height: 45,
	},
	medium: {
		width: '50%',
	},
	shadow: {
		elevation: 2,
		shadowColor: '#000',
		shadowRadius: 4,
		shadowOpacity: 0.5,
		shadowOffset: { width: 0, height: 4 },
	},
	disabledText: {
		color: Colors.dark,
	},
	disabledBg: {
		backgroundColor: Colors.disabled,
	},
	borderRadius: {
		borderRadius: 10,
		height: 56,
	},
});
