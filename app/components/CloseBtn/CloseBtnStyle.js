import { StyleSheet } from 'react-native';
import { Fonts, Colors } from 'signature-app-v2/app/styles';
// import { ApplicationStyles } from 'signature-app-v2/app/styles';

export default StyleSheet.create({
	// ...ApplicationStyles.screen,
	// ...ApplicationStyles.flexBox,
	// ...ApplicationStyles.margins,
	closeBtn: {
		borderRadius: 15,
		width: 24,
       	height: 24,
		alignItems:'center',
		justifyContent:'center',
		backgroundColor: Colors.gray,
	},
	feather: {
		fontSize: Fonts.size.subtitle,
		color: Colors.white,
		opacity: 1
	},
});
