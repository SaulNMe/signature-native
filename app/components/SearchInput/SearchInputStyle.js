import { StyleSheet } from 'react-native';
import { ApplicationStyles , Colors, Fonts } from 'signature-app-v2/app/styles';

export default StyleSheet.create({
	// ...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	searchCard: {
		height: 45,
		flex: 1,
		borderTopLeftRadius : 15,
		borderBottomLeftRadius : 15,
		borderWidth: 1,
		borderColor: Colors.blueIntra,
		paddingLeft: 5,
		paddingRight: 35,
		fontSize: Fonts.size.body,
		color: Colors.dark
	}
});
