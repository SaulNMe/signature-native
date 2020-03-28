import React, { 
	useEffect, 
	useState 
} from 'react';
import { View } from 'react-native';
import { ScreenOrientation } from 'expo';

import styles from './HomeScreenStyle';
import LogoutBtn from 'signature-app-v2/app/components/LogoutBtn';
import PrimaryBtn from 'signature-app-v2/app/components/PrimaryBtn';
import SearchInput from 'signature-app-v2/app/components/SearchInput';
import SubtitleText from 'signature-app-v2/app/components/SubtitleText';
import HeaderNavbar from 'signature-app-v2/app/components/HeaderNavbar';
import DocumentsContainer from 'signature-app-v2/app/containers/DocumentsContainer';

export default function HomeScreen (props) {
	const [signature, setSignature] = useState(null);
	useEffect(() => {
		ScreenOrientation.unlockAsync()
		//ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
		if(props.navigation.state.params && props.navigation.state.params.path != null){
			setSignature(props.navigation.state.params.path);
		}
	}, [props]);

	return (
		<View style={styles.container}>
			<HeaderNavbar
				center={
					<SubtitleText
						text='Aprobación de solicitudes'
						weight='medium'
						color='white'
					/>
				}
				right={
					<LogoutBtn
						onSelect={()=> props.navigation.navigate('Auth')}
						color='white'
					/>
				}
			/>
			<SearchInput
				onPress={() =>{alert('coso')}}
				placeholder="Buscar..."
				results={17}
				total={53}
			/>
			<DocumentsContainer
				footer={<View style={styles.bottomViewHeight}/>}
			/>
			<View style={styles.bottomView}>
				<View style={[styles.baseVerticalMargin, styles.baseHorizontalMargin]}>
					<PrimaryBtn 
						onPress={ () => props.navigation.navigate('SignatureScreen', {signature})}
						text={signature != null ? 'Editar firma' : 'Crear firma'}
						bgColor="blue"
						hasHorizontalMargin
					/>
				</View>
			</View>
		</View>
	);
}

HomeScreen.navigationOptions = {
	header: null
}


