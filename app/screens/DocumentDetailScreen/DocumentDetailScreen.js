import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { 
	View,
	WebView,
	Image
 } from 'react-native';

import styles from './DocumentDetailScreenStyle';
import BackBtn from 'signature-app-v2/app/components/BackBtn';
import HeaderNavbar from 'signature-app-v2/app/components/HeaderNavbar';
import SubtitleText from 'signature-app-v2/app/components/SubtitleText';

export default function DocumentDetailScreen (props) {

	const { uri, title } = props.navigation.state.params;
	const extension = uri.split('.').splice(-1)[0] || ''; 
	const baseUrl = `http://docs.google.com/gview?embedded=true&url=${uri}`;
	function handleString() {
		if(extension != 'png', extension != 'jpg') {
			return true
		}
		return false;
	}
	
	return (
		<View style={styles.container}>
			<HeaderNavbar
				left={
					<BackBtn
						onPress={() => props.navigation.goBack()}
					/>
				}
				center={
					<SubtitleText
						text={title}
						color='white'
						weight='medium'
					/>
				}
			/>
			<View style={styles.documentContainer}>
					<WebView
						bounces={false}
						scrollEnabled={false}
						style={{width: '100%', height: '100%'}}
						source={{uri: baseUrl}}
					/>
				{/* {
					handleString() ? 
					: 
					<Image
						resizeMode='contain'
						style={styles.fill}
						source={{uri}}
					/>
				} */}
			</View>
		</View>
	);
}

DocumentDetailScreen.navigationOptions = {
	header: null
}




