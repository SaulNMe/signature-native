import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors } from 'signature-app-v2/app/styles';
// import { ApplicationStyles } from 'signature-app-v2/app/styles';

export default StyleSheet.create({
	// ...ApplicationStyles.screen,
	...ApplicationStyles.flexBox,
	...ApplicationStyles.margins,
	divider: {
		display: 'flex',
		height: 1,
		flex: 1,
		//width: '100%',
		color: Colors['white'],
		backgroundColor: Colors['white']
	}
});
