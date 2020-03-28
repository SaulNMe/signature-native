import { StyleSheet } from 'react-native';
// import { Fonts, Colors, Metrics } from 'signature-app-v2/app/styles';
import { ApplicationStyles, Colors } from 'signature-app-v2/app/styles';

export default StyleSheet.create({
	// ...ApplicationStyles.screen,
	// ...ApplicationStyles.flexBox,
	// ...ApplicationStyles.margins,
	iconButton: {
		height: 45,
		position:'relative',
		zIndex: 3
	},
	gradient: {
		borderWidth: 0,
		padding: 10,
		borderTopRightRadius: 15,
		borderBottomRightRadius: 15,
	}
});
