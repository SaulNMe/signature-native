import React, { 
	// useEffect, 
	useState,
	useRef
} from 'react';
import { TouchableWithoutFeedback, View, Image, Keyboard } from 'react-native';

import styles from './LoginScreenStyle';
import InputText from 'signature-app-v2/app/components/InputText';
import LabelText from 'signature-app-v2/app/components/LabelText';
import PrimaryBtn from 'signature-app-v2/app/components/PrimaryBtn';
import BigText from 'signature-app-v2/app/components/BigText';
import TextDivider from 'signature-app-v2/app/components/TextDivider';
import GoogleLoginService from 'signature-app-v2/app/services/GoogleLoginService';
import AuthService from 'signature-app-v2/app/services/AuthService';

export default function LoginScreen (props) {
	const usernameRef = useRef();
	const passwordRef = useRef();
	const [state, setState] = useState({
		username: '',
		password: '',
	});

	async function loginWithGoogle() {
		let loginResult = await GoogleLoginService.signInWithGoogleAsync();

		// try {
		// 	await authService.login({
		// 		Correo: loginResult.email,
		// 		TipoCuenta: 1,
		// 		Aplicacion: ''
		// 	})
		// }
		props.navigation.navigate("HomeScreen");
	}
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			
			<View style={styles.container}>
				<Image
					source={require('signature-app-v2/assets/bgCot.png')}
					style={[styles.imageFill]}
					blurRadius={1}
				/>
				<View style={[styles.blurContainer, styles.justifyContentCenter, styles.container]}>
					<View style={[styles.flex1, styles.justifyContentFlexEnd]}>
						<Image
							source={require('signature-app-v2/assets/IntraLogo.png')}
							style={[styles.logo]}
						/>
						<View style={styles.marginScreen}>
							<TextDivider
								text={<BigText text='Intradocs' color='white'/>}
							/>
						</View>
					</View>
					<View style={[styles.marginScreen, styles.flex1, styles.justifyContentCenter]}>
						<InputText
							value={state.username}
							ref={usernameRef}
							textContentType='username'
							iconName='user'
							placeholder='Usuario'
							onSubmitEditing={() => {passwordRef.current.focus()}}
							onChangeText={(text) => { setState((state) => ({...state, username: text})) }}
						/>
						<InputText
							value={state.password}
							ref={passwordRef}
							secureTextEntry={true}
							textContentType='password'
							iconName='lock'
							placeholder='Contraseña'
							returnKeyType='done'
							onChangeText={(text) => { setState((state) => ({...state, password: text})) }}
						/>
					</View>

					<View style={[styles.flex1, styles.column]}>
						<View style={styles.marginScreen}>
							<PrimaryBtn 
								onPress={ () => inputRef.current.focus()}
								text='Ingresar'
								bgColor="blue"
								hasHorizontalMargin
								onPress={() => { props.navigation.navigate('App') }}
							/>
							<TextDivider
								text={<LabelText text='O también puedes' color='white'/>}
							/>
							<PrimaryBtn 
								onPress={ () => { loginWithGoogle() }}
								text='Ingresar con google'
								bgColor="orange"
								hasIcon
								iconName='google-plus'
								hasHorizontalMargin
							/>
						</View>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

LoginScreen.navigationOptions = {
	header: null
}




