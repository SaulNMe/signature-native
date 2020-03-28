import { StyleSheet } from 'react-native';
// import { Fonts, Colors, Metrics } from 'signature-app-v2/app/styles';
import { ApplicationStyles } from 'signature-app-v2/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	blurContainer: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.45)'
	},
	logo: {
		width: 100,
		height: 110,
		alignSelf: 'center'
	}
});
