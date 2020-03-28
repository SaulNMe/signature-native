import { Google } from 'expo';

export default {
	async signInWithGoogleAsync(){
		try {
			const result = await Google.logInAsync({
				androidClientId: '239006796659-dqaeg3m6n9akk52tm6a0b38ssjjbpa49.apps.googleusercontent.com',
				iosClientId: '239006796659-r6fg77hhcc4ltf7a1ld1sip7oc2bgk97.apps.googleusercontent.com',
				scopes: ['profile', 'email']
			});

			if(result.type === 'success') {
				return { email: result.user.email };
			} else {
				return { cancelled: true };
			}
		} catch(e) {
			return { error: true };
		}
	}
}