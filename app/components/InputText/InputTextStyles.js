import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Fonts } from 'signature-app-v2/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	input: {
		height: 45,
		width: '100%',
		borderRadius: 10,
		borderWidth: 1,
		borderColor: Colors.white,
		padding: 5,
	},
	textInput: {
		color: Colors.white,
		fontSize: Fonts.size.body,
		width: '85%',
	}
});
