import React, { 
	// useEffect, 
	// useState 
} from 'react';
import { Text, View } from 'react-native';

import styles from './DetailScreenStyle';
import HeaderNavbar from 'signature-app-v2/app/components/HeaderNavbar';
import SubtitleText from 'signature-app-v2/app/components/SubtitleText';
import BackBtn from 'signature-app-v2/app/components/BackBtn';
import DoubleText from 'signature-app-v2/app/components/DoubleText';
import SecondaryBtn from 'signature-app-v2/app/components/SecondaryBtn';


export default function DetailScreen (props) {
	const uri = 'https://cotizameqastorage.blob.core.windows.net/0011587003/EXPORTiv.XLSX';

	function reject(){
		props.navigation.navigate('RejectScreen', {requestId: 1});
	}

	function aproveRequest(){
		props.navigation.navigate('HomeScreen');
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
						text='Detalle de la solicitud'
						color='white'
						weight='medium'
					/>
				}
			/>
			<View style={styles.smallHorizontalMargin}>
				<View style={styles.smallVerticalMargin}>
					<DoubleText
						title='Código'
						subtitle='COT-TIC-MN-001'
					/>
				</View>
				<View style={styles.smallVerticalMargin}>
					<DoubleText
						title='Título'
						subtitle='Manual de seguridad de la información SGSI'
					/>
				</View>
				<View style={styles.smallVerticalMargin}>
					<DoubleText
						title='Archivo'
						subtitle='QAS-INT-DO-999.RO - Español.pdf'
					/>
				</View>
				<View style={[styles.row, styles.justifyContentSpaceBetween]}>
					<SecondaryBtn
						text="Ver Documento"
						color='main'
						onPress={() => {props.navigation.navigate('DocumentDetailScreen', {uri, title: 'statement2019_06'})}}
					/>
					<SecondaryBtn
						text="Rechazar"
						color='red'
						onPress={() => {reject()}}
					/>
					<SecondaryBtn
						text="Aprobar"
						color='green'
						onPress={() => {aproveRequest()}}
					/>
				</View>
			</View>
		</View>
	);
}

DetailScreen.navigationOptions = {
	header: null
}




