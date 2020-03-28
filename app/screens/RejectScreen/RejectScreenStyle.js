import { StyleSheet } from 'react-native';
import { Fonts, Colors, Metrics } from 'signature-app-v2/app/styles';
import { ApplicationStyles } from 'signature-app-v2/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	input: {
		textAlignVertical: 'top',
		width: '100%',
		marginTop: Metrics.smallMargin,
		marginBottom: Metrics.baseMargin,
		padding: Metrics.smallMargin,
		color: Colors.darkBlue,
		borderColor: Colors.gray,
		borderWidth: 1,
		borderRadius: 10,
	}
});
