import React, { 
	// useEffect, 
	useState 
} from 'react';
import { Text, View, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';

import styles from './RejectScreenStyle';
import { Colors } from 'signature-app-v2/app/styles';
import BodyText from 'signature-app-v2/app/components/BodyText';
import CloseBtn from 'signature-app-v2/app/components/CloseBtn';
import HeaderNavbar from 'signature-app-v2/app/components/HeaderNavbar';
import PrimaryBtn from 'signature-app-v2/app/components/PrimaryBtn';
import SubtitleText from 'signature-app-v2/app/components/SubtitleText';

export default function RejectScreen (props) {
	const  [motivo, setMotivo] = useState("");
	
	return (
		<TouchableWithoutFeedback onPress={() => { Keyboard.dismiss()}}>
			<View style={styles.container}>
				<HeaderNavbar
					hasGradient={false}
					center={
						<SubtitleText
							text='darkBlue'
							color='darkBlue'
							text='Rechazar solicitud'
							weight='medium'
						/>
					}
					right={
						<CloseBtn
							onPress={() => props.navigation.goBack()}
						/>
					}
				/>
				<View style={[styles.smallVerticalMargin, styles.smallHorizontalMargin]}>
					<View style={[styles.justifyContentSpaceBetween, styles.row]}>
						<BodyText
							color='dark'
							text='Descripción (opcional)'
						/>
						<BodyText
							color='dark'
							text={`${motivo.length}/500`}
						/>
					</View>
						<TextInput
							value={motivo}
							style={styles.input}
							//autoFocus
							placeholder='Escribe un motivo de rechazo'
							maxLength={500}
							multiline
							underlineColorAndroid='transparent'
							numberOfLines={10}
							onChangeText={(motivo) => {setMotivo(motivo)}}
						/>
						<View style={[styles.alignItemsFlexEnd, styles.justifyContentFlexEnd]}>
							<PrimaryBtn 
								onPress={ () => props.navigation.navigate('HomeScreen')}
								text='Rechazar'
								bgColor="orange"
								isMedium
							/>
						</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}




