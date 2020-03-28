import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics, Colors } from 'signature-app-v2/app/styles';

export default StyleSheet.create({
	...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	preview: {
		width: '100%',
		height: 300,
		backgroundColor: "#F8F8F8",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 15
	},
	previewText: {
		color: "#FFF",
		fontSize: 14,
		height: 40,
		lineHeight: 40,
		paddingLeft: 10,
		paddingRight: 10,
		backgroundColor: "#69B2FF",
		width: 120,
		textAlign: "center",
		marginTop: 10
	},
	textContainer: {
		padding: Metrics.tinyMargin,
		textAlign: 'center',
		backgroundColor: Colors.lighter,
	}
	// ...ApplicationStyles.flexBox,
	// ...ApplicationStyles.margins,
});
