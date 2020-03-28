import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'signature-app-v2/app/styles';
import { ApplicationStyles } from 'signature-app-v2/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	tabsContainer: {
		width: '90%',
		alignSelf: 'center',
		borderRadius: 5,
		borderColor: Colors.blue,
		borderWidth: 1
	},
	buttonLeft: {
		flex: 0.5,
		padding: Metrics.smallMargin,
		borderTopLeftRadius: 4,
		borderBottomLeftRadius: 4
	},
	buttonRight: {
		flex: 0.5,
		padding: Metrics.smallMargin,
		borderTopRightRadius: 4,
		borderBottomRightRadius: 4
	},
	blueButton: {
		backgroundColor: Colors.blue,
	},
	whiteButton: {
		backgroundColor: Colors.white,	
	},
});
