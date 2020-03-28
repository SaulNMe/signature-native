import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Metrics } from 'signature-app-v2/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.flexBox,
	...ApplicationStyles.screen,
	defaultStyles: {
		borderRadius: 10,
		padding: Metrics.smallMargin,
		backgroundColor: Colors.transparent,
		borderWidth: 1
	},
	shadow: {
		elevation: 5,
		shadowColor: '#000',
		shadowRadius: 4,
		shadowOpacity: 0.3,
		shadowOffset: { width: 0, height: 4 }
	}
});
